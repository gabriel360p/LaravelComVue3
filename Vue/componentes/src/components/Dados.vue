<template>
    <div>
        <h1>Dados</h1>
        <div>
            {{ produto.name }} - {{ produto.price }} - {{ produto.desc }} 
            <!-- v-if e v-else precisam esta juntos assim, pois so assim eles se conectam -->
            <p v-if="produto.promotion">Esta em promoção</p>
            <p v-else>Não esta em promoção</p>

            <!-- o v-show é como if -->
            <p v-show="produto.vendedor_show">{{ produto.vendedor }}</p>
            <!-- assim -->
            <img v-bind:src="produto.img" alt="">
            <!-- ou resumidamente assim: -->
            <img :src="produto.img" alt="">
        </div>

        <CompProp :produto="produto"/>

    </div>

</template>    

<script>
//   import CompProp from './components/Prop.vue';    
  import CompProp from '@/components/Prop.vue';

export default{
    components:{
      CompProp,
    },

    name: 'CompDados',

    data(){
        //esses dados existem apenas aqui dentro (desse componente), mas podem ser conversados com outros compoentens
        //esse return, retorna eles para aqui dentro, seja objeto ou só texto normal
        return{
            //criando um objeto
            produto:{
                name:"Teste",
                price:"123",
                promotion:true,

                //inserindo img via v-bind
                img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/420px-Red_Apple.jpg",

                //v-show
                vendedor_show:false,
                vendedor:"Jeciane",

                desc:"kdahddhadkadjas",
            }
        }
    },
}


</script>