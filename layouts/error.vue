<template>
  <div class="container error-wrapper">
    <h1>Error 404</h1>
    <p>Please come <nuxt-link to="/">back home</nuxt-link></p>
  </div>
</template>

<style lang="scss" scoped>

.error-wrapper{
  height: calc(100vh - 148px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    margin-top: 20px;
    font-size: 24px;
  }
}


</style>
