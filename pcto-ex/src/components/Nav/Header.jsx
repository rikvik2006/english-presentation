'use client'
import styles from './Index.module.scss'
import Buttom from './Button/Index'
import { useState } from 'react'
import { motion } from "framer-motion"

const variants = {
  open: {
    width: "16vw",
    height: "23vw",
    top: "-0.5vw",
    right: "-0.5vw",
    transition: {duration: 0.8, ease: [0.75, 0, 0.24, 1]}
  },
  
  closed: {
    width: "3.8vw",
    height: "1.4vw",
    top: "0",
    right: "0",
    transition: {duration: 0.8, ease: [0.75, 0, 0.24, 1]}
  }
}

export default function Home() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.header}>
        <motion.div 
          className={styles.menu}
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial={"closed"}
        >

        </motion.div>
        <Buttom isActive={isActive} setIsActive={setIsActive}/>
    </div>
  )
}