import React, { useCallback, useState } from "react";
import {
  CSSSyntax,
  typographyProperties,
  boxModelProperties,
  backgroundProperties,
  flexboxLayout,
  gridLayout,
  responsiveDesign,
  mediaQueries,
  transitionsAndAnimations,
  pseudoClassesAndElements,
  CSSSelectors,
  CSSVariables,
  CSSSpecificity,
  CSSBoxModel,
  CSSUnits,
  CSSColors,
  CSSFunctions,
  CSSPositioning,
  CSSOverflow,
  CSSZIndex,
} from "../../Content/CssData/CssData";
import CodeBlock from "../../Function/CodeBlock";
import { useNavigate } from "react-router-dom";
import Csslog from "../../images/csslogo.png";
import "./CssPages.css";

const CssPages = () => {
  const navigate = useNavigate();
  const [openTopic, setOpenTopic] = useState(null);

  const cssTopics = [
    { id: "syntax", title: "CSS Syntax", code: CSSSyntax },
    {
      id: "typography",
      title: "Typography Properties",
      code: typographyProperties,
    },
    { id: "boxmodel", title: "Box Model Properties", code: boxModelProperties },
    {
      id: "background",
      title: "Background Properties",
      code: backgroundProperties,
    },
    { id: "flexbox", title: "Flexbox Layout", code: flexboxLayout },
    { id: "grid", title: "Grid Layout", code: gridLayout },
    { id: "responsive", title: "Responsive Design", code: responsiveDesign },
    { id: "mediaqueries", title: "Media Queries", code: mediaQueries },
    {
      id: "transitions",
      title: "Transitions and Animations",
      code: transitionsAndAnimations,
    },
    {
      id: "pseudoclasses",
      title: "Pseudo-classes and Elements",
      code: pseudoClassesAndElements,
    },
    { id: "selectors", title: "CSS Selectors", code: CSSSelectors },
    { id: "variables", title: "CSS Variables", code: CSSVariables },
    { id: "specificity", title: "CSS Specificity", code: CSSSpecificity },
    { id: "cssboxmodel", title: "CSS Box Model", code: CSSBoxModel },
    { id: "units", title: "CSS Units", code: CSSUnits },
    { id: "colors", title: "CSS Colors", code: CSSColors },
    { id: "functions", title: "CSS Functions", code: CSSFunctions },
    { id: "positioning", title: "CSS Positioning", code: CSSPositioning },
    { id: "overflow", title: "CSS Overflow", code: CSSOverflow },
    { id: "zindex", title: "CSS Z-Index", code: CSSZIndex },
  ];

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      setOpenTopic(id);
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const toggleTopic = useCallback((id) => {
    setOpenTopic((prevOpenTopic) => (prevOpenTopic === id ? null : id));
  }, []);

  return (
    <div className="css-page-container">
      <div className="sidebar">
        <div className="sidebar-header">Web Development</div>
        <ul className="sidebar-menu">
          {cssTopics.map((topic) => (
            <li key={topic.id}>
              <button
                onClick={() => scrollToSection(topic.id)}
                className={`sidebar-item-button ${
                  openTopic === topic.id ? "active" : ""
                }`}
              >
                What is {topic.title}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate("/html")}
              className="sidebar-item-button"
            >
              What is HTML
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/javascript")}
              className="sidebar-item-button"
            >
              What is JavaScript
            </button>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="content-header">
          <h1 className="content-title">Roadmaps for Web Development</h1>
          <div className="nav-buttons">
            <button onClick={() => navigate("/")} className="btn-nav back">
              &lt; Home
            </button>
            <button
              onClick={() => navigate("/next-page-roadmap")}
              className="btn-nav next"
            >
              Next &gt;
            </button>
          </div>
        </div>

        <section className="info-section">
          <h2>What is a Roadmap?</h2>
          <p>
            **Roadmap** - this is a visual representation of a step-by-step
            scenario for the development of a specific object: product, class of
            service, technology, group of related products, etc. In other words,
            it's an action plan to achieve certain goals and solve stated
            problems, using the necessary means.
          </p>
          <p>
            For web developers, there are three directions: Front-end, Back-end,
            and DevOps. Each of these directions has its own peculiarities, and
            for each direction of web development, there is its own roadmap.
          </p>
        </section>

        <section className="info-section roadmap-title">
          <h2>Roadmap for Front-End Development (Front-End)</h2>
        </section>

        <div className="css-topics-container">
          <img className="css-main-logo" src={Csslog} alt="CSS Logo" />
          <h1 className="css-main-title">CSS</h1>
          {cssTopics.map((topic) => (
            <section
              id={topic.id}
              key={topic.id}
              className={`css-topic-section ${
                openTopic === topic.id ? "open" : ""
              }`}
            >
              <h2
                className="topic-header"
                onClick={() => toggleTopic(topic.id)}
              >
                {topic.title}
                <span className="toggle-icon">
                  {openTopic === topic.id ? "▲" : "▼"}
                </span>
              </h2>
              <div className="topic-content">
                <CodeBlock title={topic.title} codeSnippet={topic.code} />
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="right-sidebar">
        <div className="sidebar-block color-palette">
          <div className="sidebar-header">COLOR PALETTE</div>
          <img
            src="https://i.pinimg.com/originals/5a/b3/ea/5ab3eafae401124c73ecd501a2cf8c2e.png"
            alt="Color Palette"
            className="color-palette-img"
          />
        </div>
        <div className="sidebar-block how-to">
          <div className="sidebar-header">HOW TO</div>
          <ul className="how-to-list">
            <li>
              <a href="#SETTINGS">Settings</a>
            </li>
            <li>
              <a href="#EXPANDED_MENU">Expanded Menu</a>
            </li>
            <li>
              <a href="#MALAK_ACCORDION">Malak Accordion</a>
            </li>
            <li>
              <a href="#ALL_WINDOWS">All Windows</a>
            </li>
            <li>
              <a href="#TOP_NAVIGATION">Top Navigation</a>
            </li>
            <li>
              <a href="#MODAL_BLOCKS">Modal Blocks</a>
            </li>
            <li>
              <a href="#PROGRESS_BARS">Progress Bars</a>
            </li>
            <li>
              <a href="#PARALLAX">Parallax</a>
            </li>
            <li>
              <a href="#LOGIN_FORM">Login Form</a>
            </li>
            <li>
              <a href="#HTML_SNIPPETS">HTML Snippets</a>
            </li>
            <li>
              <a href="#Maps">Google Maps</a>
            </li>
            <li>
              <a href="#SEMICIRCLE_RANGE">Semicircle Range</a>
            </li>
            <li>
              <a href="#TAKEN_ASSISTANTS">Taken Assistants</a>
            </li>
            <li>
              <a href="#SLIDESHOW">Slideshow</a>
            </li>
            <li>
              <a href="#FILTER_LIST">Filter List</a>
            </li>
            <li>
              <a href="#SORTED_LIST">Sorted List</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CssPages;
