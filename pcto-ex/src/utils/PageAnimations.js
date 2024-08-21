import { gsap } from "gsap";
import pageTransitionStyle from "../components/PageTransition/Page.module.scss"

export const animatePageIn = () => {
    const banner = document.getElementById("banner")

    if (banner) {
        const tl = gsap.timeline()
        banner.classList.add(pageTransitionStyle.pageTransition)

        tl.set([banner], {
            yPercent: 100,
        }).to([banner], {
            yPercent: 0,
        })

        // tl.to([banner], )
    }
}
export const animatePageOut = () => {
    const banner = document.getElementById("banner")
    
    if (banner) {
        const tl = gsap.timeline()
        
        tl.set([banner], {
            yPercent: 0,
        }).to([banner], {
            yPercent: -100,
        })
    }
}
// 