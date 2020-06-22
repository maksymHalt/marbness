import { Provider } from 'react-redux'
import { useStore } from '../store'
import styled from '@emotion/styled'
import Header from 'containers/Header'

// style imports
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'
import GlobalStyles from '../styles/GlobalStyles'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Content = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
`

export default function App ({ Component, pageProps }) {
  // TODO: make own design of error page
  if (pageProps.statusCode >= 400) {
    return <Component {...pageProps} />
  }

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Provider>
  )
}
