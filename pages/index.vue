<template>

  <div>
    <h1>HomePage</h1>
    <button @click="$router.push('/products')" >Go To Products</button>
  </div>

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
