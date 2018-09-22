<template>
  <main>
    <AddTodo @add="onAdd"/>
    <TodoList :items="todoList"/>
  </main>
</template>

<script>
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

function* genId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const generateId = genId();

export default {
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    onAdd(title) {
      this.todoList.push({
        title,
        id: generateId.next().value,
        done: false,
      });
    }
  }
}
</script>

<style>
</style>
