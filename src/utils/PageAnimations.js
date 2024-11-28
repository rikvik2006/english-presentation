import { gsap } from "gsap";
import pageTransitionStyle from "../components/PageTransition/Page.module.scss"

export const animatePage = () => {
    const banner = document.getElementById("banner")

    if (banner) {
        const tl = gsap.timeline()
        banner.classList.add(pageTransitionStyle.pageTransition)

        tl.set([banner], {
            yPercent: 100
        }).to([banner], {
            yPercent: 0,
            duration: 1.5,
            ease: "power4.inOut",
        }).to([banner], {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut"
        })
    }
}