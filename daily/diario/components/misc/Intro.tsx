"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Intro() {
    const pathname = usePathname();
    const [showIntro, setShowIntro] = useState(false);
    const introRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);

    const checkScroll = useCallback(() => {
        if (!introRef.current) return;

        const introHeight = introRef.current.offsetHeight;
        const triggerPoint = introHeight * 0.5;
        const shouldShow = window.scrollY < triggerPoint;

        setShowIntro(shouldShow);
    }, []);

    const handleScroll = useCallback(() => {
        if (rafId.current) return;

        rafId.current = requestAnimationFrame(() => {
            checkScroll();
            rafId.current = null;
        });
    }, [checkScroll]);

    useEffect(() => {
        setShowIntro(pathname === "/");
    }, [pathname]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [handleScroll]);


    return (
        <div
            id="intro"
            className={showIntro ? "" : "hidden"}
            ref={introRef}
        >
            <h1>Dialy</h1>
            <p>
                Este é um site para você depositar suas lembranças <br /> com fotos das suas
                melhores histórias
            </p>
            <ul className="actions">
                <li>
                    <a href="#header" className="button icon solid solo scrolly">
                        <FaArrowDown className="icon solid solo scrolly before" style={{
                            width: "26px",
                            left: "50%",
                            transform: "translateX(-50%)"
                        }} />
                        Continue
                    </a>
                </li>
            </ul>
        </div>
    );
}
