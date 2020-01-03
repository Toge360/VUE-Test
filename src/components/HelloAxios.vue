<template>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post.news_title}}</strong></p>
      <p>{{post.news_content}}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: []
    }
  },

  // Fetches posts when the component is created.
  // https://www.fitmachen.com/api_rest/companies/8/news
  // http://jsonplaceholder.typicode.com/posts
  created () {
    axios.get('https://www.fitmachen.com/api_rest/companies/8/news')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response);
        this.posts = response.data.news
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
</style>