<template>
 
    <div class="container">
        <div class="row">

            <form @submit.prevent="register()">
                <div class="mb-3">
                <label for="" class="form-label">Nome</label>
                <input type="text"
                    class="form-control" name="email" id="" aria-describedby="helpId" v-model="credentials.nome" placeholder="">
                </div>

                <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text"
                    class="form-control" name="email" id="" aria-describedby="helpId" v-model="credentials.email" placeholder="">
                </div>

                <div class="mb-3">
                <label for="" class="form-label">Senha</label>
                <input type="text"
                    class="form-control" name="email" v-model="credentials.password" id="" aria-describedby="helpId" placeholder="">
                </div>

                <!-- <div class="mb-3">
                <label for="" class="form-label">Confirmar Senha</label>
                <input type="text"
                    class="form-control" name="email" id="" aria-describedby="helpId" placeholder="">
                </div> -->

                <button class="btn btn-outline-success"> Salvar</button>
            </form>
        </div>            
    </div>
 
</template>

<script>
import auth from '../../services/auth'

export default{ 
    name:'RegisterView',

    data(){
        return {
            credentials:{
                email:'',
                nome:'',
                password:'',
            }
        }
    },

    methods:{
        register(){
            auth.register(this.credentials);
        }
    }
}

</script>