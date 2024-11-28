'use client'
import styles from './Index.module.scss'
import { motion } from "framer-motion"

export default function Index({isActive, setIsActive}) {

    return (
        <div onClick={() => setIsActive(!isActive)} className={styles.button}>

            <motion.div 
                className={styles.slider}
                animate={{top: isActive ? "-100%" : "0"}}
                transition={{duration: 0.5, ease: [0.75, 0, 0.24, 1]}}
            >
                <div className={styles.el}>
                    <ProspectiveText label="menu"/>
                </div>

                <div className={styles.el}>
                    <ProspectiveText label="close"/>
                </div>
            </motion.div>

        </div>
  )
}

function ProspectiveText({label}) {
    return (
        <div className={styles.prospectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}