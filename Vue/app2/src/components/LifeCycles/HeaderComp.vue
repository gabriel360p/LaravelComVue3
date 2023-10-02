<template>
    <div>
        <h3 class="bg-black mb-1 p-3 text-white">

            <!-- definindo um slot nomeado -->
            <slot name="title" v-if="$slots.title" />
            
            <!-- definindo um slot nomeado -->
            <slot name="description" v-if="$slots.description"/>
            <!-- v-if="$slots.description" isso está sendo usado para verificar se o slot description
                está sendo usado, caso não esteja ele não renderiza esse slot, pois normalmente ele iria
                renderizar uma tag vazia!
            -->

            <!-- definindo um slot não nomeado -->
            <slot v-if="$slots"/>
            <!-- Verificando se um slot não nomeado está ou não sendo usado -->

        </h3>
        <small>Navbar/Header</small>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComp',
        beforeUnmount(){
            //antes de ser desmontado
            //desmontar libs, eventos e até listeners
            console.log("beforeUnmount");
            console.log("DOM:"+this.$el);

        },
        unmounted(){
            //depois de ser desmontado
            console.log("unmounted");
            console.log("DOM:"+this.$el);
        },
    }
</script>

<style lang="scss" scoped>

</style>