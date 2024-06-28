import styles from './ProContro.module.scss'
import ProLabel from './ProLabel/Label'
import ControLabel from './ControLabel/ControLabel'
import { pro } from '../../../utils/pro.js'
import { contro } from '../../../utils/contro.js'

const ProContro = () => {
    return(
        <div className={styles.content}>
            <div className={styles.contentWrapper}>
                <div className={styles.pro}>
                    <div className={styles.title}>Pro</div>
                    <div className={styles.labelContent}>
                        {
                            pro.map((pro, index) => (
                                <ProLabel key={index} title={pro.title}/>
                                ))
                        }
                    </div>
                </div>

                <div className={styles.contro}>
                    <div className={styles.title}>Contro</div>
                    {
                        contro.map((contro, index) => (
                            <ControLabel key={index} title={contro.title}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProContro