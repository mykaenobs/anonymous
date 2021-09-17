import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@app/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;

const theme = {
  main: 'hsl(0, 0%, 13.725490196078432%)',
  accent: 'hsl(328, 100%, 50%)',
  accent2: 'hsl(224, 100%, 50%)',
  bg: 'hsl(0, 0%, 18.823529411764707%)',
  lg: 'hsl(0, 0%, 26.666666666666668%)',
  ltc: 'hsl(0, 0%, 76.86274509803923%)',
  dtc: 'hsl(0, 0%, 50.588235294117645%)',
  trans: 'hsla(0, 0%, 0%, 16%)',
  bd: 'hsl(0, 0%, 25.098039215686274%)'
}

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  background-color: ${theme.main};
  color: white;
  font-family: Poppins, 'sans-serif';
  position: relative;
  z-index: 0;
}

a {
  font-size: .9rem;
  text-decoration: none;
  color: white;
}

input, textarea, select, button {
  outline: none;
}
`;