import styles from './Intro.module.scss'

export default function Home() {
    return (
        <div className={styles.contentWraper}>
            <div className={styles.content}>
                    <div className={styles.title}> 
                        Presentazione esperienza PCTO
                    </div>
            </div>
        </div>
    );
  }