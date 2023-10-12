import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
  query reservations {
    reservationsOld {
      obaId
      userName
      id
      date
    }
  }
`

  return await hygraph.request(query)
}