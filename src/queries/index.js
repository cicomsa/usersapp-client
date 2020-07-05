import gql from 'graphql-tag'

const GET_PAGE = gql`
  query page($param: ID!) {
    page(id: $param) {
      id
      title,
      description,
      users {
        id,
        name,
        email,
        location,
        online,
        avatar
      }
    }
  }
`

export {
  GET_PAGE
}
