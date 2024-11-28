"use client";
import styles from "./Index.module.scss";
import Buttom from "./Button/Index";
import NavigationContent from "./NavContent/Index";
import { useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";

const variants = {
    open: {
        width: "102.5vw",
        height: "100vh",
        top: "-2.3vw",
        right: "-5vw",
        transition: { duration: 1.2, ease: [0.75, 0, 0.24, 1] },
    },

    closed: {
        width: "3.8vw",
        height: "1.4vw",
        top: "0",
        right: "0",
        transition: { duration: 1, delay: 0.35, ease: [0.75, 0, 0.24, 1] },
    },
};

export default function NavigationMenu() {
    const [isActive, setIsActive] = useState(false);

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <div className={styles.header}>
            <motion.div
                className={styles.menu}
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial={"closed"}
            >
                <AnimatePresence>
                    {isActive && <NavigationContent closeMenu={closeMenu} />}
                </AnimatePresence>
            </motion.div>
            <Buttom isActive={isActive} setIsActive={setIsActive} />
        </div>
    );
}
