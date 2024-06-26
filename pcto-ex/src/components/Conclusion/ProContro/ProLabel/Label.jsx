import styles from './Label.module.scss'

const Label = ({title}) => {
    return(
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default Label