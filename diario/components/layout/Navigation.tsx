import { ExternalLinkProps } from "../common/ExternalLink";
import ExternalLinks from "../common/ExternalLinks";

type NavigationItem = {
    title: string;
};

type NavigationProps = {
    items: NavigationItem[];
    links: ExternalLinkProps[];
    active: number;
    onSelect: (index: number) => void;
};


export default function Navigation({ items, links, active, onSelect }: NavigationProps) {
    return (
        <nav id="nav">
            <ul className="links">
                {
                    items.map(({ title }, index) => (
                        <li key={index} className={`${index == active ? "active" : ""} `} onClick={(e) => {
                            e.preventDefault();
                            onSelect(index);
                        }}>
                            <a href="#">{title}</a>
                        </li>
                    ))
                }
            </ul>
            <ExternalLinks links={links} size={27} />
        </nav >
    );
}
