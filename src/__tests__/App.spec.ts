import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomePage from '@/pages/home/HomePage.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('Homepage')
  })
})
