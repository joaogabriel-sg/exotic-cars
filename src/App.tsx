import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { Layout } from '@components';

import { store } from '@store';

import { GlobalStyle, theme } from '@shared/styles';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
