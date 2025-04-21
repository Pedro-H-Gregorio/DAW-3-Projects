import { ExternalLinkProps } from "../common/ExternalLink";
import ExternalLinks from "../common/ExternalLinks";

type NavigationItem = {
    title: string;
    hidden?: boolean;
};

type NavigationProps = {
    items: NavigationItem[];
    links?: ExternalLinkProps[];
    active: number;
    onSelect: (index: number) => void;
};


export default function Navigation({ items, links, active, onSelect }: NavigationProps) {
    return (
        <nav id="nav">
            <ul className="links">
                {
                    items.map(({ title, hidden }, index) => (
                        hidden ? null :
                            <li key={index} className={`${index == active ? "active" : ""} `} onClick={(e) => {
                                e.preventDefault();
                                onSelect(index);
                            }}>
                                <a href="#">{title}</a>
                            </li>
                    ))
                }
            </ul>
            {
                links ? <ExternalLinks links={links} size={27} /> : null
            }
        </nav >
    );
}
