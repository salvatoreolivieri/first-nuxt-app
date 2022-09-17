<template>
  <header class="container">


    <a href="/">

      <div class="arrow-container">

         <Arrow />

          Back Home

      </div>

    </a>

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
  justify-content: start;
  align-items: center;

  height: 48px;
  margin-top: 50px;
  margin-bottom: 50px;

  .arrow-container{

    height: 100%;

    display: flex;
    align-items: center;

  }

}

</style>
