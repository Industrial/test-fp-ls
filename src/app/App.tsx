import type { Component } from 'https://esm.sh/solid-js'

import logo from './logo.svg'
import styles from './App.module.css'

const App: Component = () => {
  return (
    <main>
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solidd
          </a>
        </header>
      </div>
    </main>
  )
}

export default App
