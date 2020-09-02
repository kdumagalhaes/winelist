import React, { Fragment } from 'react';
import { Reset } from './styles/Reset';
import { ThemeProvider } from 'styled-components';
import main from './styles/Theme'

import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={main}>
        <LoginPage/>
        <Reset />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
