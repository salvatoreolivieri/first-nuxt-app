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
import AppButton from '~/components/UI/AppButton.vue'
import AppControlInput from '~/components/UI/AppControlInput.vue'

export default {
  name:"AdminPostForm",

  components:{
    AppButton,
    AppControlInput
  },

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
      console.log('New Post: ', this.newPost);
    },

    onCancel(){
      this.$router.push('/admin/')
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
