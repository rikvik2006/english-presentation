'use client'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { conoscenze } from '../../../utils/conoscenze.js'
import { TransitionLink } from '../../../utils/TransitionLink'
import { IoIosArrowForward } from "react-icons/io"
import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import { gsap } from "gsap";

export default function Page({ params }) {

    const initialStates = () => {
        gsap.set("#numero", {
            yPercent: 100,
        })
        
        gsap.set("#title", {
            yPercent: 100,
        })
    }
    
    const uiAnimations = () => {
        const tl = gsap.timeline({
            delay: 1,
            
            defaults: {
                ease: 'power3.out',
                duration: 1,
                yPercent: 0,
                y: 0
            }
            
        })
        
        tl.to("#numero", {
            
        })
        
        .to("#title", {
            
        }, ".6")
        
        return tl
    }
    
    
    const master = gsap.timeline()
    master
    .add(initialStates())
    .add(uiAnimations())




    const [ conoscenza, setConoscenza] = useState(null)

    useEffect(() => {
        for (const cona of conoscenze) {
            if (cona.id == params.conoscenza) {
                setConoscenza(cona)

                break
            } 
        }
    }, [])


    return (
        <div className={styles.contentWraper}>
            <div className={styles.prova}>
                <div id="numero" className={styles.numero}>
                    <span>
                        <span>{conoscenza?.numero}</span>
                    </span>
                </div>
            </div>

            <div className={styles.content}>
                <div id="title" className={styles.title}> 
                    <span>
                        <span>{conoscenza?.titolo}</span>
                    </span>
                </div>
            </div>

            <TransitionLink href={`${conoscenza?.linkNext}`}>
                <IconContext.Provider value={{ color: "white", size: "2vw" }}>
                    <div className={styles.nextLink}> 
                        <IoIosArrowForward/> 
                    </div>
                </IconContext.Provider>
            </TransitionLink>

            <TransitionLink href={`${conoscenza?.linkPrev}`}>
                <IconContext.Provider value={{ color: "white", size: "2vw" }}>
                    <div className={styles.linkPrev}> 
                        <IoIosArrowBack/> 
                    </div>
                </IconContext.Provider>
            </TransitionLink>
        </div>
    )

}


