<template>
  <header class="container">


    <nuxt-link class="no-active" to="/">

      <div class="arrow-container">

         <Arrow />

          Back Home

      </div>

    </nuxt-link>

  </header>
</template>

<script>

export default {
    name: "AdminHeader",
}
</script>

<style lang="scss" scoped>

header{

  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 48px;
  margin-top: 50px;
  margin-bottom: 50px;

  .arrow-container{

    height: 100%;

    display: flex;
    align-items: center;

  }

  .no-active{
    color: black;
    text-decoration: none;

    &:hover{
      color: #d38048;
      text-decoration: underline;
    }
  }

}

</style>
