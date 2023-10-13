<template>
    <div>
        <TitleComp msg="Estudando o uso de VUEX - MUTATIONS parte 1" />
        <p>Usamos as mutação para mexer com os dados que estão salvos em STATE. Podemos declarar funções que atualizam esses
            dados, poderia ser tanto um update como um logout por exemplo.</p>

        <div>
            <h3>Formulário para alterar os dados</h3>
            <form @submit.prevent="save()">
                <input type="number" v-model="user.id">
                <input type="text" v-model="user.name">
                <input type="number" v-model="user.age">
                <input type="text" v-model="user.email">
                <button type="submit">Salvar</button>
            </form>
        </div>
        <hr>
        <div>
            <h3>Dados Antigos: </h3>
            {{ old_user }}
            <hr>
            <h3>Dados Novos: </h3>
            {{ user }}
            <hr>
            <h3>Os dados novos estão sendo imprimidos no console.log</h3>
        </div>

    </div>
</template>

<script>
import TitleComp from '../TitleComp.vue';

export default {
    name: 'Mutation1Comp',

    components: {
        TitleComp,
    },

    created() {
        this.old_user = this.$store.state.user;
    },

    methods: {
        save() {
            this.$store.commit('storeUser', this.user);
            //a primeira coisa que é passada é o nome da função lá em mutations, e o segundo são os dados "novos"
        }
    },

    data() {
        return {
            user: {
                id: '',
                name: '',
                age: '',
                email: '',
            },
            old_user: {
                id: '',
                name: '',
                age: '',
                email: '',
            },
        }
    },



}
</script>

<style lang="scss" scoped></style>