import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import styled from '@emotion/styled';
import Header from 'containers/Header';
import Footer from 'containers/Footer';

// style imports
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
`;

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  // TODO: make own design of error page
  if (pageProps.statusCode >= 400) {
    return <Component {...pageProps} />;
  }

  return (
    <Provider store={store}>
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

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.object,
    statusCode: PropTypes.number
  }).isRequired
};
