<template>

<div >
    <h1>{{posts.news_title}}</h1>
    <img v-if="posts.news_img" v-bind:src="'https://www.fitmachen.com/files/'+posts.news_img" />
    <p>{{posts.news_content}}</p>
</div>




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

      console.log(this.$route.params.id);
    axios.get('https://www.fitmachen.com/api_rest/companies/8/news/'+this.$route.params.id+'/')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response);
        this.posts = response.data.news[0];
        document.title = this.posts.news_title
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

 
}
</script>

<style scoped>
</style>