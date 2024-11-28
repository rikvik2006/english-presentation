'use client'
import styles from './ConcContent.module.scss'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ConcContent = () => {

    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        const initialStates = () => {
            gsap.set("#navContent", {
                yPercent: 100,
            })
            
            gsap.set("#content", {
                yPercent: 100,
            })
        }
        
        const uiAnimations = () => {
            const tl = gsap.timeline({
                delay: .7,
                
                defaults: {
                    ease: 'power3.out',
                    duration: 1,
                    yPercent: 0,
                    y: 0
                }
                
            })
            
            tl.to("#navContent", {
                
            })
            
            .to("#content", {
                
            }, ".6")
            
            return tl
        }
        
        
        const master = gsap.timeline()
        master
            .add(initialStates())
            .add(uiAnimations())
    }, []);

    return(
        <div className={styles.contentWrapper}>
            <div className={styles.navContent}>
                <div id="navContent" className={styles.title}>
                    conclusioni
                </div>
            </div>

            <div className={styles.content}>
                <div id="content" className={styles.text}>
                    Sono contento di questa esperienza. Anche se ho fatto solo lavori di base, 
                    erano comunque lavori veri e non semplici progettini che poi nessuno considera. 
                    L&apos;ambiente era fantastico: tutti scherzavano ed erano gentili, ma lavoravano anche duramente, 
                    creando un clima davvero piacevole.
                </div>
            </div>
        </div>
    )
}

export default ConcContent