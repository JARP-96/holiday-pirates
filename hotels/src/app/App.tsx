import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import './App.css'
import { setContext } from '@apollo/client/link/context'
import { HotelFinder } from '../pages/HotelFinder'

const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
})

const authLink = setContext((_, { headers }) => {
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
