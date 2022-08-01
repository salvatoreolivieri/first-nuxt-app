<template>
  <div class="container admin-area">
    <h1>Admin Area</h1>

    <button @click="$router.push('/admin/new-post/')">Create New Post</button>

    <h2>Existing Post</h2>

    <div class="existing-post-container">

      <CardPost
          isAdmin
          id="1"
          title="Human Analysis"
          previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nobis incidunt quaerat animi sequi nesciunt. Nesciunt harum vitae eligendi accusamus?"
          />

      <CardPost
        isAdmin
        id="2"
        title="Universe Theory"
        previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nobis incidunt quaerat animi sequi nesciunt. Nesciunt harum vitae eligendi accusamus?"
        />

    </div>

  </div>
</template>

<script>
import adminVue from '~/layouts/admin.vue'
import CardPost from '~/components/Posts/CardPost.vue';


export default {

  layout: 'admin',

  components:{
    CardPost
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

  .existing-post-container{
    display: flex;
  }


}

</style>
