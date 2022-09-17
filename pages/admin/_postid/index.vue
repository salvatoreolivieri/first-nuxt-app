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
        />
    </div>

  </div>
</template>

<script>

export default {

  data(){
    return{
      loadedPost: {
        title: 'Universe Explained',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel sequi voluptates quas voluptatibus. Iste voluptates harum eius autem magni delectus quod reiciendis eligendi distinctio. Eveniet adipisci natus itaque nulla!'
      }
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
