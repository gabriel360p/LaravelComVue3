<template>
  <div>
    <!-- <HelloWorld /> -->
    <!-- <LifeCycles /> -->
    <SlotComp/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LifeCycles from "../src/components/LifeCycles/LifeCyclesComp.vue"
import SlotComp from "./components/Slot/SlotComp.vue"

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LifeCycles,
    SlotComp,
  }
}
</script>

