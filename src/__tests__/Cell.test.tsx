import * as React from 'react'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'
import Cell from '../components/Cell'
import CheckSVG from '../svgs/CheckSVG'

const user = {
  "id": 1,
  "name": "Mike Smith",
  "email": "mike_smith@email.com",
  "location": "Brighton",
  "online": true,
  "avatar": "https://source.unsplash.com/random/10x10"
}

describe('Cell', () => {
  describe('Name cell', () => {
    const props = {
      user,
      id: 'name', avatar: true, online: false, email: false
    }
    it('renders component with 3 children (img, copy)', () => {
      const wrapper = create(<Cell {...props} />)

      expect(wrapper.toJSON()).toMatchSnapshot()

      const el = wrapper.root.findByProps({ className: 'user-content ' })
      expect(el.children.length).toBe(2)
    })
    it('renders correct name', () => {
      const wrapper = create(<Cell {...props} />)

      const el = wrapper.root.findByProps({ className: 'user-content ' })
      expect(el.children.includes(user.name)).toBe(true)
    })
    it('renders correct avatar image', () => {
      const wrapper = shallow(<Cell {...props} />)

      expect(wrapper.find('img').exists()).toBe(true)
      expect(wrapper.find('img').prop('src')).toBe(user.avatar)
    })
  })
  describe('Email cell', () => {
    const props = {
      user,
      id: 'email', avatar: false, online: false, email: true
    }
    it('renders component with 1 child (a)', () => {
      const wrapper = create(<Cell {...props} />)

      expect(wrapper.toJSON()).toMatchSnapshot()

      const el = wrapper.root.findByProps({ className: 'user-content ' })
      expect(el.children.length).toBe(1)
    })
    it('renders correct email', () => {
      const wrapper = shallow(<Cell {...props} />)

      expect(wrapper.find('a').exists()).toBe(true)
      expect(wrapper.find('a').text()).toBe(user.email)
    })
  })
  describe('Location cell', () => {
    const props = {
      user,
      id: 'location', avatar: false, online: false, email: false
    }
    it('renders component with 1 child (copy)', () => {
      const wrapper = create(<Cell {...props} />)

      expect(wrapper.toJSON()).toMatchSnapshot()

      const el = wrapper.root.findByProps({ className: 'user-content ' })
      expect(el.children.length).toBe(1)
    })
    it('renders correct location', () => {
      const wrapper = shallow(<Cell {...props} />)

      expect(wrapper.find('td').exists()).toBe(true)
      expect(wrapper.find('td').text()).toBe(user.location)
    })
  })
  describe('Online cell - true', () => {
    const props = {
      user,
      id: 'online', avatar: false, online: true, email: false
    }
    it('renders component with 1 child (svg)', () => {
      const wrapper = create(<Cell {...props} />)

      expect(wrapper.toJSON()).toMatchSnapshot()

      const el = wrapper.root.findByProps({ className: 'user-content user-online' })
      expect(el.children.length).toBe(1)
    })
    it('renders SVG for online user', () => {
      const wrapper = shallow(<Cell {...props} />)

      expect(wrapper.find(CheckSVG).exists()).toBe(true)
    })
  })
  describe('Online cell - false', () => {
    const props = {
      user,
      id: 'online', avatar: false, online: false, email: false
    }
    it('renders component with 0 child', () => {
      const wrapper = create(<Cell {...props} />)

      expect(wrapper.toJSON()).toMatchSnapshot()

      const el = wrapper.root.findByProps({ className: 'user-content user-online' })
      expect(el.children.length).toBe(0)
    })
    it('does not render SVG for offline user', () => {
      const wrapper = shallow(<Cell {...props} />)

      expect(wrapper.find(CheckSVG).exists()).toBe(false)
    })
  })
})
