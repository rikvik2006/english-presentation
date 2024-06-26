import styles from './ProContro.module.scss'
import ProLabel from './ProLabel/Label'
import ControLabel from './ControLabel/ControLabel'
import { pro } from '../../../utils/pro.js'
import { contro } from '../../../utils/contro.js'

const ProContro = () => {
    return(
        <div className={styles.content}>
            <div className={styles.proWrapper}>
                {
                    pro.map((pro, index) => (
                        <ProLabel key={index} title={pro.title}/>
                    ))
                }
            </div>

            <div className={styles.controWrapper}>
                {
                    contro.map((contro, index) => (
                        <ControLabel key={index} title={contro.title}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProContro