import { useState } from 'react'
import Word from './Word'
import styles from './Verse.module.css'

function toArabicNum(n) {
  return String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d])
}

export default function Verse({ verse, surahNumber, index }) {
  const [expanded, setExpanded] = useState(true)

  return (
    <article
      className={styles.verse}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={styles.header}>
        <button
          className={styles.badge}
          onClick={() => setExpanded((v) => !v)}
          title={expanded ? 'Réduire' : 'Développer'}
        >
          {verse.number}
        </button>
        <div className={styles.verseRef}>
          <span className={styles.refAr}>﴿ {toArabicNum(verse.number)} ﴾</span>
          <span className={styles.refFr}>
            {surahNumber}:{verse.number}
          </span>
        </div>
      </div>

      {expanded && (
        <>
          <div className={styles.wordsRow}>
            {verse.words.map((w, i) => (
              <Word key={i} {...w} index={i} />
            ))}
          </div>

          <div className={styles.translationBlock}>
            <span className={styles.translationLabel}>Traduction</span>
            <p className={styles.translation}>{verse.translation}</p>
          </div>
        </>
      )}
    </article>
  )
}
