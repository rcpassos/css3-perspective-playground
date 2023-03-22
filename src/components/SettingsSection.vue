<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

function handleReset() {
  settingsStore.resetState()
}

async function handleCopy() {
  const text = `transform:${settingsStore.box.transform};`
  await navigator.clipboard.writeText(text)

  alert('CSS Copied to Clipboard!')
}
</script>

<template>
  <section class="settings">
    <div class="settings-container">
      <label>perspective: {{ settingsStore.perspective }}px;</label>
      <input
        type="range"
        min="0"
        max="999"
        v-model="settingsStore.perspective"
        aria-label="perspective"
      />

      <label>rotateX: {{ settingsStore.rotateX }}deg; </label>
      <input
        type="range"
        min="-180"
        max="180"
        v-model="settingsStore.rotateX"
        aria-label="rotateX"
      />

      <label>rotateY: {{ settingsStore.rotateY }}deg; </label>
      <input
        type="range"
        min="-180"
        max="180"
        v-model="settingsStore.rotateY"
        aria-label="rotateY"
      />

      <label>rotateZ: {{ settingsStore.rotateZ }}deg; </label>
      <input
        type="range"
        min="-180"
        max="180"
        v-model="settingsStore.rotateZ"
        aria-label="rotateZ"
      />

      <button type="button" @click.prevent="handleReset">Reset</button>
      <button type="button" @click.prevent="handleCopy">Copy</button>
    </div>
  </section>
</template>

<style scoped>
section.settings {
  width: 50%;
  z-index: 2;
}

button {
  background-color: #8d81f3;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  outline: none;
  border: none;
  margin-right: 10px;
}

label {
  color: #fff;
  display: block;
}

input[type='range'] {
  display: block;
  margin-bottom: 10px;
  width: 200px;
}
</style>
