<template>
  <h2>Watcher</h2>
  <h3>{{counter}}</h3>
  <h3>{{message}}</h3>
  <button @click="decrement">Decrementar</button>
  <button @click="increment">Incrementar</button>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'Watcher',
  setup () {
    const counter = ref(0)
    const message = ref('')

    watch(counter, () => {
      if (counter.value === 5) {
        message.value = 'El valor de counter es 5'
      } else {
        message.value = ''
      }
    })

    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }

    return { counter, message, increment, decrement }
  }
}
</script>

<style lang="scss"></style>
