import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import OutputSection from '../OutputSection.vue'

describe('OutputSection', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(OutputSection, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn
          })
        ]
      }
    })

    const boxDiv = wrapper.find('div.box')
    expect(boxDiv.exists()).toBeTruthy()

    const style = window.getComputedStyle(boxDiv.element)
    expect(style.transform).toBe(`perspective(100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`)
  })
})
