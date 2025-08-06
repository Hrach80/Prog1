import React, { useState } from "react"; // Import useState
import WormSVG from "../../Content/ButterflySVG/WormSVG";
import Imgscss from "../../images/scss.png";
import { useNavigate } from "react-router-dom";
import "../../Pages/ScssPages/ScssPages.css";

const ScssPages = () => {
  const navigate = useNavigate();
  // State to manage which section is currently open/collapsed
  const [openSection, setOpenSection] = useState(null); // null means no section is open

  // Function to toggle the state of a section
  const toggleSection = (sectionId) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === sectionId ? null : sectionId
    );
  };

  return (
    <div className="scss-pages">
      <img className="imglogo" src={Imgscss} alt="SCSS logo" />
      <div className="scss-header">
        <h1>SCSS Cheat Sheet &amp; Guide</h1>
        <button onClick={() => navigate("/")} className="btnBec-scss">
          Back to About Mi
        </button>
        <p>
          Modern CSS extension with variables, nesting, mixins, and more. Write
          maintainable, powerful styles!
        </p>
      </div>

      {/* What is SCSS? Section */}
      <section
        id="what-is-scss" // Add an ID for unique identification
        className={`scss-section collapsible ${
          openSection === "what-is-scss" ? "open" : ""
        }`}
      >
        <h2
          className="section-header"
          onClick={() => toggleSection("what-is-scss")}
        >
          What is SCSS?
          <span className="toggle-icon">
            {openSection === "what-is-scss" ? "▲" : "▼"}
          </span>
        </h2>
        <div className="section-content">
          <p>
            <b>SCSS</b> (<b>Sassy CSS</b>) is a syntax of <b>Sass</b>{" "}
            (Syntactically Awesome Style Sheets) that extends CSS with new
            features. SCSS files use <code>.scss</code> extension and are
            compiled to regular CSS.
          </p>
        </div>
      </section>

      {/* Basic Syntax Section */}
      <section
        id="basic-syntax" // Add an ID
        className={`scss-section collapsible ${
          openSection === "basic-syntax" ? "open" : ""
        }`}
      >
        <h2
          className="section-header"
          onClick={() => toggleSection("basic-syntax")}
        >
          Basic Syntax
          <span className="toggle-icon">
            {openSection === "basic-syntax" ? "▲" : "▼"}
          </span>
        </h2>
        <div className="section-content">
          <pre>
            {`$main-color: #e63946;

body {
  background: #111;
  color: red;
  font-family: 'Segoe UI', sans-serif;

  .container {
    padding: 2rem;
    border-radius: 8px;
    background: darken($main-color, 30%);
    box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  }
}`}
          </pre>
        </div>
      </section>

      {/* Features & Examples Section */}
      <section
        id="features-examples" // Add an ID
        className={`scss-section collapsible ${
          openSection === "features-examples" ? "open" : ""
        }`}
      >
        <h2
          className="section-header"
          onClick={() => toggleSection("features-examples")}
        >
          Features &amp; Examples
          <span className="toggle-icon">
            {openSection === "features-examples" ? "▲" : "▼"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>
              <b>Variables:</b> <code>$primary: #ff0;</code>
            </li>
            <li>
              <b>Nesting:</b> <code>nav {"{ ul { li { ... } } }"}</code>
            </li>
            <li>
              <b>Mixins:</b>
              <pre>
                {`@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  @include flex-center;
}`}
              </pre>
            </li>
            <li>
              <b>Inheritance (&amp;):</b>
              <pre>
                {`.btn {
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  background: $main-color;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);

  &:hover {
    background: lighten($main-color, 10%);
  }
}`}
              </pre>
            </li>
            <li>
              <b>Functions:</b> <code>lighten($color, 20%)</code>,{" "}
              <code>darken($color, 15%)</code>
            </li>
          </ul>
        </div>
      </section>

      {/* Useful SCSS Functions Section */}
      <section
        id="useful-functions" // Add an ID
        className={`scss-section collapsible ${
          openSection === "useful-functions" ? "open" : ""
        }`}
      >
        <h2
          className="section-header"
          onClick={() => toggleSection("useful-functions")}
        >
          Useful SCSS Functions
          <span className="toggle-icon">
            {openSection === "useful-functions" ? "▲" : "▼"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>
              <code>lighten($color, $amount)</code> – Makes a color lighter
            </li>
            <li>
              <code>darken($color, $amount)</code> – Makes a color darker
            </li>
            <li>
              <code>mix($color1, $color2, $weight)</code> – Mixes two colors
            </li>
            <li>
              <code>if($condition, $if-true, $if-false)</code> – Inline
              conditional
            </li>
            <li>
              <code>map-get($map, $key)</code> – Gets value from a map
            </li>
          </ul>
        </div>
      </section>

      {/* How to Use SCSS Section */}
      <section
        id="how-to-use-scss" // Add an ID
        className={`scss-section collapsible ${
          openSection === "how-to-use-scss" ? "open" : ""
        }`}
      >
        <h2
          className="section-header"
          onClick={() => toggleSection("how-to-use-scss")}
        >
          How to Use SCSS
          <span className="toggle-icon">
            {openSection === "how-to-use-scss" ? "▲" : "▼"}
          </span>
        </h2>
        <div className="section-content">
          <ol>
            <li>
              Write SCSS code in <code>styles.scss</code> file.
            </li>
            <li>
              Compile using a tool (e.g., <b>Sass CLI</b>, <b>Webpack</b>,{" "}
              <b>Vite</b>, etc.).
            </li>
            <li>Import compiled CSS in your project.</li>
          </ol>
          <pre>
            {`# Compile SCSS to CSS
sass styles.scss styles.css
`}
          </pre>
        </div>
      </section>

      {/* Recommended Practices Section */}
      <section
        id="recommended-practices" // Add an ID
        className={`scss-section collapsible ${
          openSection === "recommended-practices" ? "open" : ""
        }`}
      >
        <h2
          className="section-header"
          onClick={() => toggleSection("recommended-practices")}
        >
          Recommended Practices
          <span className="toggle-icon">
            {openSection === "recommended-practices" ? "▲" : "▼"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>Use variables for colors, spacing, fonts.</li>
            <li>Group related styles with nesting (not too deep).</li>
            <li>Reuse styles with mixins and extends.</li>
            <li>
              Organize code in partials (<code>_buttons.scss</code>,{" "}
              <code>_variables.scss</code>).
            </li>
            <li>Use map and functions for scalable theming.</li>
          </ul>
        </div>
      </section>

      <div className="scss-footer">
        <p>
          <b>More resources:</b>{" "}
          <a
            href="https://sass-lang.com/guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sass Official Guide
          </a>
        </p>
      </div>
      <WormSVG />
    </div>
  );
};

export default ScssPages;
