<template>
  <div class="container article">
    <h1>{{loadedPost.title}}</h1>

    <p>{{loadedPost.content}}</p>

  </div>
</template>

<script>

import axios from 'axios'

export default{

  asyncData(context){

    return axios.get('https://first-nuxt-app-97703-default-rtdb.firebaseio.com/posts/' + context.params.id + '.json')
      .then(response => {
        return {
          loadedPost: response.data
        }
      })
      .catch(e => context.error(e))
  }

}

</script>

<style lang="scss" scoped>

.article{

  p{
    margin-top: 20px;
  }

}

</style>
