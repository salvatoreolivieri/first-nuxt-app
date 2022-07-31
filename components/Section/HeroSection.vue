<template>

  <div class="container hero-section">

    <div class="unique-value-proposition">

      <h1>Lorem, ipsum dolor.</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quae sit eius qui ex assumenda tempore reprehenderit necessitatibus, earum aut?</p>

      <button>Start Journey</button>

    </div>

    <div class="img-container">

      <img src="~assets/img/statua.png" alt="">


    </div>


  </div>

</template>

<script>
export default {
  name:"HeroSection"
}
</script>

<style lang="scss" scoped>

.hero-section{
  height: calc(100vh - 148px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .unique-value-proposition{

    max-width: 500px;


    p{
      font-size: 24px;
      margin: 20px 0;
      line-height: 1.58em;
    }
  }

  .img-container{
    width: 450px;

    margin-right: 100px;

    img{
      width: 100%;
    }

  }

}

</style>
