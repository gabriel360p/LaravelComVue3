<template>
    <div>
        {{ bookscount }}
        <BookComp v-for="book in books" :key="book.id" :book="book"/>
    </div>
</template>

<script>
import BookComp from './BookComp.vue';
    export default {
        name:'BooksComp',
        
        components: {
            BookComp,
        },
        
         mounted() {
            this.$store.dispatch('get_all_books')    
            this.books = this.$store.state.books    
            this.bookscount=this.$store.getters.count_book
        },

        data() {
            return {
                books:{},
                bookscount:''
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>