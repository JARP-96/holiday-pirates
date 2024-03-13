import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import './App.css'
import { setContext } from '@apollo/client/link/context'
import { HotelFinder } from './pages/HotelFinder'

const httpLink = createHttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/gyfunrv4a4ak',
})

const authLink = setContext((_, { headers }) => {
  const accessToken = 'k9P9FQJcUpHKrHX3tXrgXunRyiS3qPchtY7V61tNruE'
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <HotelFinder />
    </ApolloProvider>
  )
}

export default App
