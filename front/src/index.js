import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './context/global';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('react-root')
);
reportWebVitals();