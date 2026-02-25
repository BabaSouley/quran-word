import { useState, useCallback } from 'react'
import { SURAHS } from './data/quran'
import Verse from './components/Verse'
import SurahHeader from './components/SurahHeader'
import Sidebar from './components/Sidebar'
import styles from './App.module.css'

export default function App() {
  const [currentSurah, setCurrentSurah] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const surah = SURAHS[currentSurah]

  const handleSelect = useCallback((n) => {
    setCurrentSurah(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={styles.app}>
      {/* Ambient background */}
      <div className={styles.ambient} />

      {/* Top bar */}
      <header className={styles.topBar}>
        <button
          className={styles.menuBtn}
          onClick={() => setSidebarOpen(true)}
          aria-label="Ouvrir les sourates"
        >
          <span /><span /><span />
        </button>

        <div className={styles.topTitle}>
          <span className={styles.bismillah}>القرآن الكريم</span>
        </div>

        <div className={styles.topRight}>
          {surah && (
            <span className={styles.currentLabel}>
              {surah.number} · {surah.nameFr}
            </span>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar
        current={currentSurah}
        onSelect={handleSelect}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main reading area */}
      <main className={styles.main}>
        {surah ? (
          <>
            <SurahHeader surah={surah} />
            {surah.verses.map((verse, i) => (
              <Verse
                key={`${surah.number}-${verse.number}`}
                verse={verse}
                surahNumber={surah.number}
                index={i}
              />
            ))}
          </>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>﴿ ﴾</span>
            <p>Sélectionnez une sourate</p>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <span>Traduction Hamidullah · Translittération phonétique · Données hors-ligne</span>
      </footer>
    </div>
  )
}
