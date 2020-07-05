import React from 'react'
import { mount } from 'enzyme'
import { Router, Link } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import LinkComponent from '../components/Link'

describe('LinkComponent', () => {
  it('renders Link content', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    const wrapper = mount(
      <Router history={history}>
        <LinkComponent title="First Page" path="/pages/1" />
      </Router>
    )

    expect(wrapper.find(LinkComponent).exists()).toBe(true)
  })
  it('renders correct title', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    const wrapper = mount(
      <Router history={history}>
        <LinkComponent title="First Page" path="/pages/1" />
      </Router>
    )
    expect(wrapper.find(LinkComponent).text()).toBe('First Page')
  })
  it('renders Router Link', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    const wrapper = mount(
      <Router history={history}>
        <LinkComponent title="First Page" path="/pages/1" />
      </Router>
    )
    expect(wrapper.find(Link).exists()).toBe(true)
  })
  it('renders Router Link with correct prop value', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    const wrapper = mount(
      <Router history={history}>
        <LinkComponent title="First Page" path="/pages/1" />
      </Router>
    )

    expect(wrapper.find(Link).prop('to')).toBe('/pages/1')
  })
})