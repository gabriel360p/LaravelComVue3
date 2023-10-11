import { createStore } from 'vuex'

export default createStore({
  
  state: {
    //aqui em state é onde a gente vai guardar os dados
    //os dados que ficam salvos aqui podem ser consumidos em qualquer canto do sistema
    //é um "banco de dados front-end"
    //daqui posso chamar todos os valores em qualquer canto
    user:{
      id: 1,
      name: 'John Snow',
      age: 28,
      email: 'john@snow.com'
    },

    product:{ 
      name: 'Iphone 15',
      price: 9000,
    },

    members:[],

  },

  mutations: {
    //as mutations/commit servem para mexer com os dados salvos em state
    //aqui pode criar as funções que mexem com os dados em state
    storeUser(state,dataNewUser){
      //pegando os dados antigos usando o state.user
      //pegando os dados novos passados via parâmetro (dataNewUser)
      // console.log('função storeuser',state.user,dataNewUser);

      // const antigo = state.user;
      state.user=dataNewUser; //atualizando os dados do state.user

      //imprimindo o antes e o depois
      // console.log('Dados antigos: ',antigo);
      // console.log('Dados novos: ',state.user);

      console.log(state.user);
    }

  },




  getters: {

  },

  actions: {
  },

  // modules: {
  // }
})
