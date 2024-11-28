import styles from "./Intro.module.scss";

export default function Home() {
    return (
        <div className={styles.contentWraper}>
            <div className={styles.content}>
                <div className={styles.title}>
                    The <span className="highlight">3</span> steps of software
                    development
                </div>
            </div>
        </div>
    );
}
