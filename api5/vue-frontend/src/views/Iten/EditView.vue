<template>
<div>
<Navbar/>
<div class="container mt-3">
        <div class="row">
            <div class="card p-4">
                <div class="card-header">
                    <span class="display-5">Item Perdido</span>
                </div>
                 <form @submit.prevent="update_item()">
                    <div class="mb-3">
                    <label for="" class="form-label">Nome do Item</label>
                    <input type="text"
                        class="form-control" required name="name" v-model="iten.name" id="" aria-describedby="helpId" placeholder="">
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label">Lugar</label>
                        <select class="form-select form-select-lg" required name="place" v-model="iten.place" id="">
                            <option v-for="place in places" :key="place.id" >{{ place.name }}</option>
                        </select>
                    </div>


                    <div class="mb-3">
                        <label for="" class="form-label">Categoria</label>
                        <select class="form-select form-select-lg" name="categorie" v-model="iten.categorie" required id="">

                            <option v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</option>

                        </select>
                    </div>

                    <div class="mb-3">
                      <label for="" class="form-label">Descrição</label>
                       <textarea class="form-control" name="more" required v-model="iten.more" id="" rows="3"></textarea>
                    </div>
                    <button class="btn btn-outline-success">Salvar</button>
               </form> 

            </div>
        </div>
    </div>
</div>

</template>

<script>
import Itens from "../../services/Itens"
import Places from "../../services/Places"
import Categories from "../../services/Categories"
import Navbar from '../../components/NavbarComp.vue'

export default{
    name:'CreateView',
    components:{
        Navbar,
    },

    data(){
        return{
            iten:{
                id:' ',
                name:' ',
                more: ' ',
                place: ' ',
                categorie: ' ', 
            },

            itens:[],
            places:[],
            categories:[],
            id:this.$route.params.id,
        }
    },

    mounted(){
        this.findIten()
        this.all_categories()
        this.all_places()
    },

    methods:{
        findIten(){
            Itens.buscar_iten(this.id)
            .then(response=>{
                this.iten=response.data;
            })
        },
        all_places(){
            Places.listar_lugares().then(response1=>this.places=response1.data);
        },
        all_categories(){
            Categories.listar_categorias().then(response2=>this.categories=response2.data);
        },

        update_item(){
            Itens.atualizar_item(this.iten)
        }

    }

}

</script>