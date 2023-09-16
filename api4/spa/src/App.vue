<template>
  <div>
    
    <!-- come essa nav esta sendo colocada imediatamente, esta sendo como um arquivo master -->
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Cadastrar</router-link> |
      <router-link :to="{name:'about'}">Sobre</router-link> |
      <!-- <router-link :to="rotaDinamica"> Contato </router-link> | -->
    </nav>

    <!-- o router-view injeta o componente -->
    <router-view/>

  </div>
</template>

<script>

export default{
    data(){
      return{
        // rotaDinamica:{name:'contato'}
    }
  }
}
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
