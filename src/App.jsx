import './App.css'
import { useState, useRef } from 'react'
import HeroCard from './components/HeroCard'
import InfoGrid from './components/InfoGrid'
import S3Modal from './components/S3Modal'

function App() {
  const [showS3Details, setShowS3Details] = useState(false)
  const triggerRef = useRef(null)

  return (
    <main className="app-shell" id="main-content">
      <HeroCard
        triggerRef={triggerRef}
        showS3Details={showS3Details}
        setShowS3Details={setShowS3Details}
      />
      <InfoGrid />
      <S3Modal
        show={showS3Details}
        onClose={() => setShowS3Details(false)}
        triggerRef={triggerRef}
      />
    </main>
  )
}

export default App