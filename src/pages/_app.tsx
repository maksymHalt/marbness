import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { RematchStore } from '@rematch/core';
import { useStore } from '@src/store';
import styled from '@emotion/styled';
import Header from '@src/containers/Header';
import Footer from '@src/containers/Footer';

// style imports
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import GlobalStyles from '@src/styles/GlobalStyles';
import 'swiper/swiper-bundle.min.css';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
`;

interface Props {
  Component: React.ElementType;
  pageProps: {
    initialReduxState: RematchStore;
    statusCode: number;
  };
}

const App: FC<Props> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  // TODO: make own design of error page
  if (pageProps.statusCode >= 400) {
    return <Component {...pageProps} />;
  }

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marbness</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Marbness" />
        <meta name="application-name" content="Marbness" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="msapplication-config" content="favicon/browserconfig.xml" />
        <meta name="theme-color" content="#65019d" />
      </Head>
      <Layout>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </Provider>
  );
};

export default App;
