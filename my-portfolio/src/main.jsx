import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import '@react95/core/GlobalStyle';
import '@react95/core/themes/candy.css';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
