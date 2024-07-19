import styles from './ControLabel.module.scss'

const ControLabel = ({title}) => {
    return(
        <>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p>{title}</p>

                <div className={styles.backGround}></div>
            </div>

        </>
    )
}

export default ControLabel