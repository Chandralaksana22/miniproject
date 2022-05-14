<template>
  <body>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-container>
        <b-navbar-brand class="ml-4" href="#">Cozy.ID</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto mr-5">
            <b-navbar-nav>
              <b-nav-item href="#" active> <strong>Home</strong></b-nav-item>
              <b-nav-item href="#" active><strong>Tentang Kami</strong></b-nav-item>
              <b-nav-item href="#" active><strong>Kontak</strong></b-nav-item>
              <b-nav-item href="#" active><strong>Profile</strong></b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </body>
</template>

<script>

export default {
  name: 'HomePage',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
