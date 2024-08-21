'use client'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import slideData  from '../../../utils/slidesData'
import { IoIosArrowForward } from "react-icons/io"
import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import { TransitionLink } from "../../../utils/TransitionLink"
import { gsap } from "gsap";

export default function Page({ params }) {
    const [ slideUrl, setSlideUrl] = useState(null)

    useEffect(() => {
        for (const slide of slideData) {
            console.log(params.slide)
            if (slide.id == params.slideUrl) {
                setSlideUrl(slide)
                break
            } 
        }
    }, [])


    return (
        <div className={styles.pageContent}>
            <div className={styles.numeroWrapper}>
                <div id="numero" className={styles.numero}>
                    <span>
                        <span>{slideUrl?.numero}</span>
                    </span>
                </div>
            </div>

            <div id="intro" className={styles.intro}>
                <span>
                    <span>{slideUrl?.intro}</span>
                </span>
            </div>

            <div className={styles.mainContent}>
                <div id="text" className={styles.text}>
                    <span>
                        <span>{slideUrl?.content}</span>
                    </span>
                </div>

                
                <div className={styles.img}>
                    <img src={`${slideUrl?.img}`} alt='boboz'/>
                </div>

            </div>

            <TransitionLink href={`${slideUrl?.linkNext}`}>
                <IconContext.Provider value={{ color: "white", size: "2vw" }}>
                    <div className={styles.nextLink}> 
                        <IoIosArrowForward/>
                    </div>
                </IconContext.Provider>
            </TransitionLink>

            <TransitionLink href={`${slideUrl?.linkPrev}`}>
                <IconContext.Provider value={{ color: "white", size: "2vw" }}>
                    <div className={styles.linkPrev}> 
                        <IoIosArrowBack/> 
                    </div>
                </IconContext.Provider>
            </TransitionLink>
            
            <div className={styles.footer}>
                <div className={styles.settimana}>
                    <p>{slideUrl?.settimana}</p>
                </div>

                <div className={styles.data}>
                    <p>{slideUrl?.data}</p>
                </div>

                <div className={styles.topic}>
                    <p>{slideUrl?.topic}</p>
                </div>
            </div>

        </div>
    );
}


const initialStates = () => {
    gsap.set("#numero", {
        yPercent: 100,
    })
    
    gsap.set("#intro", {
        yPercent: 100,
    })

    gsap.set("#text", {
        yPercent: 100,
    })
}

const uiAnimations = () => {
    const tl = gsap.timeline({
        delay: 0.5,
        
        defaults: {
            ease: 'power3.out',
            duration: 1,
            yPercent: 0,
            y: 0
        }
        
    })
    
    tl.to("#numero", {
        
    })
    
    .to("#intro", {
        
    }, ".6")

    tl.to("#text", {
        
    })
    
    return tl
}


const master = gsap.timeline()
master
.add(initialStates())
.add(uiAnimations())