import { ref, computed } from 'vue'

export default function () {
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

  return { counter, counterComputed, increment, decrement }
}
