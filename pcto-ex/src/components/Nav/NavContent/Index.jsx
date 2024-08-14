'use client'
import styles from './Index.module.scss'
import { links } from '../../../utils/data.js'
import { delay, motion } from "framer-motion"

const prespective = {
    initial: {
        opacity: 0,
        rotateX: 90,
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.65,
            opacity: {duration: 0.35},
            delay: 1 + (i * 0.1),
            ease: [.215,.61,.355,1]
        }
    }),
    exit: {
        opacity: 0,
        transition: {duration: 0.5, ease: [0.75, 0, 0.24, 1]}
    }
}

export default function Index() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map( (link, i) => {
                        return (
                                <motion.div 
                                    key={i}
                                    variants={prespective}
                                    custom={i}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                >
                                    <a href={link.href}>{link.title}</a>
                                </motion.div> 
                        )
                    })
                }
            </div>
        </div>
    )
}