import { IconType } from "react-icons";

export type ExternalLinkProps = {
    name: string;
    url: string;
    icon: IconType;
    alt?: boolean;
    size?: number;
};

export default function ExternalLink(props: ExternalLinkProps) {
    return (
        <a href={props.url} className={`icon brands ${props.alt ? "alt" : ""}`}>
            <props.icon size={props.size} />
            <span className="label">{props.name}</span>
        </a>
    );
}
