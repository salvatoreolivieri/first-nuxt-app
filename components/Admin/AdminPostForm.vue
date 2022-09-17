<template>

  <form @submit.prevent="onSave">

      <AppControlInput v-model="newPost.title">Title</AppControlInput>

      <AppControlInput
                control-type="textarea"
                v-model="newPost.content">Content</AppControlInput>

      <AppButton type="submit">Save</AppButton>

      <AppButton
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onCancel">Cancel</AppButton>

  </form>

</template>

<script>

export default {
  name:"AdminPostForm",

  props:{
    post: {
      type: Object,
      required: false
    }
  },

  data(){

    return{
      newPost: this. post
      ? { ...this.post }
      : {
        title: '',
        content: ''
      }
    }

  },

  methods: {

    onSave(){
      this.$emit('submit', this.newPost)
    },

    onCancel(){
      this.$router.push('/admin/')
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
