<template>
    <div class="container mb-3">

        <div class="row border-bottom p-3" id="container-task-row" v-for="corrente in tasks" :key="corrente.id">

            <div class="col-12 text-start ">

                <input class="form-control" id="task-input" type="text" placeholder="Tarefa" name="title" v-model="corrente.title" >

                <textarea  id="task-input" cols="10" rows="1" class="form-control" name="description" placeholder="Descrição" v-model="corrente.description"></textarea>

                <div class="mt-2">
                    <span class="badge bg-dark">{{ corrente.categorie }}</span>
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
                        
                        <button id="button-icon">
                            <i style="color: red;" class="fa-solid fa-trash"></i>
                        </button>

                    </div>

                </div>

            </div>

        </div> 
        {{ taskTypeList() }}
    </div>
</template>

<script>
    export default {
        name:'TaskList',

        methods:{
            //controle de listagem
            taskTypeList(){
                if(this.dynamicList=='all'){
                    console.log("Listando todas as tarefas",this.dynamicList)
                }else if(this.dynamicList=='completed'){
                    console.log("Listando todas as tarefas concluídas",this.dynamicList)
                }else if(this.dynamicList=='uncompleted'){
                    console.log("Listando todas as tarefas não concluídas",this.dynamicList)
                }
            }
        }, 

        props:{
            //usando props pra controlar a listagem e usar somente um único componente que vai servir para listar as tarefas em diferentes situações
            dynamicList:String,
        },

        data(){
            return{
                tasks:[
                    { 
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": true,
                        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, rem?",
                        "categorie": "Lorem Lorem",
                    },
                    {
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false,
                        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, rem?",
                        "categorie": "Lorem Lorem",


                    },
                    {
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false,
                        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, rem?",
                        "categorie": "Lorem Lorem",


                    },
                    {
                        "id": 4,
                        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, rem?",
                        "title": "et porro tempora",
                        "completed": true,
                        "categorie": "Lorem Lorem",

                    },
                    {
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, rem?",
                        "completed": false,
                        "categorie": "Lorem Lorem",
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    #container-task-row{
        align-items: center;
    }

    #button-icon{
        border: none;
        background: none;
        color: white;
    }
    #task-input{
        background-color: transparent;
        color: white;
        border: none;
    }
</style>
