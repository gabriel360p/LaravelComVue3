<template>
    <div>
        <NewCategorie/>
        <CategorieList/>
    </div>
</template>

<script>
import NewCategorie from '../components/NewCategorie.vue'
import CategorieList from '@/components/CategorieList.vue';
    export default {
        name:'CategoriesView',
        components:{
            NewCategorie,
            CategorieList
        }
    }
</script>

<style lang="scss" scoped>

</style>