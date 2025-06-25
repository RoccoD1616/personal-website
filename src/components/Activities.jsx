import "./Activities.css";
import ESSDEV from "../assets/ESSDEV-Logo.webp";
import QWEB from "../assets/QWEB-Logo.jpeg";
import Racing from "../assets/Queen's-Racing-Logo.png";
import FIRST from "../assets/FIRST-Logo.png";

function Activities() {
    return (
        <div className="activities-container" id="activities">
            <h2 style={{ color: "rgb(255, 153, 51)", lineHeight: "20px", marginTop: "30px" }}>Activities</h2>
            <h3 style={{ fontSize: "40px", lineHeight: "0", marginBottom: "100px" }}>Clubs & Organizations</h3>
        
            <div className="activities" style={{ marginBottom: "50px" }}>
                <a href="https://www.engsoc.queensu.ca" target="_blank" rel="noopener noreferrer">
                    <img src={ESSDEV} alt="EngSoc"/>
                </a>
                <div className="description">
                    <a href="https://www.engsoc.queensu.ca" target="_blank" rel="noopener noreferrer">
                        <h3 style={{lineHeight: "0" }}>Queen’s Engineering Society</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Software Developer | Oct 2024 - Present</h3>
                    <h4>As a software developer on ESSDEV, I work with other members of our team in
                        order to build software projects that aim to solve real world problems within our community.
                        Through ESSDEV, I have been able to further develop my programming and teamwork skills while
                        gaining hands-on experience in software development.
                    </h4>
                </div>
            </div>
            
            <div className="activities" style={{ marginBottom: "50px" }}>
                <div className="description">
                    <a href="https://www.qweb.dev" target="_blank" rel="noopener noreferrer">
                        <h3 style={{lineHeight: "0" }}>Queen’s Web Development Team</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Web Developer | Sept 2024 - Present</h3>
                    <h4>As a web developer on QWEB, I design and build websites while collaborating with team members to deliver custom web platforms for client businesses.
                    </h4>
                </div>
                <a href="https://www.qweb.dev" target="_blank" rel="noopener noreferrer">
                    <img src={QWEB} alt="QWEB"/>
                </a>
            </div>

            <div className="activities" style={{ marginBottom: "50px" }}>
                <a href="https://www.qfsae.ca" target="_blank" rel="noopener noreferrer">
                    <img src={Racing} alt="Queen's Racing"/>
                </a>
                <div className="description">
                    <a href="https://www.qfsae.ca" target="_blank" rel="noopener noreferrer">
                        <h3 style={{lineHeight: "0" }}>Queen’s Racing</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Electrical Member / Programmer | Sept 2024 - Present</h3>
                    <h4>As a programmer on the electrical sub-team, I work on developing code for the various electrical components and systems within our car.
                        This experience combines programming and engineering concepts into a large-scale group-based project.
                    </h4>
                </div>
            </div>

            <div className="activities" style={{ paddingBottom: "100px" }}>
                <div className="description">
                    <a href="https://frc9098.ca" target="_blank" rel="noopener noreferrer">
                        <h3 style={{lineHeight: "0" }}>First Robotics - Team 9098</h3>
                    </a>
                    <h3 style={{ fontSize: "20px" }}>Lead Programmer | Sept 2022 - Jun 2024</h3>
                    <h4>As the lead programmer for the programming sub-team, I worked on several projects for our robot, including it’s PID, vision
                        system, RoboRIO firmware, as well as developing algorithms to maximize our robot’s performance and efficiency. I also trained
                        other students on the team who were less experienced in programming by teaching coding related concepts and problem-solving techniques.
                    </h4>
                </div>
                <a href="https://frc9098.ca" target="_blank" rel="noopener noreferrer">
                    <img src={FIRST} alt="FIRST" style={{ backgroundColor: "black" }}/>
                </a>
            </div>
        </div>
    )
}

export default Activities;