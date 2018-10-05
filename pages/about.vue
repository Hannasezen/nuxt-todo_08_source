<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post of posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p v-html="post.body"></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "about",
    middleware: ['auth'],
    head: {
      title: 'About Page! 🚀',
      meta: [
        { hid: 'description', name: 'description', content: 'About page description' }
      ],
    },
    async asyncData({ app }) {
      const posts = await app.$axios.$get('/posts');
      console.log(posts);
      return { posts };
    }
  }
</script>

<style scoped>
</style>
