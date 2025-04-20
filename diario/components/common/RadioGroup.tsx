import { Children, cloneElement, ElementType, isValidElement, ReactElement, useState } from "react";
import { RadioGroupItemProps } from "./RadioGroupItem";

type WrapperProps = {
    component: ElementType;
    props?: Record<string, any>;
};

type RadioGroupProps = {
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    name: string;
    wrapper: WrapperProps;
    children: ReactElement<RadioGroupItemProps> | ReactElement<RadioGroupItemProps>[];
};

export default function RadioGroup({ wrapper, name, defaultValue, onValueChange, ...rest }: RadioGroupProps) {
    const children = Children.toArray(rest.children);
    const [value, setValue] = useState(defaultValue);

    const handleChange = (value: string) => {
        setValue(value);
        onValueChange?.(value);
    };

    return (
        <>
            {
                children.map((child, index) => {
                    return isValidElement<RadioGroupItemProps>(child) ? (
                        <wrapper.component key={index} {...wrapper.props}>
                            {cloneElement(child, {
                                checked: child.props.id === value,
                                onChange: () => handleChange(child.props.id),
                                name
                            })}
                        </wrapper.component>
                    ) : null;
                })
            }
        </>
    );
}
