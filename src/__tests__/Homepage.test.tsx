import * as React from 'react'
import { mount } from 'enzyme'
import Homepage from '../components/Homepage'

describe('Homepage', () => {
  it('renders the correct text', () => {
    const component = mount(<Homepage />);
    expect(component.find(".title").text()).toEqual('Home')
  })
})
