import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-green/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './index.css'

// Suppress PrimeReact UNSAFE_componentWillMount warning in development
// This is a known issue with PrimeReact 10.9.7 and will be fixed in future versions
if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      args[0]?.includes?.('UNSAFE_componentWillMount') ||
      args[0]?.includes?.('SideEffect')
    ) {
      // Suppress PrimeReact lifecycle warning
      return;
    }
    originalWarn.apply(console, args);
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
