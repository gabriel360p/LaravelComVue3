<template>

  <div class="home">
    <NewTask/>
    <TaskList class="mt-4"/>

  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NewTask from '@/components/NewTask.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    NewTask,
    TaskList,
  }
}
</script>
