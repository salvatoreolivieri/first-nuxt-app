<template>
  <nuxt-link :to="'/blog/' + id" class="card">

    <div class="bg-image"></div>

    <div class="post-data">
      <h2>{{ title }}</h2>
      <p>{{ previewText }}</p>
    </div>

  </nuxt-link>
</template>

<script>
export default {
  name:"CardPost",

  props:{

      id: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      },

      previewText: {
        type: String,
        required: true
      }

    },

  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

.card{

  width: 400px;

  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-right: 40px;

  border: 1px solid black;
  border-radius: 5px;

  .bg-image{
    width: 100%;
    height: 255px;
    background-image: url('~assets/img/article-cover.jpg');
    background-size: cover;
  }

  .post-data{
    padding: 20px;

    h2{
      margin-bottom: 10px;
    }
  }

}

</style>
