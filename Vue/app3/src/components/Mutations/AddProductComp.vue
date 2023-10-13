<template>
    <div>
        <h3>Salvar Produto</h3>
        <form @submit.prevent="save()">
            <input type="number" v-model="produto.id">
            <input type="text" v-model="produto.name">
            <input type="number" v-model="produto.price">
            <button type="submit">Salvar</button>
        </form>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'AddProductCompo',

    data() {
        return {
            produto: {
                id: '',
                name: '',
                price: '',
            },
        }
    },

    methods: {
        save() {
            this.$store.commit('adicionarProduto', this.produto);
            this.produto = {}
        }
    }


}
</script>

<style lang="scss" scoped></style>