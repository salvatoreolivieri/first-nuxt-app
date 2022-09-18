<template>
  <div class="container edit-post-area">

    <span>
      <nuxt-link to="/admin">Admin</nuxt-link>

      / Edit Post / {{ $route.params.postid  }}
    </span>

    <h1>Edit Post, with ID: {{ $route.params.postid  }}</h1>

    <div class="form-container">
      <AdminPostForm
        :post="loadedPost"
        @submit="editPost"
      />
    </div>

  </div>
</template>

<script>

import adminVue from '~/layouts/admin.vue'
import axios from 'axios'

export default {

  layout: 'admin',

  data(){
    return{

    }
  },

  asyncData(context) {
    return axios
      .get('https://first-nuxt-app-97703-default-rtdb.firebaseio.com/posts/' + context.params.postid + '.json')
      .then(output => {
        return{
          loadedPost: output.data
        }
      })
  },

  methods: {
    editPost(editedPost) {
      axios.put('https://first-nuxt-app-97703-default-rtdb.firebaseio.com/posts/' + this.$route.params.postid + '.json', editedPost)

        .then(output =>{
          this.$router.push('/admin/')
        })

        .catch(e => console.log(e))
    }
  }

}
</script>

<style lang="scss" scoped>

.edit-post-area{

  h1{
    margin-top: 20px;
  }

  .form-container{
    width: 50%;
  }

}


</style>
