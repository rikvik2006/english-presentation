import { gsap } from "gsap";

export const animatePageIn = () => {
    const banner = document.getElementById("banner")

    if (banner) {
        const tl = gsap.timeline()

        tl.set([banner], {
            yPercent: 0,
        }).to([banner], {
            yPercent: 100,
        })  
    }
}