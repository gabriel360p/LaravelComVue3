<template>


    <div>

        <div>
            <span class="display-3">Estudando a "Camada" Watch</span>
            <hr>
        </div>

        <div>
            <input placeholder="Valor de 3 caracteres" type="text" v-model="input">
            <br>
            {{ input}}
            <hr>
            <input placeholder="Valor de 5 caracteres" type="text" v-model="input2">
            <br>
            {{ input2}}
            <hr>
            <input placeholder="Nome do usuário" type="text" v-model="user.name">
            <br>
            {{ user.name}}
            
        </div>

    </div>


</template>

<script>
    export default {
        name:'WatchComp',

        data(){
            return{
                input:'',
                input2:'',
                user:{
                    name:'',
                }
            }
        },

        watch:{
            //Esse watch tem dois atributos básicos, newValue oldValue (vc pode usar nv - newValue e ov (oldValue)) 

            input(newValue,oldValue){
                if(newValue.length>=3){
                    //aqui estou fazendo uma "regra", ele só vai chamar a ação quandoo novo valor
                    //tiver um tamanho maior ou igual a 3 caracteres
                    console.log(newValue,oldValue); 
                }      
            },
            input2(nv,ov){
            //aqui estou fazendo uma "regra", ele só vai chamar a ação quandoo novo valor
            //tiver um tamanho maior ou igual a 5 caracteres
                if(nv.length>=5){
                    this.updateInput2(nv,ov);
                }      
            },
            user:{
                handler(){
                    console.log("Usuário Alterado");
                },
                deep:true,
            }

    },

    methods:{
        updateInput2(nv){
            console.log(`Valor ${nv}, salvo`);
        },
        updateNameUser(nv){
            console.log(`Nome ${nv} definido`);
        }, 
    },
}
</script>

<style lang="scss" scoped>

</style>