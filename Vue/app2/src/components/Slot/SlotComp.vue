<template>
    <div>
        <HeaderComp>

            <!-- Chamando um slot nomeado -->
            <template v-slot:title>
                <p>Estudando Slots nomeados</p>
            </template>

            <template v-slot:description>
                <p>Este é um teste usando Slots nomeados</p>
            </template>
            
            <!-- Chamando um slot não nomeado, a gente simplesmente apenas passa o quer -->
            <p>Estudando Slots não nomeados</p>

        </HeaderComp>
        <span class="display-4">Estudando Slots</span>
        <hr>
    </div>
</template>

<script>
import HeaderComp from '../LifeCycles/HeaderComp.vue'
    export default {
        name: 'SlotComp',
        components:{
            HeaderComp,
        },

    }
</script>

<style lang="scss" scoped>

</style>