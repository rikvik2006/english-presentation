'use client'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import slideData  from '../../../utils/slidesData'

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


    return <div className={styles.prova}>{slideUrl?.numero}</div>
       
    
}