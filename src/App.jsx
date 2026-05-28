import React from "react";
import "./index.css";

import Headshot from "../src/assets/Rocco-DeStefano.png";
import RBC_Logo from "../src/assets/dark/RBC-Logo.png";
import Britnell_Logo from "../src/assets/dark/Britnell-Logo.png";
import Queens_Logo from "../src/assets/dark/Queens-Logo.png";

import COMPSA_App from "../src/assets/dark/COMPSA-APP.jpg";
import COMPSA_LLM from "../src/assets/dark/COMPSA-LLM.png";
import VoiceCare_AI from "../src/assets/dark/VoiceCare-AI.jpeg";
import COMPSA_CCR from "../src/assets/dark/COMPSA-CCR.png";
import Room_Booking from "../src/assets/dark/Room-Booking.png";
import Personal_Website from "../src/assets/dark/Personal-Website.png";
import Britnell_Logo_2 from "../src/assets/dark/Britnell-Logo-2.png";
import Isabel_Balder_Club from "../src/assets/dark/Isabel-Balder-Club.png";
import NumNum from "../src/assets/dark/NumNum.jpeg";

const projects = [
  {
    title: "COMPSA App",
    date: "04/2026",
    description:
      "The official mobile application for Queen's COMPSA that allows students to access club information, events, and resources.",
    technologies: ["React Native", "TypeScript", "Supabase"],
    link: "https://github.com/compsa-tech-team/COMPSA-App/tree/main",
    image: COMPSA_App,
  },
  {
    title: "COMPSA Assistant",
    date: "02/2026",
    description:
      "An AI-powered assistant for the Queen’s COMPSA website that centralizes computing-related academic information and answers student questions in one place.",
    technologies: ["NextJS", "JavaScript", "TypeScript", "React", "Resend"],
    link: "https://compsa.ca/llm",
    image: COMPSA_LLM,
  },
  {
    title: "VoiceCare AI",
    date: "02/2026",
    description:
      "A speech-driven Chrome extension that simplifies web navigation through conversational AI and guided on-screen assistance.",
    technologies: ["HTML", "CSS", "JavaScript", "Gemini API", "Gradium"],
    link: "https://github.com/NigelGroen5/voicecare-AI",
    image: VoiceCare_AI,
  },
  {
    title: "Computing Clubs Roundtable",
    date: "12/2025",
    description:
      "A centralized page for COMPSA that lets all major computing clubs share job openings, event updates, and bi-weekly reports in one unified hub.",
    technologies: ["NextJS", "JavaScript", "Tailwind", "React"],
    link: "https://compsa.ca/ccr",
    image: COMPSA_CCR,
  },
  {
    title: "Room Booking",
    date: "08/2025",
    description:
      "A room booking platform that allows CS students at Queen's to reserve study rooms through COMPSA's website.",
    technologies: ["NextJS", "JavaScript", "TypeScript", "React", "Resend"],
    link: "https://compsa.ca/room-booking",
    image: Room_Booking,
  },
  {
    title: "Personal Website",
    date: "08/2025",
    description:
      "Created my own personal website where others can learn about me, my experiences, and the skills that I've developed.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/RoccoD1616/personal-website",
    image: Personal_Website,
  },
  {
    title: "Pending & Partial Automator",
    date: "08/2025",
    description:
      "Built an automated system that emails customers regarding their pending orders and ETAs and logs all order data into internal company records.",
    technologies: ["Python", "MySQL"],
    image: Britnell_Logo_2,
  },
  {
    title: "Backup Delete Automator",
    date: "08/2025",
    description:
      "Implemented a storage management system that optimizes server capacity by automatically removing outdated backups.",
    technologies: ["Python"],
    image: Britnell_Logo_2,
  },
  {
    title: "NSS Report Automator",
    date: "07/2025",
    description:
      "Developed an automated system that calculates daily sales and sends summary reports via email using APIs.",
    technologies: ["Python", "MySQL"],
    image: Britnell_Logo_2,
  },
  {
    title: "NSS Generator",
    date: "06/2025",
    description:
      "Built an automated system to generate sales metrics and monitor warehouse performance using APIs.",
    technologies: ["Python", "MySQL"],
    image: Britnell_Logo_2,
  },
  {
    title: "Warehouse Optimizer",
    date: "05/2025",
    description:
      "Developed a warehouse inventory optimization system using a frequency-based algorithm to analyze order quantities and improve item placement.",
    technologies: ["Python", "MySQL", "React", "Flask", "REST APIs"],
    image: Britnell_Logo_2,
  },
  {
    title: "Isabel Balder Club Website",
    date: "04/2025",
    description:
      "Developed a website for a Queen’s University theatre club, providing students with a centralized place to learn about the team and explore upcoming initiatives.",
    technologies: ["HTML", "CSS", "TypeScript", "React"],
    link: "https://github.com/queens-web-development-club/ws25t01-isabeltheatreclub",
    image: Isabel_Balder_Club,
  },
  {
    title: "NumNum",
    date: "02/2025",
    description:
      "An AI powered dining app that recommends restaurant choices to users based on their preferences, such as location, dietary needs, cuisine, price range and much more.",
    technologies: ["Python", "Flask", "Gemini API"],
    link: "https://devpost.com/software/numnum",
    image: NumNum,
  },
];

const experience = [
  {
    role: "Business Analyst / Software Developer",
    company: "RBC",
    date: "May 2026 – Present",
    description:
      "Working with development teams to support internal software solutions and automation initiatives at RBC. Collaborating on technical projects focused on improving workflows, systems, and operational efficiency.",
    website: "https://www.rbcroyalbank.com",
    logo: RBC_Logo,
  },
  {
    role: "Technology Operator",
    company: "Britnell",
    date: "April 2025 – April 2026",
    description:
      "Developed software and automation systems that improved internal workflows, streamlined repetitive tasks, and made company data more accessible across departments. I worked at Britnell as a full-time summer intern from April 2025 to August 2025, then continued part-time during the school year from September 2025 to April 2026.",
    website: "https://www.britnell.com",
    logo: Britnell_Logo,
  }
];

const activities = [
  {
    org: "Queen's Computing Students' Association",
    role: "Frontend Developer",
    date: "Aug 2025 – April 2026",
    description:
      "Designed and built digital tools that support the academic and social needs of Computing students at Queen’s University.",
    link: "https://compsa.ca",
  },
  {
    org: "Queen’s Engineering Society",
    role: "Software Developer",
    date: "Oct 2024 – April 2025",
    description:
      "Contributed towards software projects that aim to solve real world problems within the school community.",
    link: "https://www.engsoc.queensu.ca",
  },
  {
    org: "Queen’s Web Development Team",
    role: "Web Developer",
    date: "Sept 2024 – April 2025",
    description:
      "Designed and built websites while collaborating with team members to deliver custom web platforms for client businesses.",
    link: "https://www.qweb.dev",
  },
  {
    org: "Queen’s Racing",
    role: "Electrical Member / Programmer",
    date: "Sept 2024 – April 2025",
    description:
      "Worked on developing software for various electrical components and systems within the car.",
    link: "https://www.qfsae.ca",
  },
  {
    org: "First Robotics - Team 9098",
    role: "Lead Programmer",
    date: "Sept 2022 – Jun 2024",
    description:
      "Contributed to developing the robot’s PID, vision system, RoboRIO firmware, and autonomous routines. I also trained other students by teaching coding concepts and problem-solving techniques.",
    link: "https://frc9098.ca",
  },
];

const current = [
  "TypeScript",
  "Node.js",
  "Vue.js",
  "SQL",
  "MongoDB",
];

const languages = [
  "Python",
  "Java",
  "C",
  "JavaScript",
  "TypeScript",
  "SQL",
  "HTML",
  "CSS",
];

const technologies = [
  "React",
  "Node.js",
  "Next.js",
  "Vue.js",
  "React Native",
  "Git & GitHub",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "Flask",
  "Resend",
];

function Navbar() {
  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="Go to home">RD</a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#activities">Activities</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function SectionIntro({ label, title, children }) {
  return (
    <div className="section-intro">
      <span>{label}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image" aria-hidden={!project.image}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <div className="project-placeholder">{project.title.slice(0, 2)}</div>
        )}
      </div>
      <div className="project-content">
        <div className="card-meta">
          <span>{project.date}</span>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">View ↗</a>
          )}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main id="home">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="small-label">Software Design @ Queen’s University</p>
            <h1>Rocco DeStefano</h1>
            <p>
              I build practical web, automation, and data-driven tools that make workflows easier to understand and faster to use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View Projects</a>
              <a className="button button-secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <aside className="hero-panel">
            <p>Currently</p>
            <h2>Business Analyst / Software Developer</h2>
            <h3>RBC</h3>
            <div className="skill-list">
              {current.map((current) => <span key={current}>{current}</span>)}
            </div>
          </aside>
        </section>

        <section id="about" className="section-shell about-section">
          <div className="about-copy">
            <SectionIntro label="About" title="Let Me Introduce Myself">
              I'm a Queen’s University Computer Science student with hands-on experience in full-stack development, automation scripting, and data-driven applications. Seeking opportunities to contribute to impactful projects while expanding my technical skills and collaborating with innovative teams.
            </SectionIntro>

            <div className="about-highlights">
              <span>Full-Stack Development</span>
              <span>Automation Systems</span>
              <span>Data-Driven Tools</span>
            </div>
          </div>

          <a
            className="headshot-card"
            href="https://www.linkedin.com/in/rocco-destefano-908a7932a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Headshot} alt="Rocco DeStefano" />
            <div>
              <h3>Rocco DeStefano</h3>
              <p>Computer Science Student</p>
            </div>
          </a>

          <div className="about-card skills-card">
            <h3>Languages</h3>
            <div className="skill-list">
              {languages.map((skill) => <span key={skill}>{skill}</span>)}
            </div>

            <h3>Technologies</h3>
            <div className="skill-list">
              {technologies.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell">
          <SectionIntro label="Experience" title="Work Experience & Education" />
          <div className="timeline-list">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-brand">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="timeline-logo"
                />
              </div>

              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>

                <h3>{item.role}</h3>

                <a
                  className="timeline-company"
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.company}
                </a>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
            <article className="timeline-item">
              <div className="timeline-brand">
                <img
                  src={Queens_Logo}
                  alt="Queen's University logo"
                  className="timeline-logo"
                />
              </div>

              <div className="timeline-content">
                <span className="timeline-date">Sept 2024 – June 2028</span>

                <h3>Bachelor of Computing (Honours), Specialization - Software Design</h3>

                <a
                  className="timeline-company"
                  href="https://www.queensu.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Queen’s University
                </a>

                <p>
                  Learning programming fundamentals and advanced computing principles through a Software Design specialization.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionIntro label="Projects" title="Explore My Work" />
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section id="activities" className="section-shell">
          <SectionIntro label="Activities" title="Clubs & Organizations" />
          <div className="activity-list">
            {activities.map((activity) => (
              <article className="activity-item" key={activity.org}>
                <div>
                  <span>{activity.date}</span>
                  <h3>{activity.org}</h3>
                  <h4>{activity.role}</h4>
                  <p>{activity.description}</p>
                </div>
                <a href={activity.link} target="_blank" rel="noreferrer">Visit ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <div>
            <p className="small-label">Contact</p>
            <h2>Let’s connect.</h2>
            <p>Reach out for internships, technical projects, collaborations, or software opportunities.</p>
          </div>
          <div className="contact-buttons">
            <a className="button button-primary" href="mailto:roccodestefano19@icloud.com">Email</a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/rocco-destefano0819/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button button-secondary" href="https://github.com/RoccoD1616" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
