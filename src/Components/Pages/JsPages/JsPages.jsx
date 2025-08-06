import React, { useState } from "react";
import "./JsPages.css";
import { jsCategories } from "../../Content/JsData/jsData";
import Worm from "../../Content/ButterflySVG/WormSVG";
import { useNavigate } from "react-router-dom";

const JsPages = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const handleCategoryClick = (cat) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

  const handleMethodClick = (url) => {
    window.open(url, "_blank");
  };
  const navigate = useNavigate();

  return (
    <div className="jsPagesBox">
      <h1>JavaScript Essentials</h1>
      <button onClick={() => navigate("/")} className="btnBec-scss">
        Back to About Mi
      </button>
      <p className="jsDesc">
        JavaScript is a versatile, high-level programming language that powers
        web interactivity, dynamic content, and much more. Explore important
        concepts, syntax, and core methods below!
      </p>
      <div className="jsAccordion">
        {jsCategories.map((cat) => (
          <div className="jsAccordionItem" key={cat.name}>
            <button
              className={`jsAccordionBtn${
                openCategory === cat.name ? " active" : ""
              }`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              {cat.name}
            </button>
            {openCategory === cat.name && (
              <ul className="jsMethodList">
                {cat.methods.map((m) => (
                  <li
                    key={m.name}
                    className="jsMethodItem"
                    onClick={() => handleMethodClick(m.url)}
                    tabIndex={0}
                  >
                    {m.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="jsSection">
        <h2>Basic Syntax Example</h2>
        <pre>{`// Variable declaration
let x = 5;

// Function
function greet(name) {
  return "Hello, " + name + "!";
}

// Array and loop
const arr = [1, 2, 3];
arr.forEach(num => console.log(num));
`}</pre>
      </div>

      <div className="jsSection">
        <h2>Popular Use Cases</h2>
        <ul>
          <li>Web page interactivity and DOM manipulation</li>
          <li>API requests (AJAX, fetch)</li>
          <li>Animations and UI effects</li>
          <li>Data validation in forms</li>
          <li>Building web apps (React, Vue, Angular...)</li>
        </ul>
      </div>

      <footer className="jsFooter">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN JavaScript Reference
        </a>
      </footer>
      <Worm />
    </div>
  );
};

export default JsPages;
