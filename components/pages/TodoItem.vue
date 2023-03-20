<template>
  <tr class="todo-item" :class="todo.isCompleted ? 'completed-task' : ''">
      <td v-if="editIndex === index">
        <v-text-field
          v-model="todoValue"
          style="margin-top: 12px; width: 100%"
          bg-color="white"
        ></v-text-field>
      </td>
      <td v-else>
        {{ todo.name }}
      </td>
      <td v-if="editIndex === index" style="text-align: right;">
        <v-btn size="small"  color="warning" @click="update"
          >Update</v-btn
        >
        <v-btn size="small" style="color: white;margin-left: 5px;" color="#E53935" @click="cancel"
          >Cancel</v-btn
        >
      </td>
      
      <td v-else style="text-align: right;" >
        <v-btn
          style="float: right"
          icon="mdi-delete"
          color="#E53935"
          size="small"
          class="delete-btn"
          @click="removeTodo"
        ></v-btn>
        <v-btn
          style="float: right"
          icon="mdi-pencil"
          color="warning"
          size="small"
          class="delete-btn"
          @click="edit(index, todo.name)"
        ></v-btn>
        <v-checkbox-btn
          color="green"
          style="float: right"
          v-model="todo.isCompleted"
          @change="useTodoStore().updateTodoList(todo)"
        ></v-checkbox-btn>
      </td>
  </tr>
</template>

<style scoped>
.completed-task {
  background-color: #b9f6ca;
}
.delete-btn {
  color: white;
  margin-left: 5px;
}
</style>

<script setup>
import useTodoStore from "@/stores/todo";
const todoValue = useState("todoValue", () => "");
const editIndex = useState("editIndex", () => null);
const props = defineProps({
  todo: Object,
  index: Number,
});
const removeTodo = () => {
  if (confirm("Are you sure ?")) {
    useTodoStore().removeTodo(props.index);
  }
};
const update = () => {
  if(!todoValue.value) {
    return false;
  }
  useTodoStore().updateTodo(editIndex.value, todoValue.value);
  editIndex.value = null;
  todoValue.value = "";
};

const edit = (i, name) => {
  editIndex.value = i;
  todoValue.value = name;
}

const cancel = () => {
  editIndex.value = null;
  todoValue.value = "";
}
</script>
