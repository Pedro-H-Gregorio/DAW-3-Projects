import { ChangeEventHandler, ReactNode } from "react";

export type RadioGroupItemProps = {
    id: string;
    name?: string;
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    children: ReactNode;
};

export default function RadioGroupItem({ id, name, checked, onChange, children }: RadioGroupItemProps) {
    return (
        <>
            <input type="radio" id={id} name={name} checked={checked} onChange={onChange} />
            <label htmlFor={id}>{children}</label>
        </>
    );
}
