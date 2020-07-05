import React from 'react'
import { ApolloProvider } from 'react-apollo';
import { create, act } from 'react-test-renderer'
import Page from '../components/Page'
import { match } from 'react-router'
import wait from 'waait'
import { GET_PAGE } from '../queries'
import { MockedProvider } from '@apollo/react-testing';
const data = require('../components/data.json')

const path: string = '/route/:id'

const matchParam: match<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(':id', '1'),
  params: { id: "1" }
};

const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: { params: { id: '1' } } as any
}

const routeComponentPropsMockError = {
  history: {} as any,
  location: {} as any,
  match: { params: { id: '5' } } as any
}

const mocks = [
  {
    request: {
      query: GET_PAGE,
      variables: { param: '0' },
    },
    result: {
      data: {
        page: data.page[0]
      },
    }
  }
]

const mocksError = [
  {
    request: {
      query: GET_PAGE,
      variables: { param: '4' },
    },
    error: new Error('error')
  }
]

describe('Page', () => {
  it('renders loading state initially', () => {
    let wrapper: any
    act(() => {
      wrapper = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Page {...routeComponentPropsMock} />
        </MockedProvider>
      )
    })

    expect(wrapper.toJSON()).toMatchSnapshot()

    const el = wrapper.root.findByType('p')
    expect(el.children).toContain('Loading...')
  })
  it('renders Page content', async () => {
    let wrapper: any
    act(() => {
      wrapper = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Page {...routeComponentPropsMock} />
        </MockedProvider>
      )
    })

    expect(wrapper.toJSON()).toMatchSnapshot();

    await act(async () => {
      await wait(0)

      await wrapper.update(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Page {...routeComponentPropsMock} />
        </MockedProvider>
      )
    })

    expect(wrapper.toJSON()).toMatchSnapshot()

    const el = wrapper.root.findByType('h2')
    expect(wrapper.root.findByType('h2').children).toContain('Page One')
  })

  it('renders error message', async () => {
    let wrapper: any
    act(() => {
      wrapper = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Page {...routeComponentPropsMock} />
        </MockedProvider>
      )
    })

    expect(wrapper.toJSON()).toMatchSnapshot();

    await act(async () => {
      await wrapper.update(
        <MockedProvider mocks={mocksError} addTypename={false}>
          <Page {...routeComponentPropsMockError} />
        </MockedProvider>
      )
    })

    expect(wrapper.toJSON()).toMatchSnapshot()

    const el = wrapper.root.findByType('p')
    expect(el.props.children).toContain('Error')
  })
})
