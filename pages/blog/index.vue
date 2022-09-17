<template>
  <div class="container">

    <h1>Blog</h1>

    <PostList
      :posts="posts"
    />

  </div>

</template>

<script>

import axios from 'axios'

export default {

  data(){
    return{
      posts: []
    }
  },

  methods:{
    apiRequest(){
      axios.get(process.env.baseUrl)
      .then(output =>{
        console.log('questo è il log dei post: ', output.data);

        const postArray = [];
        for (const key in output.data) {
              postArray.push( {...output.data[key], id: key} )
            }

        this.posts = postArray;
      })
    }
  },

  mounted(){
    this.apiRequest()
  }


}

</script>

<style lang="scss" scoped>

</style>
