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
           <div className={styles.menuOpen} onClick={toggleMenu}>
                <p>open</p>
           </div>

           <div className={styles.menuOverlay}>
                <div className={styles.menuClose}>
                    <p>close</p>
                </div>

                <div className={styles.menuLinks}>
                    {link.map((link, index) => (
                        <div className={styles.menuLinksItem} key={index}>
                            <div className={styles.menuLinksItemHolder} onClick={toggleMenu} >
                                <Link href={link.path} className={styles.menuLink}>
                                    {link.label}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </div>
    )
}

export default BurgerMenu