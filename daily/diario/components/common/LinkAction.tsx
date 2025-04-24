import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export type IconProps = {
    element: IconType;
    solid?: boolean;
};

export type LinkActionProps = {
    icon?: IconProps;
    href?: string;
    children?: ReactNode;
    size?: "small" | "default" | "large";
    primary?: boolean;
    fit?: boolean;
    disabled?: boolean;
};

export default function LinkAction({ icon, href, children, size = "default", primary, fit, disabled }: LinkActionProps) {
    return (
        <Link
            href={href || "#"}
            className={`button ${primary ? "primary" : ""} ${fit ? "fit" : ""} ${size} ${disabled ? "disabled" : ""}`}
            style={{
                display: "inline-flex",
                justifyContent: "center"
            }}>
            {icon ?
                <icon.element
                    className={`icon ${icon.solid ? "solid" : ""} before`} style={{
                        fontSize: "0.8rem",
                        width: "calc(0.8rem + 0.075em)",
                        height: "100%"
                    }} /> : null}
            {children}
        </Link>
    );
}
