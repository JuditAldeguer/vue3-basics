<template>
  <div class="home">
    <HelloWorld />
    <hr />
    <SimpleCounter />
    <hr />
    <ReactiveCounter />
    <hr />
    <Watcher />
     <hr />
    <SimpleCountercompositionApi />
    <hr/>
    <SimpleFetch/>
    <hr/>
    <Suspense>
      <template #default>
        <SuspenseFetch/>
      </template>
      <template #fallback>
        <h5>
          Cargando...
        </h5>
      </template>
    </Suspense>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SimpleCounter from '../components/SimpleCounter.vue'
import ReactiveCounter from '../components/ReactiveCounterr.vue'
import Watcher from '../components/Watcher.vue'
import SimpleCountercompositionApi from '../components/SimpleCountercompositionApi.vue'
import SimpleFetch from '../components/SimpleFetch.vue'
import SuspenseFetch from '../components/SuspenseFetch.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    Watcher,
    SimpleCountercompositionApi,
    SimpleFetch,
    SuspenseFetch
  }
}
</script>

<style>
h2 {
  color: rgb(33, 179, 94);
  padding-top: 1rem;
}
</style>
