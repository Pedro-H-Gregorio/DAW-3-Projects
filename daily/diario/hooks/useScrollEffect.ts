"use client";

import { useEffect, useRef, useCallback } from "react";

export type ScrollInfo = {
    /** Progresso de 0 (elemento totalmente fora da viewport abaixo) a 1 (totalmente fora acima) */
    progress: number;
    /** true quando o elemento já subiu completamente para fora da viewport */
    isAbove: boolean;
    /** true quando o elemento ainda não entrou na viewport (está abaixo) */
    isBelow: boolean;
    /** true quando o topo do elemento já passou do topo da viewport */
    hasPassedTop: boolean;
    /** true quando a parte inferior do elemento ainda não passou do fundo da viewport */
    isBeforeBottom: boolean;
};

export function useScrollEffect(
    ref: React.RefObject<HTMLElement | null>,
    onScrollChange: (info: ScrollInfo) => void
) {
    const rafId = useRef<number | null>(null);

    const update = useCallback(() => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const isAbove = rect.bottom <= 0;
        const isBelow = rect.top >= vh;
        const hasPassedTop = rect.top < 0;
        const isBeforeBottom = rect.bottom > vh;
        const visiblePortion = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);

        onScrollChange({ progress: visiblePortion, isAbove, isBelow, hasPassedTop, isBeforeBottom });
    }, [onScrollChange, ref]);

    const handleScroll = useCallback(() => {
        if (rafId.current !== null) return;
        rafId.current = requestAnimationFrame(() => {
            update();
            rafId.current = null;
        });
    }, [update]);

    useEffect(() => {
        update();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId.current !== null) cancelAnimationFrame(rafId.current);
        };
    }, [handleScroll, update]);
}
