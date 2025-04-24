// "use client";

// import { usePathname } from "next/navigation";
// import { NavigationItem } from "./Navigation";
// import Link from "next/link";

// type NavPanelProps = {
//     items: NavigationItem[];
// };

// export default function NavPanel({ items }: NavPanelProps) {
//     const pathname = usePathname();
//     const isActived = (route: string) => pathname === route || (route !== "/" && pathname.startsWith(route));
//     return (
//         <div id="navPanel">
//             <nav>
//                 <ul className="links">
//                     {
//                         items.map(({ route, title, hidden }, index) => (
//                             hidden && !isActived(route) ? null :
//                                 <li key={index} className={`${isActived(route) ? "active" : ""} `}>
//                                     <Link href={route}>{title}</Link>
//                                 </li>
//                         ))
//                     }
//                 </ul>

//             </nav>
//             <a href="#navPanel" className="close"></a>
//         </div>
//     );
// }





"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavigationItem } from "./Navigation";
import Link from "next/link";

type NavPanelProps = {
    items: NavigationItem[];
};

type NavPanelConfig = {
    delay: number;
    hideOnClick: boolean;
    hideOnSwipe: boolean;
    hideOnEscape: boolean;
    resetScroll: boolean;
    resetForms: boolean;
    side: "right" | "left" | "bottom" | "top";
};

const DEFAULT_CONFIG: NavPanelConfig = {
    delay: 500,
    side: "right",
    hideOnClick: true,
    hideOnSwipe: true,
    hideOnEscape: true,
    resetScroll: true,
    resetForms: true,
};

export default function NavPanel({ items }: NavPanelProps) {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const navPanelToggleRef = useRef<HTMLElement>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const { delay, side, hideOnClick, hideOnSwipe, hideOnEscape, resetScroll, resetForms } = DEFAULT_CONFIG;

    const isActived = (route: string) =>
        pathname === route || (route !== "/" && pathname.startsWith(route));

    const hidePanel = () => {
        if (!panelRef.current) return;
        document.body.classList.remove("is-navPanel-visible");

        setTimeout(() => {
            if (resetScroll) panelRef.current!.scrollTop = 0;
            if (resetForms) {
                const forms = panelRef.current!.querySelectorAll("form");
                forms.forEach((form) => form.reset());
            }
        }, delay);
    };

    useEffect(() => {
        const el = document.getElementById("navPanelToggle");
        if (el) {
            navPanelToggleRef.current = el;
            navPanelToggleRef.current.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.body.classList.toggle("is-navPanel-visible");
            }
        }
    }, []);

    // Eventos para esconder o painel
    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            if (!el.contains(e.target as Node)) hidePanel();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (hideOnEscape && e.key === "Escape") {
                hidePanel();
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = { x: e.touches[0].pageX, y: e.touches[0].pageY };
        };

        const handleTouchMove = (e: TouchEvent) => {
            const start = touchStart.current;
            if (!start) return;

            const dx = start.x - e.touches[0].pageX;
            const dy = start.y - e.touches[0].pageY;
            const boundary = 20;
            const delta = 50;

            let shouldClose = false;
            if (hideOnSwipe) {
                if (side === "right" && Math.abs(dy) < boundary && dx < -delta) shouldClose = true;
                else if (side === "left" && Math.abs(dy) < boundary && dx > delta) shouldClose = true;
                else if (side === "top" && Math.abs(dx) < boundary && dy > delta) shouldClose = true;
                else if (side === "bottom" && Math.abs(dx) < boundary && dy < -delta) shouldClose = true;
            }

            if (shouldClose) {
                hidePanel();
                touchStart.current = null;
                e.preventDefault();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchend", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        el.addEventListener("touchstart", handleTouchStart);
        el.addEventListener("touchmove", handleTouchMove);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchend", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchmove", handleTouchMove);
        };
    }, [panelRef]);

    const touchStart = useRef<{ x: number; y: number } | null>(null);

    const handleLinkClick = (href: string, target?: string) => (e: React.MouseEvent) => {
        if (!href || href === "#" || href === "#navPanel") return;

        e.preventDefault();
        e.stopPropagation();
        hidePanel();
        setTimeout(() => {
            if (target === "_blank") window.open(href);
            else window.location.href = href;
        }, delay + 10);
    };

    return (
        <>
            <div
                id="navPanel"
                ref={panelRef}
                className={isVisible ? "is-navPanel-visible" : ""}
                style={{ msOverflowStyle: "-ms-autohiding-scrollbar", WebkitOverflowScrolling: "touch" }}
            >
                <nav>
                    <ul className="links">
                        {items.map(({ route, title, hidden }, index) =>
                            hidden && !isActived(route) ? null : (
                                <li key={index} className={isActived(route) ? "active" : ""}>
                                    <a
                                        href={route}
                                        onClick={handleLinkClick(route)}
                                        style={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
                                    >
                                        {title}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
                <a href="#navPanel" className="close" onClick={hidePanel}></a>
            </div>

            <a
                href="#navPanel"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsVisible((prev) => !prev);
                }}
            >
                Toggle NavPanel
            </a>
        </>
    );
}
