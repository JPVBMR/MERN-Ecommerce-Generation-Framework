export const indexFile = `import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root')) // ta a ir ao root do index.html
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


`
