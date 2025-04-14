import ExternalLink, { ExternalLinkProps } from "./ExternalLink";


type ExternalLinksProps = {
    links: ExternalLinkProps[];
    alt?: boolean;
    size?: number;
};

export default function ExternalLinks({ links, size, alt }: ExternalLinksProps) {
    return (
        <ul className={`icons ${alt ? "alt" : ""}`} >
            {
                links.map(({ name, url, icon }: ExternalLinkProps, index) => (
                    <li key={index}>
                        <ExternalLink
                            name={name}
                            url={url}
                            alt={alt}
                            icon={icon}
                            size={size} />
                    </li>
                ))
            }
        </ul >
    );
}

