import { defineStore } from "pinia";

export default defineStore("todos", {
  state: () => ({
    todoList: [],
    filterValue: "all",
  }),
  getters: {
    filteredTasks: (state) => {
      if (state.filterValue === "completed") {
        return state.todoList.filter((todo) => todo.isCompleted);
      } else if (state.filterValue === "remaining") {
        return state.todoList.filter((todo) => !todo.isCompleted);
      }
      return state.todoList;
    },
  },
  actions: {
    addTodo(todo) {
      this.todoList.push({
        name: todo.value,
        isCompleted: false,
      });
      this.updateTodoList();
    },
    getTodoList() {
      return localStorage.getItem("todo-list")
        ? JSON.parse(localStorage.getItem("todo-list"))
        : [];
    },
    updateTodoList() {
      localStorage.setItem("todo-list", JSON.stringify(this.todoList));
    },
    removeTodo(t) {
      this.todoList = this.todoList.filter((todo,index) => index !== t);
      this.updateTodoList();
    },
    updateTodo(i, name) {
      this.todoList.map((todo, index) => {
        if(index === i) {
          todo.name = name;
        }
        return todo;
      })
      this.updateTodoList();
    }
  },
});
