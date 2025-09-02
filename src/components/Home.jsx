import "./Home.css";
import LinkedIn_Icon from "../assets/LinkedIn-Icon.png";
import GitHub_Icon from "../assets/GitHub-Icon.png";
import Mail_Icon from "../assets/Mail-Icon.png";

function Home() {
    return (
    <div className="home-container" id="home">
        <h1 className="name" style={{ textShadow: "1px 1px 3px rgba(0,0,0,.5)" }}>
            Rocco DeStefano
        </h1>

        <h3 className="tagline" style={{ textShadow: "2px 2px 4px rgba(0,0,0,.5)" }}>
            Computer Science Student at Queen's University Specializing in Software Design
        </h3>
        
        <div className="icons">
            <a href="https://www.linkedin.com/in/rocco-destefano-908a7932a/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn_Icon} alt="LinkedIn"/>
            </a>
            <a href="https://github.com/RoccoD1616" target="_blank" rel="noopener noreferrer">
                <img src={GitHub_Icon} alt="GitHub"/>
            </a>
            <a href="mailto:roccodestefano19@icloud.com" target="_blank" rel="noopener noreferrer">
                <img src={Mail_Icon} alt="Email" style={{ height: "30px", width: "45px" }} />
            </a>
        </div>
    </div>
    )
  }
  
  export default Home;