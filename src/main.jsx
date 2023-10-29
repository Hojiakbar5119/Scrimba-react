import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Hello from './component/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>Hello world</h1>
    <em>by Scrimba online platform</em>
    <Hello/>
  </React.StrictMode>,
)
