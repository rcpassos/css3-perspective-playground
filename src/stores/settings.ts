import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const perspective: Ref<Number> = ref(100)
  const rotateX: Ref<Number> = ref(0)
  const rotateY: Ref<Number> = ref(0)
  const rotateZ: Ref<Number> = ref(0)

  const box = computed(() => {
    return {
      transform: `perspective(${perspective.value}px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) rotateZ(${rotateZ.value}deg)`
    }
  })

  function resetState() {
    perspective.value = 100
    rotateX.value = 0
    rotateY.value = 0
    rotateZ.value = 0
  }

  return { perspective, rotateX, rotateY, rotateZ, resetState, box }
})
