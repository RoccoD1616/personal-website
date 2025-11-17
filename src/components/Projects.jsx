import "./Projects.css";

import PersonalWebsite from "../assets/Personal-Website.png";
import CompsaApp from "../assets/COMPSA-App.jpg";
import RoomBooking from "../assets/Room-Booking.png";
import CompsaCCR from "../assets/COMPSA-CCR.png";
import NumNum from "../assets/NumNum.jpeg";
import StudentBT from "../assets/Student-BT.jpg";
import IsabelBalderClub from "../assets/Isabel-Balder-Club.png";
import Britnell from "../assets/Britnell-Logo.png";

const projects = [
    {
        title: "Personal Website",
        date: "07/2025",
        image: PersonalWebsite,
        description: "Created my own personal website where others can learn about me, my experiences, and the skills that I've developed.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://github.com/RoccoD1616/personal-website",
        alt: "Rocco DeStefano's Personal Website"
    },
    {
        title: "COMPSA App",
        date: "In Progress",
        image: CompsaApp,
        description: "The official mobile application for Queen's COMPSA  that allows students to access club information, events, and resources.",
        technologies: ["React Native", "TypeScript"],
        link: "https://github.com/compsa-tech-team/COMPSA-App/tree/main",
        alt: "COMPSA App"
    },
    {
        title: "Computing Clubs Roundtable",
        date: "In Progress",
        image: CompsaCCR,
        description: "A centralized page for COMPSA that lets all major computing clubs share job openings, event updates, and bi-weekly reports in one unified hub.",
        technologies: ["NextJS", "JavaScript", "Tailwind", "React"],
        link: "javascript:void(0)",
        alt: "Computing Clubs Roundtable"
    },
    {
        title: "Room Booking",
        date: "08/2025",
        image: RoomBooking,
        description: "A room booking platform that allows CS students at Queen's to reserve study rooms through COMPSA's website.",
        technologies: ["NextJS", "JavaScript", "TypeScript", "React", "Resend"],
        link: "https://compsa.ca/room-booking",
        alt: "Room Booking"
    },
    {
        title: "NumNum",
        date: "02/2025",
        image: NumNum,
        description: "An AI powered dining app that recommends restaurant choices to users based on their preferences, such as location, dietary needs, cuisine, price range and much more.",
        technologies: ["Python", "Flask"],
        link: "https://devpost.com/software/numnum",
        alt: "NumNum"
    },
    {
        title: "Student Buy & Trade",
        date: "04/2025",
        image: StudentBT,
        description: "Worked with my ESSDEV team to develop a platform where students can easily buy, sell, trade, and donate school items.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://github.com/Queens-ESSDEV/Student-BST",
        alt: "Student Buy & Trade"
    },
    {
        title: "Isabel Balder Club Website",
        date: "04/2025",
        image: IsabelBalderClub,
        description: "Worked with my QWEB team to develop a website for local theatre club at Queen's University.",
        technologies: ["HTML", "CSS", "TypeScript", "React"],
        link: "https://github.com/queens-web-development-club/ws25t01-isabeltheatreclub",
        alt: "Isabel Balder Club"
    },
    {
        title: "Warehouse Optimizer",
        date: "05/2025",
        image: Britnell,
        description: "Developed a warehouse inventory optimization system using a frequency-based algorithm to analyze order quantities and improve item placement.",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL ", "React"],
        link: "javascript:void(0)",
        alt: "Warehouse Optimizer"
    },
    {
        title: "NSS Generator",
        date: "06/2025",
        image: Britnell,
        description: "Built an automated system to generate sales metrics and monitor warehouse performance using APIs.",
        technologies: ["Python", "SQL"],
        link: "javascript:void(0)",
        alt: "NSS Generator"
    },
    {
        title: "NSS Report Automator",
        date: "07/2025",
        image: Britnell,
        description: "Developed an automated system that calculates daily sales and sends summary reports via email using APIs.",
        technologies: ["Python", "SQL"],
        link: "javascript:void(0)",
        alt: "NSS Report Automator"
    },
    {
        title: "Backup Delete Automator",
        date: "08/2025",
        image: Britnell,
        description: "Implemented a storage management system that optimizes server capacity by automatically removing outdated backups.",
        technologies: ["Python"],
        link: "javascript:void(0)",
        alt: "Backup Delete Automator"
    },
    {
        title: "Pending & Partial Automator",
        date: "08/2025",
        image: Britnell,
        description: "Built an automated system that emails customers regarding their pending orders and ETAs and logs all order data into internal company records.",
        technologies: ["Python", "SQL"],
        link: "javascript:void(0)",
        alt: "Backup Delete Automator"
    }
  ];

function Projects() {
    return (
        <div className="projects-container" id="projects">
            <h2 className="title">Projects</h2>
            <h3 className="description">Explore My Work</h3>

            <div className="projects">
                {projects.map((item, index) => (
                    <div className="tiles">
                        <h4>{item.date}</h4>
                        <h3>{item.title}</h3>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={item.image} alt={item.alt}/>
                        </a>
                        <h4 className="tile-description">{item.description}</h4>
                        <div className="tile-list">
                            {item.technologies.map((tech, i) => (
                                <h4 key={i}>{tech}</h4>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;