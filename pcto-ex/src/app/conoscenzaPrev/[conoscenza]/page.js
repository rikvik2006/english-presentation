'use client'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { conoscenze } from '../../../utils/conoscenze.js'
import Link from 'next/link'

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
        <div className={styles.contentWraper}>
            <div className={styles.prova}>
                <div className={styles.numero}>
                    {conoscenza?.numero}
                </div>
            </div>

            <div className={styles.content}>
                    <div className={styles.title}> 
                        {conoscenza?.titolo}
                    </div>
            </div>

            <Link href={`${conoscenza?.link}`}>
                <div className={styles.nextLink}></div>
            </Link>
        </div>
    )
}