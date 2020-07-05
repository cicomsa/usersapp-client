import React from 'react'
import { mount } from 'enzyme'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Page from '../components/Page'
import Homepage from '../components/Homepage'
import App from '../App'

describe('App', () => {
  it('renders Homepage content', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    const wrapper = mount(
      <Router history={history}>
        <App />
      </Router>
    )

    expect(wrapper.find(Homepage)).toHaveLength(1)
    expect(wrapper.find(Homepage).html()).toMatch('Home')
  })
})
