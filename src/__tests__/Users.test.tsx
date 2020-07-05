import * as React from 'react'
import { mount } from 'enzyme'
import Users from '../components/Users'
import User from '../components/User';
const data = require('../components/data.json')

const users = data.page[0].users

describe('Users', () => {
  it('renders component', () => {
    const wrapper = mount(<Users users={users} />)
    expect(wrapper.find(".users-table").exists()).toEqual(true)
  })
  it('renders 4 table headers', () => {
    const wrapper = mount(<Users users={users} />)
    expect(wrapper.find(".table-header").length).toEqual(4)
  })
  it('renders 3 User components', () => {
    const wrapper = mount(<Users users={users} />)
    const el = wrapper.find(User)
    expect(el.length).toBe(3)
  })
})
