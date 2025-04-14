import { ReactNode } from "react";

type BoxProps = {
    children: ReactNode
};

export default function Box({ children }: BoxProps) {
    return (
        <div className="box">{children}</div>
    );
}
