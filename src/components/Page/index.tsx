import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Users from '../Users'
import { GET_PAGE } from '../../queries'
import { TParams, TPageQueryResponse, TPageQueryVariables } from '../../types'

const Page = ({ match }: RouteComponentProps<TParams>) => {
  const { id }: TParams = match.params
  const param: string = (Number(id) - 1).toString()

  const { loading, data, error } = useQuery<TPageQueryResponse, TPageQueryVariables>(
    GET_PAGE,
    {
      variables: { param }
    }
  )

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error retrieving data from the server.</p>;

  if (data) {
    return (
      <>
        <h2 className="page-title">{data.page.title}</h2>
        <p>Description: {data.page.description}</p>
        <Users users={data.page.users} />
      </>
    )
  }

  return null
}

export default Page
