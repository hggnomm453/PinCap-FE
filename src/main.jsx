import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.less'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import HttpsRedirect from 'react-https-redirect';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HttpsRedirect>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HttpsRedirect>
  </React.StrictMode>,
)
