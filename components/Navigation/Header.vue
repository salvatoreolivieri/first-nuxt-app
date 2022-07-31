<template>
  <header class="container">

    <div class="logo-container">
      <a href="/">
        <img  src="~assets/img/logo.png" alt="[logo]">
      </a>
    </div>

    <nav>

      <ul>

        <li>
          <nuxt-link to="/chi-siamo">Chi siamo</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/servizi">Servizi</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/clienti">Clienti</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/contatti">Contatti</nuxt-link>
        </li>

        <li>
          <button @click="$router.push('/admin')">Admin</button>
        </li>



      </ul>

    </nav>

  </header>
</template>

<script>
export default {
  name:"Header.vue"
}

</script>

<style lang="scss" scoped>

header{

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 48px;
  margin-top: 50px;
  margin-bottom: 50px;

  .logo-container{
    width: 50px;

    img{
      width: 100%;
    }
  }

  nav{

    ul{

      display: flex;
      align-items: center;

      li{

        list-style: none;
        margin-right: 30px;

      }

    }

  }

}

</style>
