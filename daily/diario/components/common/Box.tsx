import { HTMLAttributes } from "react";

type BoxProps = HTMLAttributes<HTMLDivElement>;

export default function Box({ children, ...props }: BoxProps) {
    return (
        <div className="box" {...props}>{children}</div>
    );
}
