import { Children, cloneElement, isValidElement, ReactElement } from "react";
import { ActionProps } from "./Action";

type ActionsProps = {
    children: ReactElement<ActionProps> | ReactElement<ActionProps>[];
    special?: boolean;
    stacked?: boolean;
    size?: "small" | "default" | "large";
    fit?: boolean;
};

export default function Actions(props: ActionsProps) {
    const children = Children.toArray(props.children);

    return (
        <ul className={`actions ${props.special ? "special" : ""} ${props.stacked ? "stacked" : ""} ${props.size} ${props.fit ? "fit" : ""}`}>
            {
                children.map((child, index) => {
                    return isValidElement<ActionProps>(child) ? (
                        <li key={index}>
                            {cloneElement(child, {
                                size: child.props.size || props.size,
                                fit: child.props.fit || props.fit
                            })}
                        </li>
                    ) : null;
                })
            }
        </ul>
    );
}
