import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { RematchStore } from '@rematch/core';
import { useStore } from '@src/store';
import styled from '@emotion/styled';
import Header from '@src/containers/Header';
import Footer from '@src/containers/Footer';
import faviconMeta from '@src/favicon';

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marbness</title>
        {faviconMeta}
        <meta name="robots" content="noindex" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KV5FR6V');`
          }}
        />
        {/* End Google Tag Manager (noscript) */}
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV5FR6V" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}
      />
      {/* End Google Tag Manager (noscript) */}
      <GlobalStyles />
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
