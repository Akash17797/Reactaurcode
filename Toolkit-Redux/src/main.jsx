import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Context API mei jaise hum provider mei values dete hai waise hi redux mei hum provider mei store dete hai jisme kya value deni wo likhti hai */}
    <App />
  </Provider>,
)
