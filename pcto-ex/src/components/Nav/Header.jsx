'use client'
import styles from './Index.module.scss'
import Buttom from './Button/Index'
import { useState } from 'react'

export default function Home() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.header}>
        <Buttom isActive={isActive} setIsActive={setIsActive}/>
    </div>
  )
}