'use client'
import styles from './Index.module.scss'
import { links } from '../../../utils/data.js'

export default function Index() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map( (link, i) => {
                        return <div key={i}>
                            <a href={link.href}>{link.title}</a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}