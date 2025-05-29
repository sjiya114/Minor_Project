import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import StoreContextProvider from './StoreContext/StoreContext.jsx';
//import StoreContextProvider from './StoreContext/StoreContext.jsx';

createRoot(document.getElementById('root')).render(

  <StoreContextProvider>
        <BrowserRouter>
    <App />
    </BrowserRouter>
  
  </StoreContextProvider>

)
