import "./Activities.css";
import COMPSA from "../assets/COMPSA-Logo.jpeg";
import ESSDEV from "../assets/ESSDEV-Logo.webp";
import QWEB from "../assets/QWEB-Logo.jpeg";
import Racing from "../assets/Queen's-Racing-Logo.png";
import FIRST from "../assets/FIRST-Logo.png";

function Activities() {
    return (
        <div className="activities-container" id="activities">
            <h2 className="title">Activities</h2>
            <h3 className="description">Clubs & Organizations</h3>
        
            <div className="activities" style={{ marginBottom: "50px" }}>
                <a href="https://compsa.ca" target="_blank" rel="noopener noreferrer">
                    <img src={COMPSA} alt="COMPSA"/>
                </a>
                <div className="description">
                    <a href="https://compsa.ca" target="_blank" rel="noopener noreferrer">
                        <h3>Queen's Computing Students' Association</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Frontend Developer | Aug 2025 - Present</h3>
                    <h4>Designing and building digital tools that support the academic and social needs of Computing students at Queen’s University.</h4>
                </div>
            </div>
            
            <div className="activities" style={{ marginBottom: "50px" }}>
            <div className="description">
                    <a href="https://www.engsoc.queensu.ca" target="_blank" rel="noopener noreferrer">
                        <h3>Queen’s Engineering Society</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Software Developer | Oct 2024 - April 2025</h3>
                    <h4>Contributed towards software projects that aim to solve real world problems within our school community.</h4>
                </div>
                <a href="https://www.engsoc.queensu.ca" target="_blank" rel="noopener noreferrer">
                    <img src={ESSDEV} alt="EngSoc"/>
                </a>
            </div>
            
            <div className="activities" style={{ marginBottom: "50px" }}>
            <   a href="https://www.qweb.dev" target="_blank" rel="noopener noreferrer">
                    <img src={QWEB} alt="QWEB"/>
                </a>
                <div className="description">
                    <a href="https://www.qweb.dev" target="_blank" rel="noopener noreferrer">
                        <h3>Queen’s Web Development Team</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Web Developer | Sept 2024 - April 2025</h3>
                    <h4>Designed and built websites while collaborating with team members to deliver custom web platforms for client businesses.
                    </h4>
                </div>
            </div>

            <div className="activities" style={{ marginBottom: "50px" }}>
                <div className="description">
                    <a href="https://www.qfsae.ca" target="_blank" rel="noopener noreferrer">
                        <h3>Queen’s Racing</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Electrical Member / Programmer | Sept 2024 - April 2025</h3>
                    <h4>Worked on developing software for the various electrical components and systems within our car.
                    </h4>
                </div>
                <a href="https://www.qfsae.ca" target="_blank" rel="noopener noreferrer">
                    <img src={Racing} alt="Queen's Racing"/>
                </a>
            </div>

            <div className="activities">
                <a href="https://frc9098.ca" target="_blank" rel="noopener noreferrer">
                    <img src={FIRST} alt="FIRST" style={{ backgroundColor: "black" }}/>
                </a>
                <div className="description">
                    <a href="https://frc9098.ca" target="_blank" rel="noopener noreferrer">
                        <h3>First Robotics - Team 9098</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Lead Programmer | Sept 2022 - Jun 2024</h3>
                    <h4>Contributed to developing the robot’s PID, vision system, RoboRIO firmware, and autonomous routines. I also trained
                        other students on the team who were less experienced in programming by teaching coding related concepts and problem-solving techniques.
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Activities;