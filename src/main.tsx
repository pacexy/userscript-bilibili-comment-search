import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { assertEl, debug } from './utils'

function run() {
  debug('run')
  const id = 'comment-search-root'
  let root = document.querySelector(`#${id}`)
  if (root) {
    debug('root exists')
    return
  }

  const container = assertEl(document.querySelector('ul.nav-bar'))
  root = document.createElement('li')
  root.id = id
  container.append(root)

  debug('render')
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

window.addEventListener('load', () => {
  const timer = setInterval(() => {
    try {
      run()
      clearInterval(timer)
    } catch (error) {
      // ignore
    }
  }, 500)
})
