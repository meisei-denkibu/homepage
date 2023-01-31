import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://flyby-gateway.herokuapp.com/',
//   cache: new InMemoryCache(),
// });

const api = process.env.API_KEY;
console.log(api);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
