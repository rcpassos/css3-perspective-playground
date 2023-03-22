import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import OutputSection from '../OutputSection.vue'

describe('OutputSection', () => {
  it('renders properly', () => {
    const wrapper = mount(OutputSection, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
