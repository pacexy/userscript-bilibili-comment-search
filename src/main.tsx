import React from 'react'
import ReactDOM from 'react-dom/client'
import { name } from '../package.json'
import App from './App'
import { assertEl, debug } from './utils'

function run() {
  debug('run')

  let root = document.querySelector(`#${name}`)
  if (root) {
    debug('root exists')
    return
  }

  const container = assertEl(document.querySelector('ul.nav-bar'))
  root = document.createElement('li')
  root.id = name
  container.append(root)

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

window.addEventListener('load', run)
