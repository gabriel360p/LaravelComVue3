<template>
    <div class="container" id="container">
        <form @submit.prevent="save_task()">

            <div id="task-container">
                <div id="task-container-div" style="width: 100%;">
                    <input id="task-container-div-input" type="text" class="form-control mb-4" name="" placeholder="Tarefa"
                        v-model="task.title">
                </div>
            </div>

            <div id="task-container" v-show="details.show">

                <div id="task-container-div" style="width: 100%;">
                    <textarea class="form-control" name="" id="task-container-div-input" cols="20" rows="3"
                        v-model="task.description" placeholder="Descrição"></textarea>
                </div>

                <div id="task-container-div" style="width: 100%;">
                    <div class="mb-3">
                        <select class="form-select form-select-lg mt-4" name="" id="task-container-div-input" v-model="task.categorie">
                            <option v-for="corrente in categories" :key="corrente.id">{{corrente.name}}</option>
                        </select>
                    </div>
                </div>

            </div>

            <div id="button-container">
                <i @click="detailsController()" class="btn btn-outline-dark text-light mx-3">{{ details.msg }} <i
                        :class="details.icon"> </i></i>
                <button type="submit" class="btn btn-outline-dark text-light"> <i class="fa-solid fa-floppy-disk"></i>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import todoAPI from '@/services/todoAPI'
export default {
    name: 'NewTask',

    mounted(){
        todoAPI.pegar_todas_categorias()
        .then(response=>{
            this.categories=response.data
        })
    },

    data() {
        return {
            categories:{},
            task: {
                title:'' ,
                description:'',
                categorie:'',
            },
            details: {
                show: '',
                msg: 'Mais Detalhes',
                icon: 'fa-solid fa-arrow-down-long',
            }
        }
    },

    computed() {
        this.details.show = false
    },

    methods: {
        detailsController() {
            if (this.details.show == false) {
                this.details.show = true
                this.details.msg = "Menos Detalhes"
                this.details.icon = 'fa-solid fa-arrow-up'

            } else {
                this.details.show = false
                this.details.msg = "Mais Detalhes"
                this.details.icon = 'fa-solid fa-arrow-down-long'
            }
        },
        save_task(){
            todoAPI.salvar_tarefa(this.task),
            this.task={}
        }
    },

}
</script>

<style scoped>
#task-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#task-container-div {
    width: 50%;
}

#task-container-div-input {
    color: white;
    background-color: black;
    width: 100%;
}

#button-container {
    display: flex;
    justify-content: center;
}
</style>