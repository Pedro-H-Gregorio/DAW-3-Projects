"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ElementType, useState } from "react";

type WrapperProps = {
    component: ElementType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    const [aspectRatio, setAspectRatio] = useState<string>();
    const alignmentClass = `image ${alignment} ${wrapper?.props?.className}`;

    return (
        <wrapper.component
            style={{
                aspectRatio,
                ...wrapper?.props?.style,
            }}
            className={alignmentClass}
            {...wrapper?.props}
        >
            <NextImage
                {...rest}
                style={{
                    objectFit: style?.objectFit || "cover",
                    ...style,
                }}
                onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                    setAspectRatio(`${naturalWidth}/${naturalHeight}`);
                }}
                fill
            />
        </wrapper.component>
    );
}
