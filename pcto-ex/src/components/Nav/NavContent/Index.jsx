'use client'
import styles from './Index.module.scss'
import { motion } from "framer-motion"
import { links } from "../../../utils/data"
import { TransitionLink } from "../../../utils/TransitionLink"

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
                                    <TransitionLink href={link.href}>
                                        <FlipLink>{link.title}</FlipLink>
                                    </TransitionLink>

                                </motion.div> 
                        )
                    })
                }
            </div>
        </div>
    )
}


const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"

      className={styles.prova1}

      style={{
        lineHeight: 0.75,
      }}
    >
        <div>
            {children.split("").map((l, i) => (
            <motion.span
                variants={{
                initial: {
                    y: 0,
                },
                hovered: {
                    y: "-100%",
                },
                }}
                transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
                }}

                className={styles.prova2}
                
                key={i}
            >
                {l}
            </motion.span>
            ))}
        </div>
        <div className={styles.prova3}>
            {children.split("").map((l, i) => (
            <motion.span
                variants={{
                initial: {
                    y: "100%",
                },
                hovered: {
                    y: 0,
                },
                }}
                transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
                }}
                className={styles.prova4}
                key={i}
            >
                {l}
            </motion.span>
            ))}
        </div>
    </motion.a>
  );
};