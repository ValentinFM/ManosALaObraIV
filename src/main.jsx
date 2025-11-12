import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// App.jsx importa el scss
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)