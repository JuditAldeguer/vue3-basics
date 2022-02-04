<template>
  <h2>Contador sencillo</h2>
  <h3>{{ counterComputed }}</h3>
  <button @click="decrement">Decrementar</button>
  <button @click="increment">Incrementar</button>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Simple Counter',
  setup () {
    const counter = ref(0)

    const counterComputed = computed(() => {
      const result = `El valor de counter es ${counter.value}`
      return result
    })
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }
    return { counterComputed, increment, decrement }
  }
}
</script>

<style lang="scss"></style>
