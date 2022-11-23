import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'

import './fonts/NetflixSansLight.otf';
import './fonts//NetflixSansRegular.otf';
import './fonts/NetflixSansMedium.otf';
import './fonts/NetflixSansBold.otf';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhacers = composeAlt(applyMiddleware(thunk))
const store = createStore(rootReducer, composeEnhacers)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
