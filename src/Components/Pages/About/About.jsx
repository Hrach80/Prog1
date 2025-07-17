import Sidebar from "../Sidebar/Sidebar";
import "../About/About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="AboutBox">
      <Sidebar />
      <h1 className="abautH1">About Mi</h1>
      <div className="AbautOne">
        <img
          className="AbautImg"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
        <div className="AbautCv">
          <h3 className="Abouth3">Im Web Developer</h3>
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
          <h3 className="Abouth3">Skills</h3>
          <div className="adiv">
            {" "}
            <Link to="/HtmlPages" className="skilla" href="">
              HTML
            </Link>
            <Link to="/CssPages" className="skilla" href="">
              CSS
            </Link>
            <Link to="/ScssPages" className="skilla" href="">
              SCSS
            </Link>
            <a className="skilla" href="">
              JavaScript
            </a>
            <a className="skilla" href="">
              React.js
            </a>
            <a className="skilla" href="">
              Git
            </a>
            <a className="skilla" href="">
              GitHub
            </a>
            <a className="skilla" href="">
              Figma
            </a>
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