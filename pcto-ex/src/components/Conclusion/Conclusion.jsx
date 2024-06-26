import styles from './Conclusion.module.scss'
import Nav from './Nav/Nav'
import Content from './ConcContent/ConcContent'
import ProContro from './ProContro/ProContro'

const Conclusion = () => {
    return(
        <div className={styles.ContentWrapper}>
            <Nav/>

            <Content/>

            <ProContro/>
        </div>
    )
}

export default Conclusion