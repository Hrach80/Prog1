import "../Porjects/Projects.css";
const Projects = () => {
  return (
    <div className="ProjectsBox">
      <div className="ProjectDiv1">
        <h1>Hi,Im a Web Developer</h1>
        <p className="NavP">
          I build responsive and user-friendly websites, Ex-perienced in HTML,
          CSS, and JavaScript.
        </p>
      </div>
      <div className="ProjectBox2">
        <h2 className="projH2">Features Projects</h2>
        <div className="yndProjects">
          <div className="projectone">
            <h2 className="projh2">
              <p>Project One</p>
            </h2>
          </div>
          <div className="projectone">
            <h2 className="projecttwo">
              <p>Project Two</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
