<template>
  <div class="home">
    <HelloWorld />
    <hr />
    <SimpleCounter />
    <hr />
    <ReactiveCounter />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SimpleCounter from '../components/SimpleCounter.vue'
import ReactiveCounter from '../components/ReactiveCounterr.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter
  }
}
</script>
