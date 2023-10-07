<template>
    <div class="container mt-3">

        <form @submit.prevent="">
            <input id="categorie-input" type="text" class="form-control border" placeholder="Categoria">

            <div class="text-start mt-3">
                <button type="submit" class="btn btn-outline-dark text-light"> <i class="fa-solid fa-floppy-disk"></i> </button>
            </div>

        </form>

    </div>
</template>

<script>
    export default {
        name:' NewCategorie'
    }
</script>

<style scoped>

    #categorie-input{
        background-color: black;
        color: white;
    }

</style>