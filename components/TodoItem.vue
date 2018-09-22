<template>
  <li class="list-group-item">
    <form>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="done">
        <label class="form-check-label" for="done">Купить хлеб</label>
      </div>
      <!--<button type="submit" class="btn btn-primary">Submit</button>-->
    </form>
  </li>
</template>

<script>
  export default {
    name: "TodoItem"
  }
</script>

<style scoped>
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
