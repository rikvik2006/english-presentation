"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectTo({ to }: { to: string }) {
    const router = useRouter();

    useEffect(() => {
        router.push(to);
    }, [router, to]);

    return null;
}
