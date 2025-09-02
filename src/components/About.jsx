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
                <h4 style= {{ marginBottom: "60px" }}>As a Computer Science student at Queen's University, I am eager to work with likeminded
                    individuals and expand my coding knowledge and skills beyond the classroom.
                    I am hoping to contribute towards meaningful projects and express my passion
                    and creativity for programming.
                </h4>
            </div>
            
            <div className="skills-and-interests">
                <div className="card">
                <h3>Languages & Technologies</h3>
                    <div className="card-list">
                        <h4>Python</h4>
                        <h4>Java</h4>
                        <h4>C</h4>
                        <h4>C++</h4>
                        <h4>HTML</h4>
                        <h4>CSS</h4>
                        <h4>JavaScript</h4>
                        <h4>TypeScript</h4>
                        <h4>PHP</h4>
                        <h4>ReactJS</h4>
                        <h4>Flask</h4>
                        <h4>GitHub</h4>
                    </div>
                </div>

                <div className="card">
                <h3>Achievements & Certifications</h3>
                    <h4 style={{ fontWeight: "400" }}>Schulich Leadership Scholarship Nominee (2024)</h4>
                    <h4 style={{ fontWeight: "400" }}>University of Waterloo Canadian Computing Competition (CCC) Distinction (2022)</h4>
                    <h4 style={{ fontWeight: "400" }}>University of Waterloo Beaver Computing Challenge (BCC) Distinction (2021)</h4>
                </div>

                <div className="card">
                <h3>Skills & Abilities</h3>
                    <div className="card-list">
                        <h4>Software Development</h4>
                        <h4>Web Development</h4>
                        <h4>Robotics</h4>
                        <h4>Artificial Intelligence (AI)</h4>
                        <h4>Data Structures</h4>
                        <h4>Algorithms</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;