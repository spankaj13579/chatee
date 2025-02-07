import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider as Reduxprovider } from 'react-redux' 
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(

    <Reduxprovider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Reduxprovider>
)
