import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import ExternalLinks from "../common/ExternalLinks";

const contact = {
    address: {
        street: "1234 Somewhere Road #87257",
        city: "Nashville",
        state: "TN",
        cep: "00000-0000"
    },
    phone: "(000) 000-0000",
    email: "info@untitled.tld",
    social: [
        {
            name: "Twitter",
            url: "#",
            icon: FaTwitter
        },
        {
            name: "Facebook",
            url: "#",
            icon: FaFacebookF
        },
        {
            name: "Instagram",
            url: "#",
            icon: FaInstagram
        },
        {
            name: "Github",
            url: "#",
            icon: FaGithub
        },
    ]
}


export default function Contact() {
    return (
        <section className="split contact">
            <section className="alt">
                <h3>Address</h3>
                <p>
                    {contact.address.street}<br />
                    {contact.address.city}, {contact.address.state} {contact.address.cep}
                </p>
            </section>
            <section>
                <h3>Phone</h3>
                <p><a href="#">{contact.phone}</a></p>
            </section>
            <section>
                <h3>Email</h3>
                <p><a href="#">{contact.email}</a></p>
            </section>
            <section>
                <h3>Social</h3>
                <ExternalLinks links={contact.social} alt={true} />
            </section>
        </section>

    );
}
