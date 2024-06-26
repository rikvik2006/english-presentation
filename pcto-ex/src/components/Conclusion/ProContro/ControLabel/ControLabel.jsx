import styles from './ControLabel.module.scss'

const ControLabel = ({title}) => {
    return(
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default ControLabel