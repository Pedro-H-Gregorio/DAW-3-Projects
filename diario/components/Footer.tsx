import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import Form from "./Form";

export default function Footer() {

    return (
        <footer id="footer">
            <section>
                <Form />
            </section>
            <section className="split contact">
                <section className="alt">
                    <h3>Address</h3>
                    <p>
                        1234 Somewhere Road #87257<br />
                        Nashville, TN 00000-0000
                    </p>
                </section>
                <section>
                    <h3>Phone</h3>
                    <p><a href="#">(000) 000-0000</a></p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p><a href="#">info@untitled.tld</a></p>
                </section>
                <section>
                    <h3>Social</h3>
                    <ul className="icons alt">
                        <li>
                            <a href="#" className="icon brands alt fa-twitter">
                                <FaTwitter />
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon brands alt fa-facebook-f">
                                <FaFacebookF />
                                <span className="label">Facebook</span></a>
                        </li>
                        <li>
                            <a href="#" className="icon brands alt fa-instagram">
                                <FaInstagram />
                                <span className="label">Instagram</span></a>
                        </li>
                        <li>
                            <a href="#" className="icon brands alt fa-github">
                                <FaGithub />
                                <span className="label">GitHub</span></a>
                        </li>
                    </ul>
                </section>
            </section>
        </footer>
    );
}
