import React from 'react';
import Home from './pages/Home/Home';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './core/config';
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});
function App() {

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ApolloProvider>

  );
}

export default App;
