"use client"
import styles from './template.jsx'

export default function Template({ children }) {
    return (
        <div id='banner' className={styles.banner}>
            {children}
        </div>
    )
  }