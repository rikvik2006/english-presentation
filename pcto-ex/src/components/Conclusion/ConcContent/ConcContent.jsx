import styles from './ConcContent.module.scss'

const ConcContent = () => {
    return(
        <div className={styles.content}>
            <div className={styles.text}>
                Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle 
                variazioni del tempo, a causa dell’inserimento di passaggi ironici, o di sequenze casuali di caratteri 
                palesemente poco verosimili. 
            </div>
        </div>
    )
}

export default ConcContent