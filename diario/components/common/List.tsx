import { ReactNode } from "react";

type ListProps = {
    type: "ordened" | "unordened";
    alt?: boolean;
    children?: ReactNode;
};

export default function List({ type, alt, children }: ListProps) {
    const Wrapper = type === "ordened" ? "ol" : "ul";

    return (
        <Wrapper className={`${alt ? "alt" : ""}`}>{children}</Wrapper>
    );
}
