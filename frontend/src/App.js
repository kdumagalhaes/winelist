import React, { Fragment } from 'react';
import { Reset } from './styles/Reset';
import { ThemeProvider } from 'styled-components';
import main from './styles/Theme';

import Routes from './routes';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={main}>
        <Routes />
        <Reset />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;