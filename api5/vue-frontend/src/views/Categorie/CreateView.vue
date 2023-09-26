<template>
<div>
    <Navbar/>
    <div class="container mt-3">
        <div class="row">
            <div class="card p-4">
                <div class="card-header">
                    <span class="display-5">Nova Categoria</span>
                </div>
                <form @submit.prevent="store_categorie()">
                    <div class="mb-3">
                    <label for="" class="form-label">Nome da Categoria</label>
                    <input type="text"
                        class="form-control" required name="name" v-model="categorie.name" id="" aria-describedby="helpId" placeholder="">
                    </div>
                    <button class="btn btn-outline-success">Salvar</button>
                </form>

            </div>
        </div>

        <div class="row mt-3">
            <div>
                <span class="display-5">Categorias</span>
            </div>

          <div>
            <button class="btn btn-outline-success mt-2" @click="attPag()"> Atualizar </button>
          </div>
            <div>
                <div v-for="categorie in categories" :key="categorie.id" class=" p-2 m-2">
                    <li> {{ categorie.name }}</li>    
                </div>

            </div>

        </div>


    </div>
</div>

</template>

<script>
import Navbar from '../../components/NavbarComp.vue';
import Categories from "../../services/Categories";

export default{
    name: 'CreateView',
    components:{
        Navbar,
    },

    data(){
        return{
            categorie:{
                name: '',
            },
            categories:[]
        }
    },

    methods:{
      attPag(){
        location.reload();
      },
        store_categorie(){
            Categories.salvar_categoria(this.categorie);
            this.categorie=[]; 
        },
        
        all(){
            Categories.listar_categorias()
            .then(response=>{
                this.categories=response.data;
            });
        }

    },

    mounted(){
        this.all()  
    },

}

</script>