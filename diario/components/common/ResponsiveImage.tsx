import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ElementType } from "react";

type ResponsiveImageProps = NextImageProps & {
    wrapper?: ElementType;
    alignment?: "fit" | "left" | "right";
};

export default function ResponsiveImage({
    wrapper: Wrapper = "div",
    alignment = "fit",
    style,
    ...rest
}: ResponsiveImageProps) {
    const alignmentClass = `image ${alignment}`;

    return (
        <Wrapper className={alignmentClass}>
            <NextImage
                {...rest}
                style={{
                    height: "auto",
                    ...style,
                }}
            />
        </Wrapper>
    );
}
