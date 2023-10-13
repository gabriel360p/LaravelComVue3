<template>
    <div >
        {{ book.title    }}
        <hr>
    </div>
</template>

<script>
    export default {
        name:'BookComp',

        data() {
            return {
                // key: value
            }
        },
        props: {
            book:Object, 
        },
    }
</script>

<style lang="scss" scoped>

</style>