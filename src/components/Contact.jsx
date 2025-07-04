import "./Contact.css";

import Phone from "../assets/Phone-Icon.webp";
import Email from "../assets/Mail-Icon.png";
import LinkedIn from "../assets/LinkedIn-Icon.png";
import GitHub from "../assets/GitHub-Icon.png";

const contacts = [
    {
        image: Phone,
        title: "Phone",
        link: "tel:+19056091616",
        info: "+1 905 609 1616",
        alt: "Phone"
    },
    {
        image: Email,
        title: "Email",
        link: "mailto:roccodestefano19@icloud.com",
        info: "roccodestefano19@icloud.com",
        alt: "Email"
    }
    ,
    {
        image: LinkedIn,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/rocco-destefano-908a7932a/",
        info: "LinkedIn Profile",
        alt: "LinkedIn"
    },
    {
        image: GitHub,
        title: "GitHub",
        link: "https://github.com/RoccoD1616",
        info: "GitHub Profile",
        alt: "GitHub"
    }
];

function Contact() {
    return (
        <div className="contact-container" id="contact">
            <h2 className="title">Contact</h2>
            <h3 className="description">Let's Get In Touch</h3>

            <div className="contacts">
                {contacts.map((item, index) => (
                    <div className="layout">
                        <h3>{item.title}</h3>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={item.image} alt={item.alt}/>
                        </a>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <h4>{item.info}</h4>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact;