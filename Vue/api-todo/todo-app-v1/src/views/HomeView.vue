<template>

  <div class="home">
    
    <NewTask class="mt-3"/>

    <TaskList class="mt-3 " dynamicList="all"/>

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
