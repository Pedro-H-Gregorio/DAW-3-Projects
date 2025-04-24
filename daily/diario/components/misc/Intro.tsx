"use client";

import { useScrollEffect } from "@/hooks/useScrollEffect";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Intro() {
    const pathname = usePathname();
    const [showIntro, setShowIntro] = useState(false);
    const introRef = useRef<HTMLDivElement>(null);

    useScrollEffect(introRef, ({ progress }) =>
        setShowIntro(progress <= 0.75));

    useEffect(() => {
        setShowIntro(pathname === "/");
    }, [pathname]);


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
