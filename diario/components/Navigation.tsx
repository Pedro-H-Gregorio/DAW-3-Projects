import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

type NavigationItem = {
    title: string
};

type NavigationProps = {
    items: NavigationItem[],
    active: number,
    onSelect: (index: number) => void
};

export default function Navigation({ items, active, onSelect }: NavigationProps) {
    return (
        <nav id="nav">
            <ul className="links">
                {items.map(({ title }, index) => (
                    <li key={index} className={`${index == active ? "active" : ""} `} onClick={(e) => {
                        e.preventDefault();
                        onSelect(index);
                    }}>
                        <a href="#">{title}</a>
                    </li>
                ))}
            </ul>

            <ul className="icons">
                <li>
                    <a href="#" style={
                        { backgroundColor: "#f00" }
                    } className="icon brands">
                        <FaTwitter size={27} />
                        <span className="label">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon brands">
                        <FaFacebookF size={27} />
                        <span className="label">Facebook</span>

                    </a>
                </li>
                <li>
                    <a href="#" className="icon brands">
                        <FaInstagram size={27} />
                        <span className="label">Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon brands">
                        <FaGithub size={27} />
                        <span className="label">GitHub</span>
                    </a>
                </li>
            </ul>
        </nav >
    );
}
