<template>

    <div >
      <Navbar/>
      <div class="container">
  
        <div class="row">
          <span class="display-5">Itens Devolvidos</span>
        </div>
  
        <div class="row">
          <div class="card p-3 mt-3 mb-4" v-for="iten in itens" :key="iten.id">
  
            <div>
              <h4>  {{ iten.name }} </h4>
              <hr>
            </div>
            
            <div class="card-body">
              
              <p>{{ iten.more }}</p>
  
              <p class="badge bg-warning" v-if="iten.refound==false">Não devolvido</p>
              <p v-else class="badge bg-success">Devolvido</p>
            </div>
  
            <div>
              <hr>
              <button @click="iten_refound(iten)" class="btn btn-outline-success" v-if="iten.refound==false">Devolvido</button>
              <button @click="iten_reopen(iten)" class="btn btn-outline-success" v-else>Reabrir</button>
              <router-link :to="`/itens/edit/${iten.id}`" class="btn btn-outline-success">Abrir</router-link>
              <button @click="iten_expurgue(iten)" class="btn btn-outline-danger">Deletar</button>
            </div>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
    
  </template>
  
  <script>
  import Itens from '@/services/Itens';
import Navbar from '../../components/NavbarComp.vue'
  
  export default {
    name: 'HomeView',
    components:{
      Navbar,
    },

    data(){
      return{
        iten:{
          name:'',
          place:'',
          categorie:'',
          more:'',
        },
        itens:[],
      }
    },
  
    methods:{
        all(){
            Itens.devolvidos_itens()
            .then(response=>{
                this.itens=response.data
            });
        },
  
      iten_expurgue(iten){
        Itens.deletar_item(iten);
      },
  
      iten_refound(iten){
        Itens.devolver_item(iten)
      },
  
      iten_reopen(iten){
        Itens.reabrir_item(iten);
      }
  
    },
  
    mounted(){
      this.all();
    }
    
  }
  </script>
  