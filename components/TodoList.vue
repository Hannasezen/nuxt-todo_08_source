<template>
  <ul class="list-group mt-4">
    <TodoItem v-for="item of items" :key="item.id" :item="item"/>
  </ul>
</template>

<script>
  import TodoItem from "./TodoItem";
  import { mapGetters } from 'vuex';
  
  export default {
    name: "TodoList",
    components: { TodoItem },
    computed: mapGetters({
      items: 'Todo/getTodoList'
    })
  }
</script>
