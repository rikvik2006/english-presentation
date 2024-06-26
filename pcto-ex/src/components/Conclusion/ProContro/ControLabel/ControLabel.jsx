import styles from './ControLabel.module.scss'

const ControLabel = ({title}) => {
    return(
        <div className={styles.titleLine}>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default ControLabel