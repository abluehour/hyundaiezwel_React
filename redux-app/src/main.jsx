import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals.jsx'
import {Provider} from 'react-redux'
import reducer from './component/reducer.js'
import { configureStore } from '@reduxjs/toolkit'

//store 생성
const store = configureStore({ reducer: reducer })

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
