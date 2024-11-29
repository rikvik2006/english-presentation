"use client";

import Conclusion from "../../../components/Conclusion/Conclusion.jsx";
import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return <Conclusion />;
}
