import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';
import Theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

