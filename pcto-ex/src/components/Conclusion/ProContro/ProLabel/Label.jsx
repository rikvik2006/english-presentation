import styles from './Label.module.scss'

const Label = ({title}) => {
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

export default Label