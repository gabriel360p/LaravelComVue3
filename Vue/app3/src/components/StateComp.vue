<template>
    <div>
        <TitleComp msg="Estudando o uso de VUEX - STATE"/>
        <p>O State funciona como um banco de dados para o front-end, a gente pode usar para guardar dados, como por exemplo,
            dados do usuário logado</p>
        <p>A gente pode guardar dados lá, é isso, quase como um mini banco de dados</p>
        <p>O exemplo abaixo está listando alguns dados que estão sendo salvos lá</p>

        <pre>
            {{ product }}
        </pre>

        <br>
        Produto: {{ product.name }} Preço: {{ product.price }}
    </div>
</template>

<script>
import TitleComp from './TitleComp.vue';
export default {
    name: 'StateComp',
    components:{
        TitleComp,
    },

    data() {
        return {
            product: {
                name: '',
                price: '',
            },
        }
    },

    created() {
        this.product = this.$store.state.product
    }

}

</script>

<style scoped></style>