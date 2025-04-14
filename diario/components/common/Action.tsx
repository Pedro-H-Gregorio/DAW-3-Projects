import { ReactNode } from "react";

export type ActionProps = {
    href?: string,
    children?: ReactNode,
    size?: "small" | "default" | "large",
    primary?: boolean,
    fit?: boolean,
    disabled?: boolean
};

export default function Action({ href = "#", children, size = "default", primary, fit, disabled }: ActionProps) {
    return (
        <a href={href} className={`button ${primary ? "primary" : ""} ${fit ? "fit" : ""} ${size} ${disabled ? "disabled" : ""}`}>
            {children}
        </ a>
    );
}
