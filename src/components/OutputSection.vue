<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <section class="output">
    <div class="box-container">
      <div class="box" :style="settingsStore.box"></div>
    </div>
  </section>
</template>

<style scoped>
.box-container {
  padding: 50px;
  border: 1px solid #8d81f3;
}
.box {
  width: 150px;
  height: 150px;
  background: #8d81f3;
}
</style>
