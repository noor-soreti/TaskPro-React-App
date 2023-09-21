import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
    query Query {
        currentUser
    }
`
export const GET_TASKS = gql`
    query Query {
        getTasks {
            _id
            title
            dueDate
            ownerId
            priority
            setDate
        }
    }
`

export const LOG_OUT = gql`
    query Query {
        signOut
    }
`

export const TEST_QUERY = gql`
query Query {
    testQuery
}
`

