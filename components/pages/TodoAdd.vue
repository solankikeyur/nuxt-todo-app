<template>
    <v-card>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="todo"
                :append-icon="'mdi-plus-circle'"
                variant="filled"
                label="Enter Todo here"
                type="text"
                @click:append="add"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
  </v-card>
</template>
<script setup>
import useTodoStore from "@/stores/todo";
const todo = useState("todo", () => "");

const emit = defineEmits(["addTodo"]);
const todoStore = useTodoStore();

const add = () => {
    if(!todo.value) {
        return false;
    }
    // emit("addTodo", todo);
    todoStore.addTodo(todo);
    todo.value = "";
}

</script>