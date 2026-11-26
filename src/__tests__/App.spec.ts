import { describe, it, expect } from 'vitest'

import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import HomePage from '@/pages/home/HomePage.vue'
import { navigationItems } from '@/components/navigation/navigationItems'

const RouterLinkStub = defineComponent({
  props: {
    to: { type: String, required: true },
  },
  setup(props, { slots }) {
    return () => h('a', { href: props.to }, slots.default?.())
  },
})

const RouterViewStub = defineComponent({
  setup() {
    return () => h('div', { class: 'router-view-stub' }, 'Page content')
  },
})

function mountApp() {
  return mount(App, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
        RouterView: RouterViewStub,
      },
    },
  })
}

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('Homepage')
  })

  describe('application shell', () => {
    it('renders semantic landmarks with a skip link as the first focusable element', () => {
      const wrapper = mountApp()
      const firstLink = wrapper.findAll('a')[0]

      expect(firstLink?.attributes('href')).toBe('#main-content')
      expect(firstLink?.text()).toBe('Skip to content')
      expect(wrapper.find('header').exists()).toBe(true)
      expect(wrapper.find('nav[aria-label="Main navigation"]').exists()).toBe(true)
      expect(wrapper.find('main#main-content').exists()).toBe(true)
      expect(wrapper.find('footer').exists()).toBe(true)
    })

    it('renders routed page content inside the main landmark', () => {
      const wrapper = mountApp()

      expect(wrapper.find('main#main-content .router-view-stub').exists()).toBe(true)
    })

    it('renders the brand link in the header', () => {
      const wrapper = mountApp()
      const brand = wrapper.find('header a')

      expect(brand.attributes('href')).toBe('/')
      expect(brand.text()).toBe('Cacao Atelier')
    })

    it('renders primary navigation from the shared configuration', () => {
      const wrapper = mountApp()
      const nav = wrapper.find('nav[aria-label="Main navigation"]')
      const expected = navigationItems.filter((item) => item.section === 'primary')

      expect(nav.findAll('a').map((link) => link.attributes('href'))).toEqual(
        expected.map((item) => item.to),
      )
      expect(nav.findAll('a').map((link) => link.text())).toEqual(
        expected.map((item) => item.label),
      )
    })

    it('renders secondary links and the motto in the footer from the shared configuration', () => {
      const wrapper = mountApp()
      const footer = wrapper.find('footer')
      const expected = navigationItems.filter((item) => item.section === 'secondary')

      expect(footer.text()).toContain('Cacao Atelier')
      expect(footer.text()).toContain('The unexpected is worth tasting.')
      expect(footer.find('nav').attributes('aria-label')).toBe('Footer navigation')
      expect(footer.findAll('a').map((link) => link.attributes('href'))).toEqual(
        expected.map((item) => item.to),
      )
      expect(footer.findAll('a').map((link) => link.text())).toEqual(
        expected.map((item) => item.label),
      )
    })
  })
})
