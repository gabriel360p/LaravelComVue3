<template>

    <div class="container mt-3">
        <div class="row">
            <div class="card p-4">
                <div class="card-header">
                    <span class="display-5">Novo Lugar</span>
                </div>
                <form @submit.prevent="save_place()">
                    <div class="mb-3">
                    <label for="" class="form-label">Nome do Lugar</label>
                    <input type="text"
                        class="form-control" required name="name" v-model="place.name" id="" aria-describedby="helpId" placeholder="">
                    </div>
                    <button class="btn btn-outline-success">Salvar</button>
                </form>

            </div>
        </div>

        <div class="row mt-3">
            <div>
                <span class="display-5">Lugares</span>
            </div>

            <div>
                <div class="m-2 p-2" v-for="place in places" :key="place.id">
                    <li>{{ place.name }}</li>
                </div>
            </div>

        </div>


    </div>

</template>

<script>
import Places from "../../services/Places";

export default{
    name: 'CreateView',
    
    data(){
        return{
            place:{
                name: '',
            },
            places:[],
        }
    },

    mounted(){
        this.all()
    },

    methods:{
        save_place(){
            Places.salvar_lugar(this.place);
            this.place=[];
        },

        all(){
            Places.listar_lugares().then(response=>{this.places=response.data});
        }
    }
}

</script>