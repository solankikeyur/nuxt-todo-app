<template>
  <head>
    <title>Nuxt Todo | Home</title>
  </head>
  <div>
    <AddTodo></AddTodo>
  </div>

  <div>
    <ClientOnly>
      <v-select
        label="Filter"
        class="filter-todo"
        bg-color="white"
        :items="todoFilters"
        item-title="title"
        item-value="value"
        v-model="todoStore.filterValue"
      ></v-select>
    </ClientOnly>
  </div>

  <div>
    <v-card class="todo-list">
      <v-table>
        <tbody v-if="filteredTasks && filteredTasks.length > 0">
          <TodoItem
            v-for="(todo, index) in filteredTasks"
            :key="index"
            :todo="todo"
            :index="index"
          ></TodoItem>
        </tbody>
        <tbody v-else>
          <tr>
            <td>No todo(s) found.</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>
<script setup>
import AddTodo from "~~/components/pages/TodoAdd.vue";
import TodoItem from "~~/components/pages/TodoItem.vue";
import useTodoStore from "../stores/todo";

const todoStore = useTodoStore();

const todoFilters = [
  { title: "All", value: "all" },
  { title: "Completed", value: "completed" },
  { title: "Remaining", value: "remaining" },
];

const filteredTasks = computed(() => todoStore.filteredTasks);

onMounted(() => {
  todoStore.todoList = todoStore.getTodoList();
});

</script>

<style scoped>
.todo-list {
  /* margin-top: 20px; */
  background-color: #bad7e9;
}
.filter-todo {
  margin-top: 10px;
}
</style>
