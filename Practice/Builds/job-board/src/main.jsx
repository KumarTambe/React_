import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { SavedJobsProvider } from './context/SavedJobsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SavedJobsProvider>

        <App />
      </SavedJobsProvider>
    </BrowserRouter>
  </StrictMode>
)
