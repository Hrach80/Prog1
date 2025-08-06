import Sidebar from "../Sidebar/Sidebar";
import "../About/About.css";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaMapSigns,
  FaFileCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="AboutBox">
      <div className="waffle-menu-button" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1 className="abautH1">About Me</h1>
      <div className="AbautOne">
        <img
          className="AbautImg"
          src="https://scontent.fevn9-2.fna.fbcdn.net/v/t39.30808-6/480964429_1817561192119158_7503152052248543252_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hx4YHYLZLo8Q7kNvwE-JM6q&_nc_oc=AdlfUXHafA7EFywHSPfd0HjfqzB-o5VG4IqVMnmMuDmdVZ7Q6fx7A2Cdc8ew6QlF9QY&_nc_zt=23&_nc_ht=scontent.fevn9-2.fna&_nc_gid=hAgNTF6CYAytLkYUIL4JVw&oh=00_AfUKFJoxu6iw-KbV7I8FYxrrlOvxTbpbwWlqOkfNraE0HA&oe=68995F15"
          alt="Profile"
        />
        <div className="AbautCv">
          <h3 className="Abouth3">I'm a Web Developer</h3>
          <p className="AbautP">
            I am a web developer with a passion for creating dynamic and
            responsive websites. I have experience in HTML, CSS, JavaScript, and
            various frameworks. My goal is to build user-friendly applications
            that provide a seamless experience across all devices.
          </p>
        </div>
      </div>
      <div className="skill">
        <div className="skilsilka">
          <p className="AbautP pFemli">Hrachya Vagarshakyan</p>
          <h3 className="Abouth3 skills-styl">Skills</h3>
          <div className="adiv">
            <Link to="/HtmlPages" className="skilla">
              <FaHtml5 style={{ marginRight: 8, color: "#e34c26" }} /> HTML
            </Link>
            <Link to="/CssPages" className="skilla">
              <FaCss3Alt style={{ marginRight: 8, color: "#2965f1" }} /> CSS
            </Link>
            <Link to="/ScssPages" className="skilla">
              <FaSass style={{ marginRight: 8, color: "#cd6799" }} /> SCSS
            </Link>
            <Link to="/JavaScript" className="skilla">
              <FaJsSquare style={{ marginRight: 8, color: "#f0db4f" }} />{" "}
              JavaScript
            </Link>
            <Link to="/React.js" className="skilla">
              <FaReact style={{ marginRight: 8, color: "#61dafb" }} /> React.js
            </Link>
            <Link to="/Git" className="skilla">
              <FaGitAlt style={{ marginRight: 8, color: "#f34f29" }} /> Git
            </Link>
            <Link to="/GitHub" className="skilla">
              <FaGithub style={{ marginRight: 8, color: "#333" }} /> GitHub
            </Link>
            <Link to="/Figma" className="skilla">
              <FaFigma style={{ marginRight: 8, color: "#a259ff" }} /> Figma
            </Link>
            <Link to="/react-router-dom" className="skilla">
              <FaMapSigns style={{ marginRight: 8, color: "#a259ff" }} />{" "}
              react-router-dom
            </Link>
            <Link to="/json-server" className="skilla">
              <FaFileCode style={{ marginRight: 8, color: "#a259ff" }} />{" "}
              json-server
            </Link>
          </div>
        </div>
        <div className="skilsilka">
          <h3 className="Abouth3">Education</h3>
          <div className="divp">
            <p className="AbautP">
              I have completed a Bachelor's degree in Computer Science, where I
              gained a solid foundation in programming and software development.
              Additionally, I have taken various online courses to enhance my
              skills in web development and design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
