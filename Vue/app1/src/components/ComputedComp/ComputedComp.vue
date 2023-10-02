<template>
    <div>
        <div>
            <span class="display-4">Estudando Propriedades Computadas</span>    
            <hr>
        </div>
        <div class="row">
            <div>
                <button @click="showAll()" class="btn btn-outline-success">Todas</button>
                <button @click="showDone()" class="btn btn-outline-success">Completadas</button>
                <button @click="showNotDone()" class="btn btn-outline-success">Não Completadas</button>
                <button @click="closeall()" class="btn btn-outline-success">Fechar Tudo</button>
            </div>
        </div>

        <div v-show="showAllVar">
            <h3>Todas as Tarefas</h3>
            <div class="card p-3 mb-3" v-for="corrente in todo" :key="corrente.id">
                id: {{corrente.id}}
                <hr>
                tarefa: {{corrente.task}}
                <hr>
                <span class="badge bg-success mb-3" v-if="corrente.isDone">Concluida</span>
                <span class="badge bg-warning" v-else>Não Concluida</span>
                <div class="form-check" v-if="corrente.isDone">
                    <label  class="form-check-label" for="">
                        <!-- caso for true, o cheked já atualiza para checado, se for false não aparece como checado, "mágica acontecendo" -->

                        <input  class="form-check-input" type="checkbox" value="" id="" v-model="corrente.isDone">
                        Reabrir
                    </label>

                </div>
                <div class="form-check" v-else>
                    <label  class="form-check-label" for="">
                        <!-- caso for true, o cheked já atualiza para checado, se for false não aparece como checado, "mágica acontecendo" -->

                        <input  class="form-check-input" type="checkbox" value="" id="" v-model="corrente.isDone">
                        Marcar como concluída
                    </label>

                </div>
                
            </div>
        </div>

        
        <div v-show="showDoneVar">
            <h3>Todas completadas</h3>
            <div class="card p-3 mb-3" v-for="corrente in todo_list_Done" :key="corrente.id">
                id: {{corrente.id}}
                <hr>
                tarefa: {{corrente.task}}
                <hr>
                <span class="badge bg-success mb-3" v-if="corrente.isDone">Concluida</span>
                <span class="badge bg-warning" v-else>Não Concluida</span>
                <div class="form-check" v-if="corrente.isDone">
                    <label  class="form-check-label" for="">
                        <!-- caso for true, o cheked já atualiza para checado, se for false não aparece como checado, "mágica acontecendo" -->

                        <input  class="form-check-input" type="checkbox" value="" id="" v-model="corrente.isDone">
                        Reabrir
                    </label>

                </div>
                <div class="form-check" v-else>
                    <label  class="form-check-label" for="">
                        <!-- caso for true, o cheked já atualiza para checado, se for false não aparece como checado, "mágica acontecendo" -->
                        <input  class="form-check-input" type="checkbox" value="" id="" v-model="corrente.isDone">
                        Marcar como concluída
                    </label>

                </div>
                
            </div>
            
        </div>

        <div v-show="showNotDoneVar">
            <h3>Todas não completadas</h3>
            <div class="card p-3 mb-3" v-for="corrente in todo_list_notDone" :key="corrente.id">
                id: {{corrente.id}}
                <hr>
                tarefa: {{corrente.task}}
                <hr>
                <span class="badge bg-success mb-3" v-if="corrente.isDone">Concluida</span>
                <span class="badge bg-warning" v-else>Não Concluida</span>

                <div class="form-check" v-if="corrente.isDone" >
                    <label  class="form-check-label" for="">
                        <!-- caso for true, o cheked já atualiza para checado, se for false não aparece como checado, "mágica acontecendo" -->
                        <input  class="form-check-input" type="checkbox" value="" id="" v-model="corrente.isDone">
                        Reabrir
                    </label>

                </div>
                <div class="form-check" v-else>
                    <label  class="form-check-label" for="">
                        <!-- caso for true, o cheked já atualiza para checado, se for false não aparece como checado, "mágica acontecendo" -->

                        <input  class="form-check-input" type="checkbox" value="" id="" v-model="corrente.isDone">
                        Marcar como concluída
                    </label>

                </div>
                
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'ComputedComp',
        data(){
            return{
                //controle de exibição
                showDoneVar:false,
                showNotDoneVar:false,
                showAllVar:false,
                
                todo:[
                    {
                    "id":1,
                    "task":"Tarefa 1",
                    "isDone":false,
                    },                    
                    {
                    "id":2,
                    "task":"Tarefa 2",
                    "isDone":true,
                    },
                    {
                    "id":3,
                    "task":"Tarefa 3",
                    "isDone":false,
                    },
                    {
                    "id":4,
                    "task":"Tarefa 4",
                    "isDone":true,
                    },
                    {
                    "id":5,
                    "task":"Tarefa 5",
                    "isDone":true,
                    },
                    {
                    "id":6,
                    "task":"Tarefa 6",
                    "isDone":false,
                    },
                    
                ],
            }
        },

        computed:{
            //a diferença entre isso é um método "comum", é que aqui ele fica em cache
            //fica mais rápido em acessar os dados, o vue não vai precisar recarregar
            //toda vez que for chamado, mas recarrega quando os valores dependentes são alterados
            //isso melhora o desempenho, pois como estão em cache, não precisam ser recomputadas
            //toda vez que são chamadas, só são recomputadas quando os valores mudam por algum motivo
            //é muito usado para fazer filtros!
            todo_list(){
                return this.todo;
            },
            todo_list_notDone(){
                return this.todo.filter(todos => !todos.isDone);
            },
            todo_list_Done(){
                //para essa filtragem ele puxa da array this.todo, por isso não precisa o this.todos e etc..
                //ele faz uma nova array com os itens filtradas
                return this.todo.filter(todos => todos.isDone);
            }
        },
        methods:{
            showDone(){
                //controle de exibição

                if(this.showDoneVar==true){
                    this.showDoneVar=false
                }else{
                    this.showDoneVar=true
                }
            },
            showNotDone(){
                //controle de exibição

                if(this.showNotDoneVar==true){
                    this.showNotDoneVar=false
                }else{
                    this.showNotDoneVar=true
                }
            },
            showAll(){
                //controle de exibição

                if(this.showAllVar==true){
                    this.showAllVar=false
                }else{
                    this.showAllVar=true
                }
            },
            closeall(){
                this.showAllVar=false;
                this.showDoneVar=false;
                this.showNotDoneVar=false;
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>