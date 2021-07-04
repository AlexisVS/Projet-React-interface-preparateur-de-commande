import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./sass/app.sass"
import "@fortawesome/fontawesome-free/js/all.min.js"
import "normalize.css/normalize.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
