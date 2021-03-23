
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import Routes from './routes';
import AppProvider from './hooks';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

