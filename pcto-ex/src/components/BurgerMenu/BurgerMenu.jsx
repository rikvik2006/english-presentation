'use client'

import styles from './BurgerMenu.module.scss'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const link = [
    { path: "/intro1", label: "INTRO" },
    { path: "/cono&cons1", label: "CONO. & CONS." },
    { path: "/conclusioni", label: "CONCLUSIONI" },
]

const BurgerMenu = () => {
    const container = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <div className={styles.menuContainer} ref={container}>
           
        </div>
    )
}

export default BurgerMenu