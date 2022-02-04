<template>
  <h2>Reactive Counter</h2>
  {{ data }}
</template>

<script>
// import { reactive, computed } from 'vue'

export default {
  name: 'ReactiveCounter'
  // setup () {
  //   const data = reactive({
  //     counter: 0,
  //     counterComputed: computed(() => {
  //       const result = `El valor de counter es ${data.counter}`
  //       return result
  //     })
  //   })

  //   const increment = () => {
  //     counter.value++
  //   }
  //   const decrement = () => {
  //     counter.value--
  //   }
  //   return { counterComputed, increment, decrement }
  // }
}
</script>

<style lang="scss"></style>
