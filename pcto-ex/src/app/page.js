'use client'

import Conclusion from "@/components/Conclusion/Conclusion";
import { useEffect } from "react";

export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div>
      <Conclusion/>
    </div>
  );
}
