<template>
    <div class="container mb-3">
        <div class="row">

            <div class="col text-start">
                <button @click="all()" class="btn btn-outline-dark text-light mx-2">Todas</button>

                <button @click="completed()" class="btn btn-outline-dark text-light mx-2">Concluídas</button>

                <button @click="uncompleted()" class="btn btn-outline-dark text-light">Pendentes</button>
            </div>

        </div>

        <div v-if="listController.all">
            <div class="row border-bottom p-3" id="container-task-row" v-for="corrente in tasks" :key="corrente.id">


                <div class="col-12 text-start ">

                    <input class="form-control" id="task-input" type="text" placeholder="Tarefa" name="title"
                        v-model="corrente.title">

                    <textarea id="task-input" cols="10" rows="1" class="form-control" name="description"
                        placeholder="Descrição" v-model="corrente.description"></textarea>


                    <select name="" id="task-input" v-model="corrente.categorie_name" class="form-control">
                        <option v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</option>
                    </select>

                    <div class="mt-2">
                        <span class="badge bg-dark">{{ corrente.categorie_name }}</span>
                    </div>

                    <div class="row mt-2">

                        <div class="text-start d-flex">

                            <div v-if="corrente.status">
                                <button id="button-icon" @click="unchecked(corrente)">
                                    <i style="color:lightgreen;" class="fa-solid fa-check-double"></i>
                                </button>
                            </div>
                            <div v-else>
                                <button id="button-icon" @click="checked(corrente)">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>

                            <button id="button-icon" @click="update(corrente)">
                                <i class="fa-solid fa-floppy-disk"></i>
                            </button>

                            <button id="button-icon" @click="eraser(corrente)">
                                <i style="color: red;" class="fa-solid fa-trash"></i>
                            </button>


                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div v-if="listController.completed">
            <div class="row border-bottom p-3" id="container-task-row" v-for="corrente in tasks" :key="corrente.id">

                <div class="col-12 text-start ">

                    <input class="form-control" id="task-input" type="text" placeholder="Tarefa" name="title"
                        v-model="corrente.title">

                    <textarea id="task-input" cols="10" rows="1" class="form-control" name="description"
                        placeholder="Descrição" v-model="corrente.description"></textarea>

                    <select name="" id="task-input" v-model="corrente.categorie_name" class="form-control">
                        <option v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</option>
                    </select>

                    <div class="mt-2">
                        <span class="badge bg-dark">{{ corrente.categorie_name }}</span>
                    </div>

                    <div class="row mt-2">

                        <div class="text-start d-flex">

                            <div v-if="corrente.status">
                                <button id="button-icon">
                                    <i style="color:lightgreen;" class="fa-solid fa-check-double"></i>
                                </button>
                            </div>
                            <div v-else>
                                <button id="button-icon">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>


                            <button id="button-icon" @click="update(corrente)">
                                <i class="fa-solid fa-floppy-disk"></i>
                            </button>


                            <button id="button-icon">
                                <i style="color: red;" class="fa-solid fa-trash"></i>
                            </button>



                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div v-if="listController.uncompleted">
            <div class="row border-bottom p-3" id="container-task-row" v-for="corrente in tasks" :key="corrente.id">
                _
                <div class="col-12 text-start ">

                    <input class="form-control" id="task-input" type="text" placeholder="Tarefa" name="title"
                        v-model="corrente.title">

                    <textarea id="task-input" cols="10" rows="1" class="form-control" name="description"
                        placeholder="Descrição" v-model="corrente.description"></textarea>

                    <select name="" id="task-input" v-model="corrente.categorie_name" class="form-control">
                        <option v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</option>
                    </select>

                    <div class="mt-2">
                        <span class="badge bg-dark">{{ corrente.categorie_name }}</span>
                    </div>

                    <div class="row mt-2">

                        <div class="text-start d-flex">

                            <div v-if="corrente.completed">
                                <button id="button-icon">
                                    <i style="color:lightgreen;" class="fa-solid fa-check-double"></i>
                                </button>
                            </div>
                            <div v-else>
                                <button id="button-icon">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>


                            <button id="button-icon" @click="update(corrente)">
                                <i class="fa-solid fa-floppy-disk"></i>
                            </button>

                            <button id="button-icon">
                                <i style="color: red;" class="fa-solid fa-trash"></i>
                            </button>
                            _
                        </div>

                    </div>

                </div>

            </div>
        </div>



        <!-- {{ taskTypeList() }} -->
    </div>
</template>

<script>
import todoAPI from '@/services/todoAPI'
export default {
    name: 'TaskList',

    methods: {
        //controle de listagem usando props, só que não deu certo continuar, a explicação sobre oq aconteceu está abaixo na chamada das props
        // taskTypeList() {
        //     if (this.dynamicList == 'all') {
        //         console.log("Listando todas as tarefas", this.dynamicList)

        //     } else if (this.dynamicList == 'completed') {
        //         console.log("Listando todas as tarefas concluídas", this.dynamicList)

        //     } else if (this.dynamicList == 'uncompleted') {
        //         console.log("Listando todas as tarefas não concluídas", this.dynamicList)

        //     }
        // },
        update(corrente) {
            todoAPI.atualizar_tarefa(corrente)
                .then(response => {
                    console.log(response)
                })
        },
        eraser(corrente) {
            todoAPI.apagar_tarefa(corrente)
        },
        checked(corrente) {
            todoAPI.atualizar_status_tarefa(corrente).then(response => { console.log(response) })
        },
        unchecked(corrente) {
            todoAPI.atualizar_status_tarefa(corrente)
        },
        all() {
            this.listController.all = true,
                this.listController.uncompleted = false,
                this.listController.completed = false
            todoAPI.pegar_todas_tarefas().then(response => {
                this.tasks = response.data
            })
        },
        completed() {
            this.listController.all = false,
                this.listController.completed = true,
                this.listController.uncompleted = false
            todoAPI.pegar_todas_tarefas_concluidas().then(response => {
                this.tasks = response.data
            })
        },
        uncompleted() {
            this.listController.all = false,
                this.listController.completed = false,
                this.listController.uncompleted = true
            todoAPI.pegar_todas_tarefas_nao_concluidas().then(response => {
                this.tasks = response.data

            })
        },

    },

    props: {//não estou mais usando isso, pois o if estava causando uma sobrecarga de requisições (429), mas deixei por que serve como demonstração de uso das props
        //usando props pra controlar a listagem e usar somente um único componente que vai servir para listar as tarefas em diferentes situações
        // dynamicList: String,
    },

    data() {
        return {
            listController: {
                completed: false,
                uncompleted: false,
                all: true,
            },
            tasks: {},
            categories: {},
            task: {
                title: '',
                description: '',
                categorie_name: '',
            }
        }
    },

    mounted() {
        this.all(),
            todoAPI.pegar_todas_categorias()
                .then(response => {
                    this.categories = response.data
                })
    },
}
</script>

<style scoped>
#container-task-row {
    align-items: center;
}

#button-icon {
    border: none;
    background: none;
    color: white;
}

#task-input {
    background-color: transparent;
    color: white;
    border: none;
}
</style>
