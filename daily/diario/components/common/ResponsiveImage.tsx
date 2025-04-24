"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ElementType, useEffect, useState } from "react";

import defaultImage from "@/public/images/default-image.jpg";

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
    src,
    style,
    ...rest
}: ResponsiveImageProps) {
    const [imgSrc, setImgSrc] = useState(src || defaultImage);
    const [aspectRatio, setAspectRatio] = useState<string>();
    const alignmentClass = `image ${alignment} ${wrapper?.props?.className}`;

    useEffect(() => setImgSrc(src), [src]);

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
                src={imgSrc}
                style={{
                    objectFit: style?.objectFit || "cover",
                    ...style,
                }}
                onError={() => {
                    if (imgSrc !== defaultImage)
                        setImgSrc(defaultImage);
                }}
                onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    setAspectRatio(`${img.naturalWidth}/${img.naturalHeight}`);
                }}
                {...rest}
                fill
            />
        </wrapper.component>
    );
}
