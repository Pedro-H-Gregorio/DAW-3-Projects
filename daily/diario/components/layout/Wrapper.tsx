"use client";

import { useScrollEffect } from "@/hooks/useScrollEffect";
import { ReactNode, useEffect, useRef, useState } from "react";

type WrapperProps = {
    children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
    const [alt, setAlt] = useState<boolean>();
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = document.getElementById("main");
        if (el) mainRef.current = el;
    }, []);

    useScrollEffect(mainRef, ({ hasPassedTop }) => {
        setAlt(hasPassedTop);
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            document.body.classList.remove('is-preload');
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="wrapper">
            {children}
            <div className="bg fixed"></div>
            <a href="#navPanel" id="navPanelToggle" className={alt ? "alt" : ""}>Menu</a>
        </div>
    );
}
