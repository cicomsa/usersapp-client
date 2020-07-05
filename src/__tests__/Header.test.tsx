import React from 'react'
import { mount } from 'enzyme'
import { Router, Link } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Homepage from '../components/Homepage'
import Header from '../components/Header'

describe('Header', () => {
  it('renders Header content', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    const wrapper = mount(
      <Router history={history}>
        <Header />
      </Router>
    )

    expect(wrapper.find(Header).exists()).toBe(true)
  })
  it('renders 4 links', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    const wrapper = mount(
      <Router history={history}>
        <Header />
      </Router>
    )
    expect(wrapper.find(Link).children().length).toBe(4)
  })
})