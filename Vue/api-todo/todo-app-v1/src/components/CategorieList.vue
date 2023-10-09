<template>
    <div class="container mt-3 text-start">
        <ul>
            <li class="mb-4" v-for="corrente in categories" :key="corrente.id">{{ corrente.name }}</li>
        </ul>

    </div>
</template>

<script>
import todoAPI from '@/services/todoAPI';
    export default {
        name: 'CategorieList',
        data(){
            return{
                categories:{}
            }
        },

        mounted(){
            todoAPI.pegar_todas_categorias()
            .then(response=>{
                this.categories=response.data
            })
        }
    }
</script>

<style scoped>
    li{
        color: white;   
    }
</style>