<script setup lang="ts">
import OutputSection from './components/OutputSection.vue'
import SettingsSection from './components/SettingsSection.vue'
</script>

<template>
  <h2>CSS3 Perspective Playground</h2>
  <main>
    <SettingsSection />
    <OutputSection />
  </main>

  <css-doodle>
    :doodle { @grid: 1x3 / 100vmax; position: absolute; top: 0; left: 0; z-index: 0; } @size: 100%
    150%; position: absolute; background: @m(100, ( linear-gradient(transparent, @p(
    #FFFDE1@repeat(2, @p([0-9a-f])), #FB3569@repeat(2, @p([0-9a-f])) )) @r(0%, 100%) @r(0%, 100%) /
    @r(1px) @r(23vmin) no-repeat )); will-change: transform; animation: f 50s linear calc(-50s /
    @size() * @i()) infinite; @keyframes f { from { transform: translateY(-100%) } to { transform:
    translateY(100%) } }
  </css-doodle>
</template>

<style scoped>
h2 {
  color: #8d81f3;
  text-align: center;
  font-size: 40px;
  margin: 20px;
}
main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  max-width: 768px;
  margin: 0 auto;
  font-family: monospace, sans-serif;
  font-size: 22px;
}
</style>
