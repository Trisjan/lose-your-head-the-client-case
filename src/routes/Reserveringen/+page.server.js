import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
    query reservation {
        reservation {
            title
            id
            date
            availability
        }
    }
`

    return await hygraph.request(query)
}