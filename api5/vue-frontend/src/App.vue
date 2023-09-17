<template>
  <div>
      <nav class="navbar text-white navbar-expand-lg border-bottom border-body" data-bs-theme="dark">

      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

          <router-link to="/" class="navbar-brand" >Lost-Found</router-link>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">

              <router-link class="nav-link" to="" aria-current="page">Adicionar Perdido</router-link>

            </li>
            <li class="nav-item">

              <router-link class="nav-link"  to="">Devolvidos</router-link>

            </li>
            <li class="nav-item">

              <router-link class="nav-link" to="/places/create" aria-disabled="true">Lugares</router-link>

            </li>
            <li class="nav-item">

              <router-link class="nav-link" to="/categories/create" aria-disabled="true">Categorias</router-link>

            </li>
            <li class="nav-item">

              <router-link class="nav-link" to="/about" aria-disabled="true">Sobre</router-link>

            </li>

          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>


  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
