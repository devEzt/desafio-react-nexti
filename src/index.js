import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import { CssBaseline } from '@material-ui/core'

import Providers from './Providers'

ReactDOM.render(
  <Providers>
    <CssBaseline />
    <App />
  </Providers>,
  document.getElementById('root')
)
serviceWorkerRegistration.unregister()
reportWebVitals()
