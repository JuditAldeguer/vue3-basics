<template>
  <div class="home">
    <HelloWorld />
    <hr />
    <SimpleCounter />
    <hr />
    <ReactiveCounter />
    <hr />
    <Watcher />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SimpleCounter from '../components/SimpleCounter.vue'
import ReactiveCounter from '../components/ReactiveCounterr.vue'
import Watcher from '../components/Watcher.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    Watcher
  }
}
</script>

<style>
h2 {
  color: rgb(33, 179, 94);
  padding-top: 1rem;
}
</style>
