import "./About.css";
import Headshot from "../assets/Rocco-DeStefano.png";

function About() {
    return (
        <div className="about-container" id="about">
            <h2 className="title">About</h2>
            <h3 className="description">Let Me Introduce Myself</h3>

            <div className="about-me">
                <div className="headshot">
                    <a href="https://www.linkedin.com/in/rocco-destefano-908a7932a/" target="_blank" rel="noopener noreferrer">
                        <img src={Headshot} alt="Rocco DeStefano"/>
                    </a>
                </div>
                <h4 style= {{ marginBottom: "60px" }}>
                    Queen’s University Computer Science student with hands-on experience in full-stack development, automation scripting, 
                    and data-driven applications. Seeking opportunities to contribute to impactful projects while expanding my technical 
                    skills and collaborating with innovative teams.
                </h4>
            </div>
            
            <div className="skills-and-interests">
                <div className="card">
                <h3>Languages</h3>
                    <div className="card-list">
                        <h4>Python</h4>
                        <h4>Java</h4>
                        <h4>C</h4>
                        <h4>C++</h4>
                        <h4>JavaScript</h4>
                        <h4>TypeScript</h4>
                        <h4>HTML</h4>
                        <h4>CSS</h4>
                        <h4>SQL</h4>
                    </div>
                </div>

                <div className="card">
                <h3>Skills & Abilities</h3>
                    <div className="skill-list">
                        <h4 style={{ fontWeight: "400" }}>Full-Stack Development</h4>
                        <h4 style={{ fontWeight: "400" }}>Automation Scripting</h4>
                        <h4 style={{ fontWeight: "400" }}>API Integration</h4>
                        <h4 style={{ fontWeight: "400" }}>Mobile Development</h4>
                        <h4 style={{ fontWeight: "400" }}>Data Interface Development</h4>
                    </div>
                </div>

                <div className="card">
                <h3>Technologies</h3>
                    <div className="card-list">
                        <h4>React</h4>
                        <h4>Next.js</h4>
                        <h4>React Native</h4>
                        <h4>Tailwind CSS</h4>
                        <h4>Flask</h4>
                        <h4>Git & GitHub</h4>
                        <h4>REST APIs</h4>
                        <h4>MySQL</h4>
                        <h4>Supabase</h4>
                        <h4>Resend</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;