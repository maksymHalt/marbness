import { Provider } from 'react-redux'
import { useStore } from '../store'
import GlobalStyles from '../styles/GlobalStyles'

// style imports

import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

export default function App ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}
