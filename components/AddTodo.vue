<template>
  <div class="card mt-4">
    <div class="card-body">
      <form class="form-inline w-100" @submit.prevent="onSubmit">
        <input type="text" v-model="title" class="form-control mb-2 mr-sm-2" placeholder="Type new todo title...">
        <button type="submit" class="btn btn-success mb-2">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddTodo",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      onSubmit() {
        this.$emit('add', this.title);
        this.title = '';
      }
    }
  }
</script>

<style scoped>
  .form-inline input, .form-inline button {
    margin-bottom: 0 !important;
  }
  .form-inline input {
    width: 94%;
  }
</style>
