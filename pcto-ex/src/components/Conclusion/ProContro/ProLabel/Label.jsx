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
        <div className={styles.content}>
            <div id='banner' className={styles.banner}></div>

            <div className={styles.lineTitle}>
                <div onMouseEnter={enterAnimation()} className={styles.title}>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Label