import { ReactNode, useState } from "react";

type CheckboxProps = {
    id: string;
    name?: string;
    checked?: boolean;
    children: ReactNode;
    onChangeValue?: (value: boolean) => void;
};

export default function Checkbox({ id, name, children, onChangeValue, ...rest }: CheckboxProps) {
    const [checked, setChecked] = useState(rest.checked);
    const handleChange = (value: boolean) => {
        setChecked(value);
        onChangeValue?.(value);
    };

    return (
        <>
            <input type="checkbox" id={id} name={name} checked={checked} onChange={(e) => handleChange(e.target.checked)} />
            <label htmlFor={id}>{children}</label>
        </>
    );
}
