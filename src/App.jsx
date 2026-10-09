import { useState } from 'react'
import "./App.scss"
import Docs from './components/Docs'
import Navbar from './components/Navbar'
import GitHub from './components/Windows/GitHub'
import Notes from './components/Windows/Notes'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/cli'

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  })
  const openWindow = (id) => {
    const key = id === 'pdf' ? 'resume' : id
    setWindowsState((current) => ({ ...current, [key]: true }))
  }

  const closeWindow = (key) => setWindowsState((current) => ({ ...current, [key]: false }))

  return (
    <div>
      <main>
        <Navbar />
        <Docs onOpen={openWindow} />
        {windowsState.github && <GitHub onClose={() => closeWindow('github')} />}
        {windowsState.note && <Notes onClose={() => closeWindow('note')} />}
        {windowsState.resume && <Resume onClose={() => closeWindow('resume')} />}
        {windowsState.spotify && <Spotify onClose={() => closeWindow('spotify')} />}
        {windowsState.cli && <Cli onClose={() => closeWindow('cli')} />}
      </main>
    </div>
  )
}

export default App
