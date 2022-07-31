<template>
  <header class="container">

    <div class="arrow-container">

     <Arrow />
    </div>

    <div>
      <a href="/">Back Home</a>
    </div>

  </header>
</template>

<script>
import Arrow from '../UX/arrow.vue';
export default {
    name: "AdminHeader",
    components: { Arrow }
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
    width: 30px;
    margin-right: 10px;

  }

}

</style>
