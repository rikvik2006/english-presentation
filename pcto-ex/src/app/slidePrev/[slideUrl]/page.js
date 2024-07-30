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


    return (
        <div className={styles.pageContent}>
            <div className={styles.numero}>
                {slideUrl?.numero}
            </div>

            <div className={styles.intro}>
                {slideUrl?.intro}

            </div>

            <div className={styles.mainContent}>
                <div className={styles.text}>

                </div>

                <div className={styles.img}>

                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.settimana}>

                </div>

                <div className={styles.data}>

                </div>


                <div className={styles.topic}>

                </div>

            </div>
        </div>
    );
}