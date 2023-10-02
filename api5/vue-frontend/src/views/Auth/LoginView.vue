<template>
    <div class="container">
        <div class="d-flex align-items-center py-4 bg-body-tertiary">
            
        <div class="form-signin w-100 m-auto">
            <form @submit.prevent="logar()">
                <h1 class="h3 mb-3 fw-normal">Por Favor Faça Login</h1>

                <div class="form-floating">
                <input type="email" class="form-control" v-model="credentials.email" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email </label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" v-model="credentials.password" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Senha</label>
                </div>

                <button class="btn btn-primary w-100 py-2" >Sign in</button>
            </form>
        </div>

        <span v-if=" validate!= '' ">
            {{ validate }}
        </span>

        </div>  
        
        <div class="row text-center">
            <Navbar2/>
        </div>

    </div>

</template>

<script>
import Navbar2 from '../../components/NavbarComp2.vue';
import auth from "../../services/Auth";
import { required, minLength, between } from 'vuelidate/lib/validators';

export default{
    name:'LoginView',
    components:{
        Navbar2,
    },

    data(){
        return{
            credentials:{
                email:'',
                password:'',
            },
            validate:[],
        }

    },

    methods:{   
        logar(){
            auth.login(this.credentials)
            .then(response=>{
                const token=response.access_token;
                if(token!=''){
                    //redirecionando, aqui estou empurrando uma string que é a rota
                    this.$router.push({name:'home'});
                }
            });           
        }
    }

}
</script>