<template>
  <div class="container admin-area">
    <h1>Admin Area</h1>

    <button @click="$router.push('/admin/new-post/')">Create New Post</button>

    <h2>Existing Post</h2>

    <PostList
      :posts="posts"
      :isAdmin='true'
    />

  </div>
</template>

<script>
import axios from 'axios'
import adminVue from '~/layouts/admin.vue'

export default {

  layout: 'admin',

  data(){
    return{
      posts: {}
    }
  },

  methods:{
    apiRequest(){
      axios.get(process.env.baseUrl)
      .then(output =>{
        console.log('questo è il log dei post: ', output.data);
        this.posts = output.data;
      })
    }
  },

  updated(){
    this.apiRequest()
  },

  mounted(){
    this.apiRequest()
  }

}

</script>

<style lang="scss" scoped>

.admin-area{

  button{
    margin: 20px 0 50px 0;
  }

  h2{
    font-size: 36px;
  }

}

</style>
