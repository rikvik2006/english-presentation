"use client"
import styles from './Label.module.scss'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Label = ({title}) => {
    const tl = gsap.timeline()
    
    function enterAnimation() {
        useGSAP(() => {
            tl.set("#banner", {
                yPercent: 0
            }).to("#banner", {
                yPercent: 100,
                ease: "power4.inOut",
                duration: .5,
            })
        }, [])
    }

    return(
        <>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p>{title}</p>

                <div className={styles.backGround}></div>
            </div>

        </>
    )
}

export default Label