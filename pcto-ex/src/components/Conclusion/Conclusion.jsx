import styles from './Conclusion.module.scss'
import Nav from './Nav/Nav'
import Content from './ConcContent/ConcContent'
import ProContro from './ProContro/ProContro'
import Utile from './Utile/Utile'

const Conclusion = () => {
    return(
        <div className={styles.ContentWrapper}>
            <Nav/>

            <Content/>

            <ProContro/>

            <Utile/>
        </div>
    )
}

export default Conclusion