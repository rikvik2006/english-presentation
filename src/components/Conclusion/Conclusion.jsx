import styles from './Conclusion.module.scss'
import Content from './ConcContent/ConcContent'
import ProContro from './ProContro/ProContro'
import Utile from './Utile/Utile'

const Conclusion = () => {
    return(
        <div className={styles.ContentWrapper}>
            <Content/>

            <ProContro/>

            <Utile/>
        </div>
    )
}

export default Conclusion