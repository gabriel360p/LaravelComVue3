<template>
 
    <div class="container">
        <div class="row">

            <form @submit.prevent="">
                <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text"
                    class="form-control" name="email" id="" aria-describedby="helpId" placeholder="">
                </div>

                <div class="mb-3">
                <label for="" class="form-label">Senha</label>
                <input type="text"
                    class="form-control" name="email" id="" aria-describedby="helpId" placeholder="">
                </div>

                <div class="mb-3">
                <label for="" class="form-label">Confirmar Senha</label>
                <input type="text"
                    class="form-control" name="email" id="" aria-describedby="helpId" placeholder="">
                </div>

                <button class="btn btn-outline-success"> Salvar</button>
            </form>
        </div>            
    </div>
 
</template>

<script>
export default{ 
    name:'RegisterView',

    
}

</script>