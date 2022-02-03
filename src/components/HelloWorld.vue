<template>
  <h2>Hola Mundo</h2>
  <p>{{ message }}</p>
  <label for="message">Mensaje</label>
  <input id="message" type="text" v-model="message" />
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'helloWorld',
  setup () {
    const message = ref('Helloworld')
    return { message }
  }
}
</script>
