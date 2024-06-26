import styles from './ProContro.module.scss'

const ProContro = () => {
    return(
        <div className={styles.content}>
            <div className={styles.proWrapper}>
                <div className={styles.title}>
                    pro
                </div>

                <div className={styles.label}>

                </div>

            </div>

            <div className={styles.controWrapper}>
                <div className={styles.title}>
                    contro
                </div>
            </div>
        </div>
    )
}

export default ProContro