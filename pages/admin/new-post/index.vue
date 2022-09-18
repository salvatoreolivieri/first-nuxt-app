<template>
  <div class="container new-post-area">

    <span>
      <nuxt-link to="/admin">Admin</nuxt-link>

      / New Post

    </span>

    <h1>Create New Post</h1>

    <div class="form-container">
      <AdminPostForm
      @submit="onSubmitted"/>
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
      editedPost:{
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },

  methods:{

    // Funzione per salvare dati nel database di firabse utilizzando il metodo post di axios
    onSubmitted(postData) {
      axios.post(process.env.baseUrl, postData)
      .then(output => {
        this.$router.push('/admin/')
      })
      .catch(error =>{
        context.error(error);
      })

    }

  }

}
</script>

<style lang="scss" scoped>

.new-post-area{

  h1{
    margin-top: 20px;
  }

  .form-container{
    width: 50%;
  }

}

</style>
