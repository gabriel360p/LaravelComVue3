<template>
    <div>
        <div v-if="cart != ''">
            <h3>Produtos Salvos no carrinho: </h3>

            <div>
                {{ cart }}
                <!-- <button @click="removeCart(cart)">Tirar Produto do carrinho</button> -->
            </div>
        </div>
        <div v-else>
            <h3>Não tem nenhum produto no carrinho </h3>
        </div>


    </div>
</template>

<script>
export default {
    name: 'CartComp',


    data() {
        return {
            cart: {},
        }
    },

    methods: {
        // removeCart(produto) {
        //     console.log(produto);
        // }
    },

    mounted() {
        this.cart = this.$store.state.cart
    },

}
</script>

<style lang="scss" scoped></style>