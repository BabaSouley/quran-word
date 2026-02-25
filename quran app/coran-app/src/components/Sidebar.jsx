import styles from './Sidebar.module.css'
import { SURAH_LIST } from '../data/quran'

export default function Sidebar({ current, onSelect, open, onClose }) {
  return (
    <>
      {open && <div className={styles.backdrop} onClick={onClose} />}
      <nav className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarTitle}>Sourates</span>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <ul className={styles.list}>
          {SURAH_LIST.map((s) => (
            <li key={s.n}>
              <button
                className={`${styles.item} ${current === s.n ? styles.active : ''}`}
                onClick={() => { onSelect(s.n); onClose(); }}
              >
                <span className={styles.itemNum}>{s.n}</span>
                <span className={styles.itemInfo}>
                  <span className={styles.itemFr}>{s.nameFr}</span>
                  <span className={styles.itemAr}>{s.nameAr}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.sidebarFooter}>
          Traduction Hamidullah
        </div>
      </nav>
    </>
  )
}
