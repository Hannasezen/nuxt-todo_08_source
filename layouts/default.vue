<template>
  <div class="container">
    <header>
      <h1 class="text-center mt-5">TODO LIST</h1>
      <SearchForm/>
    </header>
    <nuxt/>
  </div>
</template>
<script>
  import SearchForm from "../components/SearchForm";
  export default {
    components: { SearchForm }
  }
</script>
