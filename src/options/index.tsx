import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Options'
import './index.css'
import '../assets/output-tailwind.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
