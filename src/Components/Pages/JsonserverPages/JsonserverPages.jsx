import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../Function/CodeBlock";
import "../JsonserverPages/JsonserverPages.css";

const JsonservePages = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);
  const jsonServerSections = [
    {
      id: "what-is-json-server",
      title: "What is JSON Server?",
      content: `JSON Server is a full fake REST API that allows you to quickly set up a backend for your frontend projects. It's incredibly useful for rapid prototyping, testing, and development without needing to write any backend code. It serves your data from a simple JSON file.`,
      code: null,
    },
    {
      id: "installation",
      title: "Installation",
      content: `JSON Server is a Node.js package. You can install it globally using npm or yarn.`,
      code: `npm install -g json-server
# OR
yarn global add json-server`,
    },
    {
      id: "getting-started",
      title: "Getting Started",
      content: `To get started, create a db.json file with some data, then run JSON Server.`,
      code: `// db.json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

# Run JSON Server
json-server --watch db.json`,
    },
    {
      id: "routing",
      title: "Routing",
      content: `JSON Server automatically creates routes for your resources based on your db.json file.`,
      code: `GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1

GET    /comments?postId=1
GET    /posts/1/comments`,
    },
    {
      id: "filters-pagination-sort",
      title: "Filters, Pagination, and Sort",
      content: `You can easily filter, paginate, sort, and slice resources using query parameters.`,
      code: `GET /posts?title=json-server&author=typicode
GET /posts?_limit=2&_page=1
GET /posts?_sort=views&_order=asc
GET /posts/1/comments`,
    },
    {
      id: "custom-routes",
      title: "Custom Routes",
      content: `You can add custom routes using a routes.json file.`,
      code: `// routes.json
{
  "/api/*": "/$1",
  "/blog/:resource/:id": "/:resource/:id"
}

# Run with custom routes
json-server --watch db.json --routes routes.json`,
    },
    {
      id: "deploying",
      title: "Deploying",
      content: `While primarily for local development, you can deploy JSON Server to a platform like Heroku or Vercel if you need a quick, read-only API.`,
      code: `// Procfile (for Heroku)
web: json-server --watch db.json --port $PORT`,
    },
  ];
  const sidebarNav = [
    {
      title: "Getting Started",
      id: "getting-started-group",
      children: [
        { title: "What is JSON Server?", path: "#what-is-json-server" },
        { title: "Installation", path: "#installation" },
        { title: "Getting Started", path: "#getting-started" },
      ],
    },
    {
      title: "API Features",
      id: "api-features-group",
      children: [
        { title: "Routing", path: "#routing" },
        {
          title: "Filters, Pagination, Sort",
          path: "#filters-pagination-sort",
        },
        { title: "Custom Routes", path: "#custom-routes" },
      ],
    },
    {
      title: "Advanced Topics",
      id: "advanced-topics-group",
      children: [
        { title: "Deploying", path: "#deploying" },
        { title: "Middlewares", path: "#middlewares" },
        { title: "Authentication", path: "#authentication" },
      ],
    },
    {
      title: "Related",
      id: "related-group",
      children: [
        { title: "What is REST API", path: "/rest-api" },
        { title: "What is Node.js", path: "/nodejs" },
      ],
    },
  ];
  const toggleSection = useCallback((id) => {
    setOpenSection((prevId) => (prevId === id ? null : id));
  }, []);
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      setOpenSection(id);
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);
  return (
    <div className="jsonserve-page-container">
      <div className="jsonserve-sidebar-left">
        <div className="sidebar-header">JSON Server Docs</div>
        <ul className="sidebar-menu-list">
          {sidebarNav.map((menuItem) => (
            <li key={menuItem.id} className="sidebar-menu-item-group">
              <div
                className="sidebar-menu-group-header"
                onClick={() =>
                  setOpenSection((prev) =>
                    prev === menuItem.id ? null : menuItem.id
                  )
                }
              >
                {menuItem.title}
                <span className="toggle-icon">
                  {openSection === menuItem.id ? "▲" : "▼"}{" "}
                </span>
              </div>
              <ul
                className={`sidebar-submenu-list ${
                  openSection === menuItem.id ? "open" : ""
                }`}
              >
                {menuItem.children.map((childItem) => (
                  <li key={childItem.path} className="sidebar-submenu-item">
                    <button
                      onClick={() =>
                        scrollToSection(childItem.path.substring(1))
                      }
                      className={`sidebar-submenu-button ${
                        openSection === childItem.path.substring(1)
                          ? "active"
                          : ""
                      }`}
                    >
                      {childItem.title}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="sidebar-bottom-nav">
            <button
              onClick={() => navigate("/")}
              className="sidebar-item-button"
            >
              &lt; Back to About Mi
            </button>
          </li>
        </ul>
      </div>
      <div className="jsonserve-main-content">
        <div className="jsonserve-content-header">
          <h1>JSON Server</h1>
          <p>
            The easiest way to create a fake REST API for prototyping and
            development.
          </p>
          <div className="nav-buttons">
            <button
              onClick={() => navigate("/previous-page")}
              className="btn-nav back"
            >
              &lt; Previous
            </button>
            <button
              onClick={() => navigate("/next-page")}
              className="btn-nav next"
            >
              Next &gt;
            </button>
          </div>
        </div>
        {jsonServerSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`jsonserve-section ${
              openSection === section.id ? "open" : ""
            }`}
          >
            <h2
              className="section-header"
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <span className="toggle-icon">
                {openSection === section.id ? "▲" : "▼"}
              </span>
            </h2>
            <div className="section-content">
              <p>{section.content}</p>
              {section.code && (
                <CodeBlock
                  title={section.title}
                  codeSnippet={section.code}
                  language="bash"
                />
              )}
            </div>
          </section>
        ))}
      </div>
      <div className="jsonserve-sidebar-right">
        <div className="sidebar-right-header">On this page</div>
        <ul className="sidebar-right-menu">
          {jsonServerSections.map((section) => (
            <li key={`right-nav-${section.id}`}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className={openSection === section.id ? "active" : ""}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default JsonservePages;
