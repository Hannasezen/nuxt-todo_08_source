<template>
  <main>
    <AddTodo/>
    <TodoList/>
  </main>
</template>

<script>
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export default {
  components: {
    AddTodo,
    TodoList
  }
}
</script>

<style>
</style>
