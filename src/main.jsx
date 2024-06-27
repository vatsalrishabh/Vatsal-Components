import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';  // to use bootstrap in vite, import it
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // to use bootstrap javascript import it
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
