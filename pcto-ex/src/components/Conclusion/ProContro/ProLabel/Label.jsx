import styles from './Label.module.scss'

const Label = ({title}) => {
    return(
        <div className={styles.titleLine}>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default Label