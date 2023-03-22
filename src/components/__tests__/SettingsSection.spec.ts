import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import SettingsSection from '../SettingsSection.vue'
import { createTestingPinia } from '@pinia/testing'
import { useSettingsStore } from '@/stores/settings'
import '../../setupTests'

describe('SettingsSection', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(SettingsSection, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn
          })
        ]
      }
    })

    const labels = wrapper.findAll('label')
    expect(labels[0].text()).toBe('perspective: 100px;')
    expect(labels[1].text()).toBe('rotateX: 0deg;')
    expect(labels[2].text()).toBe('rotateY: 0deg;')
    expect(labels[3].text()).toBe('rotateZ: 0deg;')

    const inputs = wrapper.findAll(`input[type='range']`)

    const inputPerspective = inputs[0].element as HTMLInputElement
    expect(inputPerspective.value).toBe('100')

    const inputRotateX = inputs[1].element as HTMLInputElement
    expect(inputRotateX.value).toBe('0')

    const inputRotateY = inputs[2].element as HTMLInputElement
    expect(inputRotateY.value).toBe('0')

    const inputRotateZ = inputs[3].element as HTMLInputElement
    expect(inputRotateZ.value).toBe('0')
  })

  it('copies the info to the clipboard', async () => {
    const wrapper = shallowMount(SettingsSection, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn
          })
        ]
      }
    })

    await wrapper.findAll('button')[1].trigger('click')
    const clipboardText = await navigator.clipboard.readText()
    expect(clipboardText).toBe(
      'transform:perspective(100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);'
    )
  })

  it('updates the values and resets the state', async () => {
    const wrapper = shallowMount(SettingsSection, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn
          })
        ]
      }
    })

    const settingsStore = useSettingsStore()

    await wrapper.findAll('button')[0].trigger('click')

    expect(settingsStore.resetState).toHaveBeenCalledOnce()
  })
})
