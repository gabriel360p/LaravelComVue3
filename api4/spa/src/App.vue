<template>
  <div>
    
    <!-- come essa nav esta sendo colocada imediatamente, esta sendo como um arquivo master -->
    <nav class="text-center">
      <router-link to="/">Tarefas</router-link> |
      <router-link to="/tarefas/create">Nova Tarefa</router-link> |
      <router-link to="/tarefas/concluidas">Tarefas Concluidas</router-link> |
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
