import { createStore } from 'vuex'
import api from '@/services/api';

export default createStore({
  state: {
    books:[]  
  },

  getters: {
    count_book(state){
      return state.books.length;
    }
  },

  mutations: {
      
      save_state(state,data){//recebendo os dados da action
        //salvando os dados no state que é o "mini" banco de dados
        state.books=data
      },

      update_state(state, data){
        //atualizando o state
        state.books.push(data)
      },
  },

  actions: {
      get_all_books(context){//use as actions para se comunicar com o seu back-end
        //pegando os livros da api
        api.pegar_livros()
        .then(response=>{
          //chamando uma mutation
          context.commit('save_state',response.data)  
        })
      },

      update_book(context,data){//mandando um novo livro para o back-end
        //mandando a requisção
        api.adicionar_livro(data);
        //chamando uma mutação para atualizar o state
        context.state.books.push(data)
      }
  },

  // modules: {
  // }

})
