'use client'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { slide } from '../../../utils/slidesData.js'

export default function Page({ params }) {
    const [ slideUrl, setSlideUrl] = useState(null)

    useEffect(() => {
        for (const slideData of slide) {
            if (slideData.id == params.slideUrl) {
                setSlideUrl(slideData)

                break
            } 
        }
    }, [])


    return <div>{slideUrl?.numero}</div>
       
    
}