import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);

