import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <p>
          Follow us on{" "}
          <a href="https://twitter.com" className="footer-link">
            X
          </a>{" "}
          and{" "}
          <a href="https://facebook.com" className="footer-link">
            Facebook
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
