<template>
  <div class="container new-post-area">

    <span>
      <nuxt-link to="/admin">Admin</nuxt-link>

      / New Post

    </span>

    <h1>Create New Post</h1>

    <div class="form-container">
      <AdminPostForm />
    </div>

  </div>

</template>

<script>
import adminVue from '~/layouts/admin.vue'

import AdminPostForm from '~/components/Admin/AdminPostForm.vue'

export default {

  layout: 'admin',

  components:{
    AdminPostForm
  },

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
