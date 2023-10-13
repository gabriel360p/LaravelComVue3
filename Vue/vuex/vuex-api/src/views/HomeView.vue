<template>
  <div class="home container">

    <div style="display:flex; flex-direction:row; justify-content:center; align-items:center">
      <div>
        <HelloWorld msg="Bem Vindo a Biblioteca VUEX"/>
      </div>
      <div>
        <img alt="Vue logo" style="height:70px;" src="../assets/logo.png">
      </div>
    </div>

    <div>
      <h4>Novo Livro</h4>
      <BookCreateComp/>
      <hr>
    </div>


    <div>
      <h4>Livros Salvos:</h4>
      <BooksComp/>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BooksComp from '../components/BooksComp.vue'
import BookCreateComp from '../components/CreateBookComp.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    BooksComp,
    BookCreateComp,
  }
}
</script>
