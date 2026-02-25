import { useState } from 'react'
import styles from './Word.module.css'

export default function Word({ ar, tr, fr, index }) {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`${styles.word} ${active ? styles.active : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <span className={styles.arabic}>{ar}</span>
      <span className={styles.translit}>{tr}</span>
      <span className={styles.french}>{fr}</span>
    </div>
  )
}
