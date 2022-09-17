<template>
  <div class="blog-container">

    <CardPost
      v-for="item in posts"
      :key="item.id"
      :isAdmin="isAdmin"
      :id="item.id"
      :title="item.title"
      :content="item.content"
    />

  </div>
</template>

<script>

export default {

  props:{
    posts:{
      type: Array,
      required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
      }
  },

}
</script>

<style lang="scss" scoped>

.blog-container{
  display: flex;
  flex-wrap: wrap;
}

</style>
