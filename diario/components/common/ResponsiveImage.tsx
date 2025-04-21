import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ElementType } from "react";

type WrapperProps = {
    component: ElementType;
    props?: Record<string, any>;
};


type ResponsiveImageProps = NextImageProps & {
    wrapper?: WrapperProps;
    alignment?: "fit" | "left" | "right" | "main";
};

export default function ResponsiveImage({
    wrapper = { component: "div" },
    alignment = "fit",
    style,
    ...rest
}: ResponsiveImageProps) {
    const alignmentClass = `image ${alignment} ${wrapper?.props?.className}`;

    return (
        <wrapper.component className={alignmentClass} {...wrapper?.props}>
            <NextImage
                {...rest}
                style={{
                    height: "auto",
                    ...style,
                }}
            />
        </wrapper.component >
    );
}
