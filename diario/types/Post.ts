import { StaticImageData } from "next/image";

export type Post = {
    id: string;
    title: string;
    date: string;
    summary: string;
    // imageSrc?: StaticImageData;
};
