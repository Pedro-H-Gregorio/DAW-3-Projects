import { ReactNode } from "react";

type TableProps = {
    children?: ReactNode;
    alt?: boolean;
};

export default function Table({ children = [], alt }: TableProps) {
    return (
        <div className="table-wrapper">
            <table className={`${alt ? "alt" : ""}`}>
                {children}
            </table>
        </div>
    );
}
