<template>

  <div>

    <nuxt-logo />

    <h1>HomePage</h1>
    <button @click="$router.push('/products')" >Go To Products</button>
  </div>

</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
export default {
  components: { NuxtLogo },
  name: 'IndexPage'
}
</script>
