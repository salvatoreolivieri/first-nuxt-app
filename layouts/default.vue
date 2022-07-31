<template>

  <div>

    <Header />
    <Nuxt />
    <Footer />

  </div>

</template>

<script>

import Header from '~/components/Navigation/Header.vue'
import Footer from '~/components/Navigation/Footer.vue'

export default {
  components:{
    Header,
    Footer
  }

}
</script>

<style>

</style>
