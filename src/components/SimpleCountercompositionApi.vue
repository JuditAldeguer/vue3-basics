<template>
  <h2>Simple Counter Composition Api</h2>
  <h3>{{ counter }} hey!</h3>
  <h3>{{ counterComputed }}</h3>
  <button @click="decrement">Decrementar</button>
  <button @click="increment">Incrementar</button>
</template>

<script>
import useCounter from '../composables/useCounter'
export default {
  name: 'SimpleCountercompositionApi',
  setup () {
    const { counter, counterComputed, increment, decrement } = useCounter()
    return { counter, counterComputed, increment, decrement }
  }
}
</script>

<style lang="scss"></style>
