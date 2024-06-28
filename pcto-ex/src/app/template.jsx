"use client"
//import styles from './template.module.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

export default function Template({ children }) {
    //const tl = gsap.timeline()
    
    //useGSAP(() => {
        //tl.set("#banner", {
            //yPercent: -100
        //}).to("#banner", {
            //yPercent: 0,
            //ease: "power4.inOut",
            //duration: 1.5
        //})
    //}, [])

    return (
        <div>
           <div id='banner' ></div>
            {children}
        </div>
    )
}