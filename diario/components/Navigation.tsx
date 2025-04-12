import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navigation() {
    return (
        <nav id="nav">
            <ul className="links">
                <li className="active"><a href="index.html">This is Massively</a></li>
                <li><a href="generic.html">Generic Page</a></li>
                <li><a href="elements.html">Elements Reference</a></li>
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
        </nav>
    );
}
