import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SettingsSection from '../SettingsSection.vue'

describe('SettingsSection', () => {
  it('renders properly', () => {
    const wrapper = mount(SettingsSection, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
