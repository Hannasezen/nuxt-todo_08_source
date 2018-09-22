<template>
  <ul class="list-group mt-4">
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
  </ul>
</template>

<script>
  import TodoItem from "./TodoItem";
  export default {
    name: "TodoList",
    components: { TodoItem }
  }
</script>
