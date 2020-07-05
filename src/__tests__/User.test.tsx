import * as React from 'react'
import { create } from 'react-test-renderer'
import User from '../components/User'
import Cell from '../components/Cell';

const user = {
  "id": 1,
  "name": "Mike Smith",
  "email": "mike_smith@email.com",
  "location": "Brighton",
  "online": true,
  "avatar": "https://source.unsplash.com/random/10x10"
}

const keys = Object.keys(user)

describe('User', () => {
  it('renders 4 Cell components', () => {
    const wrapper = create(<User user={user} keys={keys} />)

    expect(wrapper.toJSON()).toMatchSnapshot()

    const el = wrapper.root.findAllByType(Cell)
    expect(el.length).toBe(4)
  })
})
