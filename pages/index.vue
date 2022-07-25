<template>

  <div>

    <nuxt-logo />

    <h1>HomePage</h1>
    <a href="/products">Go To Products</a>
  </div>

</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
export default {
  components: { NuxtLogo },
  name: 'IndexPage'
}
</script>
