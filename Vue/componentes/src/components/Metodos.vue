<template>
    <div>
        <hr>

        <h2>Metodos</h2>

        <button @click="mostrar">Mostra</button>

    </div>
</template>

<script>
    export default{
        name:'CompMetodos',

        data(){
            //metodos do componente
        },
        
        methods:{
            mostrar(){
                alert("opa")
            },
        }

    }


</script>