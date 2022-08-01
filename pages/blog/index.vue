<template>
  <div class="container">

    <h1>Blog</h1>

    <div class="blog-container">

      <CardPost
        :isAdmin="isAdmin"
        id="1"
        title="Human Analysis"
        previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nobis incidunt quaerat animi sequi nesciunt. Nesciunt harum vitae eligendi accusamus?"
        />

      <CardPost
        :isAdmin="isAdmin"
        id="2"
        title="Universe Theory"
        previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nobis incidunt quaerat animi sequi nesciunt. Nesciunt harum vitae eligendi accusamus?"
        />

    </div>


  </div>

</template>

<script>
import CardPost from '~/components/Posts/CardPost.vue';

export default {
    components: { CardPost },

    props:{

      isAdmin: {
        type: Boolean,
        default: false
      }

    }

}

</script>

<style lang="scss" scoped>

.blog-container{
  display: flex;
}

</style>
