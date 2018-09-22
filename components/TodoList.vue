<template>
  <ul class="list-group mt-4">
    <TodoItem v-for="item of items" :key="item.id" :item="item"/>
  </ul>
</template>

<script>
  import TodoItem from "./TodoItem";

  export default {
    name: "TodoList",
    components: { TodoItem },
    props: {
      items: {
        type: Array,
        required: true,
        defaultValue: []
      }
    }
  }
</script>
