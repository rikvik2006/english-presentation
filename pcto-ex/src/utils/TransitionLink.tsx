"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import pageTransitionStyle from "../components/PageTransition/Page.module.scss"
import { animatePageIn, animatePageOut} from "../utils/PageAnimations"

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    // const body = document.querySelector("body");
    // const banner = document.getElementById("banner");

    // banner.classList.add(pageTransitionStyle.pageTransition);

    animatePageIn();

    await sleep(500);
    router.push(href);
    await sleep(500);
    
    animatePageOut();
    // banner.classList.remove(pageTransitionStyle.pageTransition);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};