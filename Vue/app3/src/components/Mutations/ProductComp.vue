<template>
    <div id="card">
        <p>
            Id do produto: {{ produto.id }} Nome: {{ produto.name }} | Preço {{ produto.price }}
            <button @click="addcart(produto)">Adicionar no carrinho</button>
            <button @click="removeProduct(produto)"> Remover do produto</button>
            <button @click="removeCart(produto)"> Remover do carrinho</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'ProductComp',

    props: {
        produto: Object
    },

    methods: {
        addcart(produto) {
            this.$store.commit('adicionarCarrinho', produto);
        },
        removeProduct(produto) {
            this.$store.commit('removerProduto', produto);
        },
        removeCart(produto) {
            this.$store.commit('removerCart', produto);
        }
    }

}
</script>

<style  scoped>
#card {
    /* background-color: orange; */
    border: solid 1px;
    border-radius: 50px;
    margin: 10px;
    padding: 10px;
}
</style>