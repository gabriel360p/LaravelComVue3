<template>
  <div>
    <div style="text-align: center;">
      <img style="height: 80px;" alt="Vue logo" src="./assets/logo.png">
    </div>
    <!-- <StateComp/> -->
    <Mutation1Comp/>

   

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import StateComp from './components/StateComp.vue';
import Mutation1Comp from './components/Mutation1Comp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // StateComp,
    Mutation1Comp,

  },

  data() {
    return {
      user:{
        id: 1,
        name: 'Gabriel Costa',
        age: 28,
        email: 'gab@costa.com'}
    }
  },

  methods:{
    save(){
      //mandando os dados para atualizar via mutations
      this.$store.commit('storeUser', this.user)
    }

  },


  created() {//o created é bom usar para debugar

    //acessando os dados do state
    // console.log(this.$store.state.product)
    // console.log(this.$store.state.user)
    // console.log(this.$store.state.user.name)
    // console.log(this.$store.state.user.age)
    // console.log(this.$store.state.user.email)
    // alert('Bem vindo '+this.$store.state.user.name)

    //--------------------------------------------------------

    // const newUser = {
    //   id: 1,
    //   name: 'Gabriel Costa',
    //   age: 28,
    //   email: 'gab@costa.com'
    // }

    //Acessando as mutations/commits
    // this.$store.commit('storeUser', newUser)//nome da função que quero chamar e que esteja salva la nas mutations
    //chamada de função e passando os dados novos

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
  margin-top: 60px;
}
</style>
