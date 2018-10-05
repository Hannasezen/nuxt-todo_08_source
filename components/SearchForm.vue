<template>
  <form class="form-inline w-100 mt-5">
    <input type="text" v-model="query" class="form-control mb-2 mr-sm-2" placeholder="Type todo title...">
  </form>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: "SearchForm",
    data() {
      return {
        query: ''
      }
    },
    watch: {
      query(value) {
        this.setQuery(value);
      }
    },
    methods: mapActions({
      setQuery: 'Search/setQuery'
    })
  }
</script>

<style scoped>
  input {
    width: 100% !important;
    margin-right: 0 !important;
  }
</style>