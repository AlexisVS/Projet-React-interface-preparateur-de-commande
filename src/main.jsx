import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "normalize.css/normalize.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./sass/app.sass"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
