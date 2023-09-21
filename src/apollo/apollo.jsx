import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// with 'client', we are now ready to start fetching data
const client = new ApolloClient({
    uri: 'https://task-pro-backend-app-c72b5d43b735.herokuapp.com/',
    cache: new InMemoryCache(), //  instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
    // connectToDevTools: true
});


// client
//     .query({
//         query: gql`
//       query testQuery {
//         testQuery
//       }
//     `,
//     })
//     .then((result) => console.log(result.data));

export default client

