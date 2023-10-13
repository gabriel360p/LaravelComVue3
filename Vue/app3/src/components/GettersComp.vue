<template>
    <div>
        <TitleComp msg="estudando sobre VUEX - GETTERS"/>
        <p>O getters é como o computed(){}, toda vez que sua dependência é atualizada, os dados eles são recomputados</p>
        total de itens no carrinho: {{ total }}
    </div>
</template>

<script>
import TitleComp from './TitleComp.vue';


    export default {
        name: 'GettersComp',   
        components:{
            TitleComp,
        },

        data(){
            return{
                total:'',
            }
        },

        mounted(){
            this.total = this.$store.getters.totalCart    
        },

    }
</script>

<style lang="scss" scoped>

</style>