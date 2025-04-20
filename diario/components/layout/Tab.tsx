"use client";

import { ReactNode } from "react";

export type TabProps = {
    title: string;
    children: ReactNode;
};

export default function Tab({ children }: TabProps) {
    return <>{children}</>;
}
