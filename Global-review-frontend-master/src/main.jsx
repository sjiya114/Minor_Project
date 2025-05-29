import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</StoreContextProvider>
  ,
)
