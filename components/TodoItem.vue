<template>
  <li class="list-group-item">
    <form>
      <div class="form-group form-check">
        <input type="checkbox" :checked="item.done" class="form-check-input" id="done">
        <label class="form-check-label" for="done">{{ item.title }}</label>
      </div>
      <div class="controls">
        <button class="btn btn-sm btn-primary">Edit</button>
        <button class="btn btn-sm btn-danger">Delete</button>
      </div>

    </form>
  </li>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .controls .btn-danger {
    margin-left: 10px;
  }
  .list-group-item form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .list-group-item {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .form-group {
    margin-bottom: 0;
  }
  .form-check-label {
    margin-bottom: 0;
    margin-left: 20px;
  }
</style>
