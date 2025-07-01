import "./Portfolio.css";

const workExperience = [
  {
    title: "Technology Operator",
    date: "April 2025 – Present",
    company: "Britnell Ventures Inc.",
    description: "As an intern at Britnell, I work on developing software systems that aim to enhance workplace efficiency by optimizing internal systems and workflows. I collaborate closely with different departments to understand their needs in order to create tools that streamline repetitive tasks and improve data accessibility. By automating key functions and improving internal tools, my role helps other divisions work more effectively and productively.",
    website: "https://www.britnell.com"
  },
  {
    title: "Web Developer / Social Media Marketer / I.T Support",
    date: "Sept 2022 - Jan 2024",
    company: "Wellspace MD",
    description: "As a part of my high school co-op placement, I developed Wellspace's website, designed posts for their social media platforms, and provided the clinic with I.T. needs around the office.",
    website: "https://wellspacemdfamilypractice.com"
  }
];

const education = [
  {
    degree: "Bachelor of Computing (Honours), Specialization - Software Design",
    date: "Sept 2024 – June 2028",
    school: "Queen's University",
    description: "As a Computing student specializing in Software Design at Queen’s University, I am learning the fundamentals of programming as well as many of the advanced principles of computing."
  }
]

function Portfolio() {
  return (
    <div className="portfolio-container" id="portfolio" style={{ marginBottom: "50px" }}>
      <h2 className="title">Portfolio</h2>
      <h3 className="description">Work Experience</h3>

      <div className="timeline">
        {workExperience.map((item, index) => (
          <div className="timeline-entry" key={index}>
          <div className="entry-content">
            <div className="title-and-date">
              <h3 style={{ color: "black" }}>{item.title}</h3>
              <h4 style={{ color: "black" }}>{item.date}</h4>
            </div>
        
            <div className="border">
              <div className="dot"></div>
            </div>
        
            <div className="company-and-description">
            <a className="company-link" href={item.website} target="_blank" rel="noopener noreferrer">
              <h3 className="company-name">{item.company}</h3>
            </a>
              <h4 style={{ color: "black", textAlign: "left" }}>{item.description}</h4>
            </div>
          </div>
        </div>
        ))}
      </div>

      <h3 className="education">Education</h3>
      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-entry" key={index}>
          <div className="entry-content">
            <div className="title-and-date">
              <h3 style={{ color: "black" }}>{item.degree}</h3>
              <h4 style={{ color: "black" }}>{item.date}</h4>
            </div>
        
            <div className="education-border">
              <div className="dot"></div>
            </div>
        
            <div className="education-and-description">
              <h3 style={{ color: "black", textAlign: "left" }}>{item.school}</h3>
              <h4 style={{ color: "black", textAlign: "left" }}>{item.description}</h4>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div> 
  );
}

export default Portfolio;
