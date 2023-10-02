<template>
    <div>
        <div>
            <span class="display-4">Estudando Eventos</span>
            <p>Diretiva v-on -> captura o envento que desejo</p>
        </div>

        <div>
            <button class="btn btn-outline-success" v-on:click="hello()"> Solicitar </button>
            <button class="btn btn-outline-success" @click="hello()"> Solicitar </button>
            <hr>
            <span @mouseover="about()">Passe o mause por cima para saber mais</span>    
            <hr>
            <div>
                <form @submit.prevent="formChek()">
                    <input type="text">
                    <br>
                    <small>Teste "@submit", ele pega o evento submit e para o reload da página</small>
                    <br>
                    <button type="submit" class="btn btn-outline-success">Enviar</button>
                </form>
            </div>
            <hr>
            <div>
                <h3>@keyup</h3>
                <input type="text" placeholder="aperte enter" @keyup.enter="keyEvent()">
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'EventsComp',
    methods:{
        hello(){
            alert("Olá, Mundo!")
        },
        about(){
            alert("Saiba Mais!")
        },
        secret(){
            alert("Isto deveria ser secreto")
        },
        formChek(){
            alert("Form Enviado!")
        },
        keyEvent(){
            alert("Enter Apertado")
        }
    }

}
</script>

