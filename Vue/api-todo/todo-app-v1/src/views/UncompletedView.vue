<template>
    <div>

        <TaskList dynamic-list="uncompleted" />

    </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';

export default {
    name: 'UncompletedView',
    components: {
        TaskList
    }
}

</script>

<style  scoped></style>