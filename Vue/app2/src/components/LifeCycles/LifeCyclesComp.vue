<template>
    <div>
        <HeaderComp v-if="showHeader">
            Estudando o Ciclo de Vida dos componentes
        </HeaderComp>
        <div>
            <span class="display-4">Estudando o Ciclo de Vida dos componentes</span>
            <hr>
        </div>

        <div>
            <!-- Aqui estou dizendo que quando clicar ele vai receber o inverso do valor atual
            se o valor atual for true, ele recebe false, se for false ele recebe true, assim facilita
            bastante, nem precisar criar funções que alterem esses valores
            -->
            <button class="btn btn-outline-success" @click="showHeader=!showHeader">Cabeçalho</button>
        </div>

    </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue';
    export default {
        name: 'LifeCyclesComp',
        components:{
            HeaderComp,
        },

        data(){
            return{
                msg:'Olá, Mundo!',
                showHeader:true,
            }
        },
        
        //Ciclos de vida dos componentes vue3.js
        // beforeCreate(){
        //     //antes de ser criado, aqui não tenho aceso ao estado do componente, é muito muito antes de tudo
        //     //e também não tem acesso ao DOM/Template
        //     console.log("beforeCreate");
        //     console.log("Estado: "+this.msg)
        //     console.log("DOM:"+this.$el);
        // },
        // created(){
        //     //após criado
        //     //aqui já tenho ao estado do componente
        //     //e também não tem acesso ao DOM/Template
        //     console.log("created");
        //     console.log("Estado: "+this.msg)
        //     console.log("DOM:"+this.$el);

        // },


        // beforeMount(){
        //     //antes de ser montado
        //     //e também não tem acesso ao DOM/Template
        //     console.log("beforeMount");
        //     console.log("Estado: "+this.msg)
        //     console.log("DOM:"+this.$el);

        // },
        // mounted(){
        //     //depois de ser montado
        //     //Aqui já se tem acesso ao DOM/Template
        //     console.log("mounted");
        //     console.log("Estado: "+this.msg)
        //     console.log("DOM:"+this.$el);
    
        // },

        beforeUnmount(){
            //antes de ser desmontado
            //desmontar libs, eventos e até listeners
            //aq estou observando esse componente em questão, ele não olha outros, só ele mesmo
            console.log("beforeUnmount");
            console.log("DOM:"+this.$el);

        },
        unmounted(){
            //depois de ser desmontado
            //aq estou observando esse componente em questão, ele não olha outros, só ele mesmo
            console.log("unmounted");
            console.log("DOM:"+this.$el);
        },

    }
</script>
