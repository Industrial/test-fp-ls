/* @jsxImportSource solid-js */
/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App.tsx'

const root = window.document.getElementById('root')

if (root === null) {
  throw new Error('Could not find #root element')
}

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

render(() => {
  return <App />
}, root)
