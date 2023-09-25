<template>
    <div class="container">
        <div class="d-flex align-items-center py-4 bg-body-tertiary">  
        <div class="form-signin w-100 m-auto">
            <form @submit.prevent="register()">
                <h1 class="h3 mb-3 fw-normal">Registrar-se</h1>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="credentials.name" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Nome</label>
                </div>
                
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

        
    </div>  

    <div class="row text-center">
        <Navbar2/>
    </div>

    </div>

</template>

<script>
import auth from "../../services/Auth";
import Navbar2 from '../../components/NavbarComp2.vue';

export default{
    name:'LoginView',
    components:{
        Navbar2
    },

    data(){
        return{
            credentials:{
                name:'',
                email:'',
                password:'',
            },

        }

    },

    methods:{   
        register(){
            auth.cadastrar(this.credentials)
        }
    }

}
</script>