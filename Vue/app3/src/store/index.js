import { createStore } from 'vuex'

export default createStore({

  state: {
    //aqui em state é onde a gente vai guardar os dados
    //os dados que ficam salvos aqui podem ser consumidos em qualquer canto do sistema
    //é um "banco de dados front-end"
    //daqui posso chamar todos os valores em qualquer canto
    //ele é como um banco de dados, mas os dados estão para vizualicação
    user: {
      id: 1,
      name: 'John Snow',
      age: 28,
      email: 'john@snow.com'
    },

    product: {
      name: 'Iphone 15',
      price: 9000,
    },

    members: [],

    cart: [
      {
        id: 5,
        name: "Computador",
        price: 4000,
      },
    ],

    //lista de produtos
    produtos: [
      {
        id: 1,
        name: "Iphone",
        price: 9000,
      },
      {
        id: 2,
        name: "Camiseta",
        price: 10,
      },
      {
        id: 3,
        name: "Vestido",
        price: 70,
      },
      {
        id: 4,
        name: "Nokia",
        price: 4000,
      },
    ],

    bancoBackEnd: [],

    bancoFrontEnd: [],

    carro: {
      name: '',
      cor: '',
      price: '',
    },
  },

  mutations: {
    //use as mutations para se comunicar com o seu front-end

    updateBackEnd(state, data) {
      state.bancoBackEnd.push(data)
    },

    updateFrontEnd(state, data) {
      state.bancoBackEnd.push(data)
    },


    //as mutations/commit servem para mexer com os dados salvos em state
    //aqui pode criar as funções que mexem com os dados em state
    storeUser(state, dataNewUser) {
      //pegando os dados antigos usando o state.user
      //pegando os dados novos passados via parâmetro (dataNewUser)
      // console.log('função storeuser',state.user,dataNewUser);

      // const antigo = state.user;
      state.user = dataNewUser; //atualizando os dados do state.user

      //imprimindo o antes e o depois
      // console.log('Dados antigos: ',antigo);
      // console.log('Dados novos: ',state.user);

      console.log(state.user);
    },


    adicionarProduto(state, data) {
      //Usando a função push para empurrar os dados na arraylist
      state.produtos.push(data);
    },


    adicionarCarrinho(state, data) {
      //Usando a função push para empurrar os dados na arraylist
      state.cart.push(data);
    },

    removerProduto(state, data) {
      //localizando o objeto/informação na lista de objetos
      const position = state.produtos.indexOf(data)
      //removendo a informação da lista de objetos, o 1 é para limitar, ele deve tirar apenas UM por vez, sem essa limitação ele tava apagando tudo
      state.produtos.splice(position, 1)
      // console.log(state.produtos)
    },


    removerCart(state, data) {//localizando o objeto/informação na lista de objetos
      const position = state.cart.indexOf(data)

      //aqui estou verficando se o retorno não é maior que ou igual a 0
      if (position >= 0) {
        //removendo a informação da lista de objetos, o 1 é para limitar, ele deve tirar apenas UM por vez, sem essa limitação ele tava apagando tudo
        state.cart.splice(position, 1)
        console.log(position)
      } else {
        console.log(position)
      }

    }


  },

  getters: {
    //os getters funciona como um computed
    totalCart(state) {
      return state.cart.length;
    }
  },

  actions: {
    //as actions elas fazem a mesma coisa que as mutations mas não da mesma forma
    //aqui vc cria funções normalmente, contudo é bom usar para se comunicar com o back-end
    //é bom usar um sistema de "drop", as actions chama o mutations e as mutations chama o state
    //ela serve para performar promises - promessas, é bom para se comunicar com o seu back-end
    //a principal diferença é entre actions e mutations é que actions tem promisses, o sistema pode continuar funcionando enquanto alguma função complexa é disparada
    //ja as mutations não tem promisses, e o sistema fica preso esperandoa a rotina acabar
    //o vuex recomenda o fluxo de: chamar action -> mutation -> state, esse é o fluxo recomendado 

    storeCar(context, data) {
      //manda o dado para o back-end
      // e depois insere no state pelo push

      //simulando o back-end
      context.commit('updateBackEnd', data);

      //atualizando os dados do front-end
      context.commit('updateFrontEnd', data)

    },

  },

  // modules: {
  // }
})
