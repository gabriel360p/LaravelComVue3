<template>
  <div class="container">

    <div class="row">
      <span class="display-5">Botões de Requisição</span>
      <div class="col">
        <button @click="get_books()" class="btn btn-outline-success">GET ALL</button>
        <button @click="get_book()" class="btn btn-outline-success">GET BOOK</button>
        <button @click="store_book()" class="btn btn-outline-primary">POST</button>
        <button @click="update_book()" class="btn btn-outline-warning">PUT</button>
        <button @click="delete_book()" class="btn btn-outline-danger">DELETE</button>
        <button @click="multiple_request()" class="btn btn-outline-primary"> MULTIPLE</button>
        <button @click="errors()" class="btn btn-outline-danger"> ERROR</button>
        <button @click="abort()" class="btn btn-outline-danger"> ABORTAR/CANCELAR</button>
        <button @click="get_books_default()" class="btn btn-outline-danger"> DEFAULT</button>
        <button @click="call()" class="btn btn-outline-danger"> async com await</button>
      </div>
    </div>
    <hr>
    <div class="row mt-3">
      <span class="display-5">Display</span>
      <div class="col">
        <button @click="clearDisplay()" class="btn btn-outline-danger">Limpar</button>
      </div>

      <pre>
        {{ books }}
      </pre>

      <pre v-if="book.title != ''">
        {{ book }}
      </pre>


      <pre>
        {{ users }}
      </pre>

    </div>


  </div>
</template>

<script>
import axios from 'axios'//aq estou chamando o axios, mas de uma forma que tenho que configurar manualmente toda vez que quero usar

import axiosDefault from 'axios' //mas a outra forma de se usar o axios, é passando configurações default (padrão), assim ajuda mais
//inciando uma instância "global/padrão" do axios
const http = axiosDefault.create({
  //injetando uma url padrão
  baseURL: 'http://localhost:8000/api/'
})

// //os interceptores estão disponíveis antes de chegar no .then .catch
// axios.interceptors.response.use(function (config) {
//   //intercepta qualquer requisção antes de ser enviada
//   return console.log(config)
// }, function (error) {
//   //outra forma de tratar error, mas dessa forma é global
//   return Promise.reject(error);
// }
// )

// //os interceptores estão disponíveis antes de chegar no .then .catch
// axios.interceptors.request.use(function (config) {
//   //intercepta qualquer requisção antes de ser enviada
//   return console.log(config)
// }, function (error) {
//   //outra forma de tratar error, mas dessa forma é global
//   return Promise.reject(error);
// }
// )


// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      books: {},
      users: {},

      book: {
        title: '',
        price: '',
        categorie: '',
      },

      book2s: {}

    }
  },

  methods: {
    clearDisplay() {
      this.books = {},
        this.book = {}
    },
    get_books_default() {
      //chamando a instância "global/padrão" do axios
      http.get('books').then(response => { this.books = response })
    },
    get_books() {
      //puxando o axios de forma raiz assim, funciona muito bem também
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/books'
      })
        .then(response => {
          //captura a eventual resposta
          this.books = response.data
        })
        .catch(error => {
          //captura eventuais errros
          alert(error)
        })
    },

    get_book() {
      //puxando o axios de forma raiz assim, funciona muito bem também
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/book/view',
        //os dados desses parâmetros podem ser recuperados usando $request->nomeParâmetro
        //os objetos params são os objetos data do get axios 
        params: { 'id': 1 },
      })
        .then(response => {
          //captura a eventual resposta
          this.book = response.data
          // console.log(response)
        })
        .catch(error => {
          //captura eventuais errros
          alert(error)
        })
    },

    store_book() {
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/books',

        //mandando os dados sobre o novo "item" a ser salvo no banco
        data: { title: 'A monga', categorie: 'terror', author: 'Amanda' }
      })
        .then(response => {
          alert(response)
          // console.log(response)
        })
        .catch(error => {
          alert(error)
          // console.log(error)
        })
    },

    update_book() {
      axios({
        method: 'put',
        url: 'http://localhost:8000/api/books',

        //passando os novos dados:
        data: { id: 11, title: 'Joker', categorie: 'animação', author: 'Oda' }
      })
        .then(response => {
          alert(response)
          console.log(response)
        })
        .catch(error => {
          alert(error)
          console.log(error)
        })
    },

    delete_book() {
      axios({
        method: 'delete',
        url: 'http://localhost:8000/api/books',

        //mandando o id do objeto que preciso apagar do banco
        data: { id: 11 }
      })
        .then(response => {
          alert(response)
          console.log(response)
        })
        .catch(error => {
          alert(error)
          console.log(error)
        })
    },

    multiple_request() {
      //multiplas requests usando Promises!
      Promise.all([
        axios.get('http://localhost:8000/api/books'),
        axios.get('http://localhost:8000/api/users'),
      ])
        .then(response => {
          //a resposta vai ser uma array, onde cada posição dessa array é um outra array contendo os objetos de cada requisição
          console.log(response)//lista completa
          // console.log(response[0].data)//todos e somente os livros
          this.books = response[0].data
          // console.log(response[1].data)//todos e somente os usuários
          this.users = response[1].data
        })
        .catch(error => { console.log(error) })
    },

    errors() {
      axios.get('http://localhost:8000/api/userss').then(response => { console.log(response) })
        .catch(error => {
          //o tratamento de erros é bem completo, a variável erro também apresenta uma response que tem alguns campos informativos:
          console.error(error.response.status)//posso pegar o código status da requisição
          console.error(error.response.headers)//posso pegar o cabeçalho
          console.error(error.response.data)//posso pegar os dados que o servidor mandou
          console.error(error.response.data.message)//dentro de data, tem uma parte que guarda uma mensagem que foi enviada pelo servidor (laravel), posso pegar e imprimir na tela de alguma forma
          alert(error.response.data.message)//imprimindo na tela para o usuário

          //console.error -> uma forma bonitinha de mostrar o erro no console
        })
    },

    abort() {
      const controller = new AbortController();
      axios.get('http://localhost:8000/api/users').then(response => { console.log(response) }).catch(e => { console.error(e) })
      controller.abort();
    },



    //funções usadas para o exmeplo
    save(books) {
      this.book2s = books
    },
    print(){
      console.log(this.book2s)
    },
    //para usar o await, a função precisa dessa definição async, ela precisa ser declarada como assíncrona, ou seja, alguma coisa dentro dela precisa de algum tempo extra, precisa
    //esperar para dar continuidade, e é assim que se usa funções assíncronas com o await. Um bom exemplo é usar para aguardar enquanto algo está sendo guardado no banco de dados
    async call() {
      //esse await informa que a função precisa esperar 
      await http.get('books').then(response => { this.save(response) })//isso aqui terminar
      this.print()//para depois seguir para isso aqui
    }

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
