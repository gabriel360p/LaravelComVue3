<template>
    <div>
        <form @submit.prevent="save()" >

            <div class="mb-3">
              <label for="" class="form-label">Titulo</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="book.title">
            </div>
            
            <div class="mb-3">
              <label for="" class="form-label">Autor</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="book.author">
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Categoria</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="book.categorie">
            </div>

            <button type="submit" class="btn btn-success">Salvar</button>

        </form>
    </div>
</template>

<script>
    export default {
        name:'CreateBookComp',

        data() {
            return {
                book:{
                    title:'teste',
                    author:'tete',
                    categorie:'teste',
                }
            }

        },

        methods:{
            save(){
                this.$store.dispatch('update_book',this.book)
                this.book={}
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>