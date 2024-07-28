'use client'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { conoscenze } from '../../utils/conoscenze.js'
import { notFound } from 'next/navigation'

export default function Page({ params }) {
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
        <>
            <div className={styles.title}>
                {conoscenza?.numero}
            </div>
        </>
    )
}