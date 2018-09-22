<template>
  <form class="form-inline w-100">
    <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Type todo title...">
    <button type="submit" class="btn btn-outline-dark mb-2">Search</button>
  </form>
</template>

<script>
  export default {
    name: "SearchForm"
  }
</script>

<style scoped>
  input {
    width: 92% !important;
  }
</style>
