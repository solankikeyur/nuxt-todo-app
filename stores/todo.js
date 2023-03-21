import { defineStore } from "pinia";
import userStore from "@/stores/user";

export default defineStore("todos", {
  state: () => ({
    todoList: [],
    filterValue: "all",
    showLoader: false
  }),
  getters: {
    filteredTasks: (state) => {
      if (state.filterValue === "completed") {
        return state.todoList.filter((todo) => todo.isCompleted);
      } else if (state.filterValue === "remaining") {
        return state.todoList.filter((todo) => !todo.isCompleted);
      }
      return state.todoList;
    }
  },
  actions: {
    async addTodo(todo) {
      this.showLoader = true;
      const {data,error} = await useSupabaseClient().from("todo").insert([{
        "name" : todo.value,
        "isCompleted" : false,
        "user_id" : userStore().getUserId
      }]);
      await this.getTodoList();
      this.showLoader = false;
    },
    async getTodoList() {
      // console.log(userStore().getUserId());
      this.showLoader = true;
      const client = useSupabaseClient();
      const {data: todos} = await client.from("todo").select("*").eq("user_id", userStore().getUserId).order("id");
      this.todoList = todos;
      this.showLoader = false;
      return todos;
    },
    async updateTodoList(todo) {
      this.showLoader = true;
      const {data, error} = await useSupabaseClient().from("todo").update({name: todo.name, isCompleted: todo.isCompleted}).match({id: todo.id});
      await this.getTodoList();
      this.showLoader = false;
    },
    async removeTodo(t) {
      this.showLoader = true;
      const {data, error} = await useSupabaseClient().from("todo").delete().match({id: t});
      await this.getTodoList();
      this.showLoader = false;
    },
    async updateTodo(i, name) {
      this.showLoader = true;
      const {data, error} = await useSupabaseClient().from("todo").update({name: name}).match({id: i});
      await this.getTodoList();
      this.showLoader = false;
    },
    async completeTodo(todo) {
      this.showLoader = true;
      const {data, error} = await useSupabaseClient().from("todo").update({isCompleted: todo.isCompleted}).match({id: todo.id});
      await this.getTodoList();
      this.showLoader = false;
    }
  },
});
