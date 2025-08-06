import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../Function/CodeBlock";
import {
  simpleHtmlCode,
  htmlElementsCode,
  HTMLAttributes,
  HTMLHeadings,
  HTMLParagraphs,
  HTMLStyles,
  HTMLTextFormatting,
  HTMLComments,
  HTMLImages,
  HTMLDivElement,
  HTMLclass,
  HTMLIframes,
  HTMLForms,
  HTMLFormAttributes,
  HTMLFormElements,
  HTMLInputTypes,
  HTMLMultimedia,
  HTMLVideo,
  HTMLAudio,
} from "../../Content/HtmlData/HtmlData";
import Ht5 from "../../images/html5.png";
import "./HtmlPages.css";

const HtmlPages = () => {
  const navigate = useNavigate();
  const [openTopic, setOpenTopic] = useState(null);
  const htmlTopics = [
    { id: "simpleHtml", title: "Simple HTML Document", code: simpleHtmlCode },
    { id: "elements", title: "HTML Elements", code: htmlElementsCode },
    { id: "attributes", title: "HTML Attributes", code: HTMLAttributes },
    { id: "headings", title: "HTML Headings", code: HTMLHeadings },
    { id: "paragraphs", title: "HTML Paragraphs", code: HTMLParagraphs },
    { id: "styles", title: "HTML Styles", code: HTMLStyles },
    {
      id: "formatting",
      title: "HTML Text Formatting",
      code: HTMLTextFormatting,
    },
    { id: "comments", title: "HTML Comments", code: HTMLComments },
    { id: "images", title: "HTML Images", code: HTMLImages },
    { id: "div", title: "HTML Div Element", code: HTMLDivElement },
    { id: "class", title: "HTML Class", code: HTMLclass },
    { id: "iframes", title: "HTML Iframes", code: HTMLIframes },
    { id: "forms", title: "HTML Forms", code: HTMLForms },
    {
      id: "formAttributes",
      title: "HTML Form Attributes",
      code: HTMLFormAttributes,
    },
    { id: "formElements", title: "HTML Form Elements", code: HTMLFormElements },
    { id: "inputTypes", title: "HTML Input Types", code: HTMLInputTypes },
    {
      id: "multimedia",
      title: "HTML Multimedia Formats",
      code: HTMLMultimedia,
    },
    { id: "video", title: "HTML Video", code: HTMLVideo },
    { id: "audio", title: "HTML Audio", code: HTMLAudio },
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
    <div className="html-page-container">
      <div className="sidebars">
        <div className="sidebar-headers">Web Development</div>
        <ul className="sidebar-menus">
          {htmlTopics.map((topic) => (
            <li key={topic.id}>
              <button
                onClick={() => scrollToSection(topic.id)}
                className={`sidebar-items-button ${
                  openTopic === topic.id ? "active" : ""
                }`}
              >
                What is {topic.title}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate("/css")}
              className="sidebar-item-button"
            >
              What is CSS
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
          <h1 className="content-titles">Roadmaps for Web Development</h1>
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
        <section className="info-sections">
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
          <h2 className="rodmap-stail">Roadmap for HTML Development (HTML)</h2>
        </section>
        <div className="html-topics-container">
          <img className="html-main-logo" src={Ht5} alt="HTML5 Logo" />
          <h1 className="html-main-title">HTML</h1>
          {htmlTopics.map((topic) => (
            <section
              id={topic.id}
              key={topic.id}
              className={`html-topic-section ${
                openTopic === topic.id ? "open" : ""
              }`}
            >
              <h2
                className="topic-headers"
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
      <div className="right-sidebars">
        <div className="sidebar-blocksRight">
          <div className="sidebar-headers">COLOR PALETTE</div>
          <img
            src="https://static.imagewith.ai/web/cms/image10_114d5d8959.jpg"
            alt="Color Palette"
            className="color-palette-img"
          />
        </div>
        <div className="sidebars-blocks ">
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
export default React.memo(HtmlPages);
