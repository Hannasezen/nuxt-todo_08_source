<template>
  <div class="container">
    <header>
      <h1 class="text-center mt-5">TODO LIST</h1>
      <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
      <button v-if="!$auth.loggedIn" @click.prevent="login" class="btn btn-primary btn-block">Login with Google!</button>
      <button v-else @click.prevent="logout" class="btn btn-primary btn-block">Logout</button>
      <SearchForm/>
    </header>
    <nuxt/>
  </div>
</template>
<script>
  import SearchForm from "../components/SearchForm";
  export default {
    components: { SearchForm },
    methods: {
      login() {
        this.$auth.loginWith('google');
      },
      logout() {
        this.$auth.logout();
      }
    }
  }
</script>
