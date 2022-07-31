<template>

  <div>

    <AdminHeader />
    <Nuxt />
    <Footer />

  </div>

</template>

<script>



import Footer from '~/components/Navigation/Footer.vue'
import AdminHeader from '../components/Admin/AdminHeader.vue'

export default {
  components:{
    Footer,
    AdminHeader
}

}
</script>

<style>

</style>
