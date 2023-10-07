<template>
  <div class="row container">

    <div class="col-auto">
      <span class="display-4 border-bottom" style="color:white">To-DoVue</span>
    </div>
    <div class="col-auto">
      <nav>
        <router-link to="/">Tarefas</router-link> |
        <router-link to="/completed">Concluídas</router-link> |
        <router-link to="/categories">Categorias</router-link> |
        <router-link to="/about">Sobre</router-link>
      </nav>
    </div>
  </div>

  <router-view/>
</template>

<script>

export default{
  name:'AppVue',

}

</script>

<style>
#body {
  background-color:black;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
}

nav a:hover {
  font-weight: bold;
  color: grey;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
