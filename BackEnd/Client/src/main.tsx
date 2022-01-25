import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'
import {onError} from "@apollo/client/link/error";
import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";


const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:3001/graphql" }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root')
)
