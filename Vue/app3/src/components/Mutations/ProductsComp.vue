<template>
    <div>
        <div>
            <TitleComp msg="estudando o VUEX - MUTATIONS part 2" />
        </div>

        <div>
            <AddProductComp />
        </div>

        <div>
            Produtos Disponíveis
        </div>

        <!-- Passando o produto como uma propriedade para o componente (usando v-bind) -->
        <ProductComp v-for="produto in produtos" :produto="produto" :key="produto.id" />

        <div>
            <hr>
            <CartComp />
        </div>

    </div>
</template>

<script>
import ProductComp from './ProductComp.vue';
import TitleComp from '../TitleComp.vue';
import AddProductComp from './AddProductComp.vue';
import CartComp from './CartComp.vue';

export default {
    name: 'ProductsComp',

    components: {
        ProductComp,
        TitleComp,
        AddProductComp,
        CartComp,
    },

    data() {
        return {
            produto: {
                name: '',
                id: '',
                price: '',
            },
            produtos: {},
        }
    },

    mounted() {
        this.produtos = this.$store.state.produtos;
    }
}
</script>

<style lang="scss" scoped></style>