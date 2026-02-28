import styles from './SurahHeader.module.css'

export default function SurahHeader({ surah }) {
  if (!surah) return null
  return (
    <header className={styles.header}>
      <div className={styles.arabicName}>{surah.nameAr}</div>
      <div className={styles.divider}>
        <span className={styles.line} />
        <span className={styles.diamond}>◆</span>
        <span className={styles.line} />
      </div>
      <div className={styles.meta}>
        <span className={styles.number}>Sourate n° {surah.number}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.french}>{surah.nameFr}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.revelation}>{surah.revelation}</span>
      </div>
    </header>
  )
}
