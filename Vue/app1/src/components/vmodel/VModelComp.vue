<template>
    <div>
        <div>
            <span class="display-2">Estudando a Diretiva v-model</span>
            <br>
            <span class="display-5">Two-way data binding - Ligação Bid</span>
            <p class="mt-3">O data v-bind normal é como uma via de mão única, somente o sistema pode alterar os valores, mas com o v-model, se tem uma via de mão dupla, tanto o sistema como o usuário podem modificar esses valores </p>
            <hr>
        </div>


        <div>
            <div class="mb-3">
              <label for="" class="form-label">Nome</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="user.name">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Email</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="user.email">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Apelido</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="user.nickname">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Senha</label>
              <input type="password"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="user.password">
                {{ user.password }}
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Tipo de Conta</label>

                <select class="form-select form-select-lg" v-model=" user.type_account">
                    <option value="Admin">Admin</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    <option value="Seller">Seller</option>
                    
                </select>

                <p>
                    Tipo de conta selecionada: {{ user.type_account }}
                </p>

            </div>
        </div>


    </div>

</template>

<script>
export default{
    name:'VModelComp',
    data(){
        return{
            user:{
                name:"Joao Guilherme",
                email:"JoaoGuilherme@gmail.com",
                nickname:"JaoGui",
                password:'',
                type_account:'',
            }
        }
    }
    
}
</script>