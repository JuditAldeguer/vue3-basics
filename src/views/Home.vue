<template>
  <div class="home">
    <HelloWorld />
    <hr />
    <SimpleCounter />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SimpleCounter from '../components/SimpleCounter.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter
  }
}
</script>
