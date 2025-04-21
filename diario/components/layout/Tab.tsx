"use client";

import { ReactNode } from "react";

export type TabProps = {
    title: string;
    children: ReactNode;
    hidden?: boolean;
};

export default function Tab({ children }: TabProps) {
    return <>{children}</>;
}
