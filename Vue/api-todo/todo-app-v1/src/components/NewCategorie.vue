<template>
    <div class="container mt-3">

        <form @submit.prevent="savecategory()">
            <input id="categorie-input" type="text" class="form-control border" placeholder="Categoria" v-model="categorie.name">

            <div class="text-start mt-3">
                <button type="submit" class="btn btn-outline-dark text-light"> <i
                        class="fa-solid fa-floppy-disk"></i></button>
            </div>

        </form>

    </div>
</template>

<script>
import todoAPI from '@/services/todoAPI';
export default {
    name: ' NewCategorie',
    data(){
        return{
            categorie:{
                name:'',
            }
        }
    },

    methods:{
        savecategory(){
            todoAPI.salvar_categoria(this.categorie);
            this.categorie={}
        }
    }
}
</script>

<style scoped>
#categorie-input {
    background-color: black;
    color: white;
}
</style>