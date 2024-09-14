"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import slideData from "../../../utils/slidesData";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import { TransitionLink } from "../../../utils/TransitionLink";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page({ params }) {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const initialStates = () => {
			gsap.set("#numero", {
				yPercent: 100,
			});

			gsap.set("#intro", {
				yPercent: 100,
			});

			gsap.set("#text", {
				yPercent: 100,
			});

			gsap.set("#img", {
				yPercent: 110,
			});

			gsap.set("#footer", {
				yPercent: 100,
			});
		};

		const uiAnimationsTop = () => {
			const tl = gsap.timeline({
				delay: 0.7,

				defaults: {
					ease: "power3.out",
					duration: 1,
					yPercent: 0,
					y: 0,
				},
			});

			tl.to("#numero", {}).to("#intro", {}, "");

			return tl;
		};

		const uiAnimationsMiddle = () => {
			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
					duration: 1,
					yPercent: 0,
					y: 0,
				},
			});

			tl.to("#text", {}).to("#img", {}, "");

			return tl;
		};

		const uiAnimationsBottom = () => {
			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
					duration: 1,
					yPercent: 0,
					y: 0,
				},
			});

			tl.to("#footer", {});

			return tl;
		};

		const master = gsap.timeline();
		master
			.add(initialStates())
			.add(uiAnimationsTop())
			.add(uiAnimationsMiddle())
			.add(uiAnimationsBottom());
	});

	const [slideUrl, setSlideUrl] = useState(null);

	useEffect(() => {
		for (const slide of slideData) {
			console.log(params.slide);
			if (slide.id == params.slideUrl) {
				setSlideUrl(slide);
				break;
			}
		}
	}, []);

	return (
		<div className={styles.pageContent}>
			<div className={styles.numeroWrapper}>
				<div id="numero" className={styles.numero}>
					<span>
						<span>{slideUrl?.numero}</span>
					</span>
				</div>
			</div>

			<div className={styles.introWrapper}>
				<div id="intro" className={styles.intro}>
					<span>
						<span>{slideUrl?.intro}</span>
					</span>
				</div>
			</div>

			<div className={styles.mainContentWrapper}>
				<div className={styles.mainContent}>
					<div className={styles.textWrapper}>
						<div id="text" className={styles.text}>
							<span>
								<span>{slideUrl?.content}</span>
							</span>
						</div>
					</div>

					<div id="img" className={styles.img}>
						<span>
							<span>
								{" "}
								<img src={`${slideUrl?.img}`} alt="boboz" />
							</span>
						</span>
					</div>
				</div>
			</div>

			<TransitionLink href={`${slideUrl?.linkNext}`}>
				<IconContext.Provider value={{ color: "white", size: "2vw" }}>
					<div className={styles.nextLink}>
						<IoIosArrowForward />
					</div>
				</IconContext.Provider>
			</TransitionLink>

			<TransitionLink href={`${slideUrl?.linkPrev}`}>
				<IconContext.Provider value={{ color: "white", size: "2vw" }}>
					<div className={styles.linkPrev}>
						<IoIosArrowBack />
					</div>
				</IconContext.Provider>
			</TransitionLink>

			<div className={styles.footerWrapper}>
				<div id="footer" className={styles.footer}>
					<div className={styles.settimana}>
						<p>{slideUrl?.settimana}</p>
					</div>

					<div className={styles.data}>
						<p>{slideUrl?.data}</p>
					</div>

					<div className={styles.topic}>
						<p>{slideUrl?.topic}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
