<template>
    <div>
        <span class="display-4">Diretivas v-</span>
        <hr>



        <div>
            <p> v-if, v-else-if, v-else</p>
            <!-- como a diretiva v-show, ele só mostra caso for true, a principal diferença é que o v-if não carrega a informação no código caso seja false, ele simplismente não coloca -->
            <!-- Ele não display:none, ele simplismente não carrega nem no código, mais isso custa mais processamento para o vue -->
            <strong v-if="user.status"><p>Usuário Logado</p></strong>
            <strong v-else-if="user.status==false"><p>Usuário não Logado</p></strong>
            <strong v-else><p>Usuário não Logado</p></strong>

            <button @click="auth()">{{ user.message }}</button>
            <hr>
        </div>



        <div>
            <p> v-show</p>
            <button @click="mostrarTabela()">{{ table.message }}</button>
            <!-- dessa maneira é possível controlar a visualização de componentes -->
            <TableComp v-show="table.show"/>
            <!-- quando showTable for true, ele mostra, quando for false ele não mostra o componente na tela do usuário (ele recebe um display none), -->
            <hr>
        </div>

        <div>
            <p> v-for</p>
            <div class="container">
                <li v-for="corrente in array" :key="corrente.id"> Nivel de Acesso: {{ corrente.accessLevel }} </li>
            </div>

            <hr>
        </div>

        <div>
            <p> v-bind</p>

            <!-- o v-bind pode até lincar com classes css -->
            <p :class="customStyleClass.backgorund">
                v-bind é literamente lincar algo com algo
            </p>

            <p :class="customStyleClass.color">
                v-bind é literamente lincar algo com algo
            </p>

            <input type="text" v-bind:placeholder="message">
            <!-- tem essas duas maneiras de acionar a diretiva v-bind -->
            <input type="text" :placeholder="message">

            <!-- é possível "mesclar" as diretivas como nesse exmeplo abaixo, onde uso o v-show e o v-bind -->
            <div class="mt-3" v-show="foto.show">
                <img :src="img.path" :alt="img.alt" style="width: 200px;">
                <p>{{ img.message }}</p>
            </div>
            <div>
                <button @click="mostrarFoto">{{ foto.message }}</button>
            </div>
            
            <hr>
        </div>


    </div>
</template>

<script>
import TableComp from './TableComp.vue'

export default{
    name:'CondicionalComp',
    components:{
        TableComp,
    },
    data(){
        return{
            customStyleClass:{
                color:'customtitleColor',
                backgorund:'customtitleBackgorund',
            },

            img:{
                path:"https://cdnstorage.sendbig.com/unreal/female.webp",
                alt:"Essa pessoa não existe",
                message:"Essa pessoa não existe",
            },
            message:"Ola Mundo",
            
            foto:{
                show:false,
                message:"Mostrar Foto",
            },

            table:{
                show:false,
                message: "Show Table"
            },
            user:{
                status:false,
                message: "Logar",
            },
            array:[
                {
                    "id":1,
                    "accessLevel":"Admin",
                },
                {
                    "id":2,
                    "accessLevel":"Marketing",
                },
                {
                    "id":3,
                    "accessLevel":"Seller",
                },
                {
                    "id":4,
                    "accessLevel":"Design",
                },
                {
                    "id":5,
                    "accessLevel":"Client",
                },
            ]
        }
    },
    methods:{
        mostrarTabela(){
            //controle de visualização do v-show
            if(this.table.show==false){
                this.table.show=true;
                this.table.message= "Hidden Photo"
            }else{
                this.table.show=false;
                this.table.message= "Show Photo"
            }
        },
        mostrarFoto(){
            //controle de visualização do v-show
            if(this.foto.show==false){
                this.foto.show=true;
                this.foto.message= "Hidden Photo"
            }else{
                this.foto.show=false;
                this.foto.message= "Show Photo"
            }
        },
        auth(){
            //testando as diretivas condicionais if, else-if e else
            if(this.user.status==false){
                this.user.status=true;
                this.user.message= "Deslogar"
            }else{
                this.user.status=false;
                this.user.message= "Logar"
            }
        },



    }
    
}
</script>

<style>
.customtitleColor{
    color: blue;
    font-size: 15px;
}
.customtitleBackgorund{
    background-color: black;
}
</style>