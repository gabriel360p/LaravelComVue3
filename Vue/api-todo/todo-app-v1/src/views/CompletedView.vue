<template>
    <div>

        <TaskList dynamic-list="completed" />

    </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';

export default {
    name: 'CompletedView',
    components: {
        TaskList
    }
}

</script>

<style  scoped></style>