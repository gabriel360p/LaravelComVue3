<template>
    <div class="container">
        <div class="row">

            <form @submit.prevent="login()">
                <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text"
                    class="form-control" name="email" v-model="credentials.email" id="" aria-describedby="helpId" placeholder="">
                </div>

                <div class="mb-3">
                <label for="" class="form-label">Senha</label>
                <input type="text"
                    class="form-control" name="password" id="" v-model="credentials.password" aria-describedby="helpId" placeholder="">
                </div>
                
                <button class="btn btn-outline-success"> Entrar</button>
            </form>
        </div>            
    </div>
</template>

<script>
import Auth from "../../services/auth";

export default{
    name:'LoginView',

    data(){
        return{
            credentials:{
                email:'',
                password:'',
            },

        }
    },

    methods:{
        login(){
            Auth.login(this.credentials)
            .then(response=>{
                console.log(response)
            })
        }
    }

}

</script>