import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CodeBlock from "../../Function/CodeBlock";
import "./RouterPages.css";
const RouterPages = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);
  const [openSidebarMenu, setOpenSidebarMenu] = useState({});
  const faqSections = [
    {
      id: "what-happened-withrouter",
      title: "What happened to withRouter? I need it!",
      content: `This question usually stems from the fact that you're using React class components, which don't support hooks. In React Router v6, we fully embraced hooks and use them to share all the router's internal state. But that doesn't mean you can't use the router. Assuming you can actually use hooks (you're on React 16.8+), you just need a wrapper.`,
      code: `import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
function ComponentWithRouterProp(props) {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return (
    <Component
      {...props}
      router={{ location, navigate, params }}
    />
  );
}
return ComponentWithRouterProp;`,
    },
    {
      id: "why-does-route-have-element",
      title:
        "Why does <Route> have an element prop instead of render or component?",
      content: `This is due to React Router v6's focus on hooks and functional components. The 'element' prop accepts a JSX element directly, encouraging a more declarative and streamlined approach to defining routes. This aligns with React's functional component paradigm and avoids issues with prop drilling or unnecessary re-renders that could arise with 'render' or 'component' props in class components.`,
      code: null,
    },
    {
      id: "how-do-i-add-404-route",
      title: "How do I add a 404 (Not Found) Route in react-router-v6?",
      content: `In React Router v6, you can implement a 404 (Not Found) route by adding a Route with a path="*" as the last route definition within your Routes component. This route will match any path that hasn't been matched by the preceding routes.`,
      code: `import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}`,
    },
    {
      id: "route-doesnt-render",
      title: "<Route> doesn't render? How do I compose?",
      content: `If your <Route> isn't rendering as expected, ensure it's nested within a <Routes> component. In v6, <Routes> is mandatory for routes to function. For composition, you can nest <Route> components, or use layout routes for shared UI elements.`,
      code: null,
    },
    {
      id: "how-do-i-nest-routes-deep",
      title: "How do I nest routes deep in the tree?",
      content: `React Router v6 simplifies nested routes. You can define child routes directly within a parent Route. The parent path acts as a base, and child paths are relative to it. You can use the <Outlet> component in your parent layout to render the matched child route.`,
      code: `import { Routes, Route, Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="settings" element={<DashboardSettings />} />
        <Route path="analytics" element={<DashboardAnalytics />} />
      </Route>
    </Routes>
  );
}`,
    },
    {
      id: "what-happened-regex-routes",
      title: "What Happened to Regexp Routes Paths?",
      content: `React Router v6 has moved away from regular expression matching for route paths to simplify path definition and improve performance. Paths are now based on a simpler, more intuitive matching system that supports dynamic segments, optional segments, and splat parameters. If you need complex pattern matching, you might consider using a custom path matching logic or pre-processing your route paths.`,
      code: null,
    },
  ];
  const sidebarNav = [
    {
      title: "Getting Started",
      id: "getting-started",
      children: [
        { title: "Feature Overview", path: "/router/feature-overview" },
        { title: "Tutorial", path: "/router/tutorial" },
        { title: "Examples", path: "/router/examples" },
        { title: "FAQs", path: "/router/faqs", current: true },
      ],
    },
    {
      title: "Main Concepts",
      id: "main-concepts",
      children: [{ title: "Changelog", path: "/router/changelog" }],
    },
    {
      title: "Upgrading",
      id: "upgrading",
      children: [
        { title: "Current Future Flags", path: "/router/future-flags" },
        {
          title: "Migrating to RouterProvider",
          path: "/router/migrate-provider",
        },
        { title: "Upgrading from v5", path: "/router/upgrade-v5" },
        {
          title: "Migrating from @reach/router",
          path: "/router/migrate-reach",
        },
      ],
    },
    {
      title: "Routers",
      id: "routers",
      children: [
        { title: "Picking a Router", path: "/router/picking" },
        { title: "createBrowserRouter", path: "/router/createBrowserRouter" },
        { title: "createHashRouter", path: "/router/createHashRouter" },
        { title: "createMemoryRouter", path: "/router/createMemoryRouter" },
        { title: "createStaticHandler", path: "/router/createStaticHandler" },
        { title: "createStaticRouter", path: "/router/createStaticRouter" },
        { title: "RouterProvider", path: "/router/RouterProvider" },
        { title: "StaticRouterProvider", path: "/router/StaticRouterProvider" },
      ],
    },
    {
      title: "Router Components",
      id: "router-components",
      children: [{ title: "BrowserRouter", path: "/router/BrowserRouter" }],
    },
  ];
  const toggleMainSection = useCallback((id) => {
    setOpenSection((prevId) => (prevId === id ? null : id));
  }, []);
  const toggleSidebarMenu = useCallback((id) => {
    setOpenSidebarMenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
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
    <div className="router-page-container">
      <div className="router-sidebar-left">
        <div className="sidebar-header">
          <span className="router-version">6.30.1</span>
          <span className="toggle-icon-global"></span>
        </div>
        <ul className="sidebar-menu-list">
          {sidebarNav.map((menuItem) => (
            <li key={menuItem.id} className="sidebar-menu-item-group">
              <div
                className="sidebar-menu-group-header"
                onClick={() => toggleSidebarMenu(menuItem.id)}
              >
                {menuItem.title}
                <span className="toggle-icon">
                  {openSidebarMenu[menuItem.id] ? "▲" : "▼"}
                </span>
              </div>
              <ul
                className={`sidebar-submenu-list ${
                  openSidebarMenu[menuItem.id] ? "open" : ""
                }`}
              >
                {menuItem.children.map((childItem) => (
                  <li key={childItem.path} className="sidebar-submenu-item">
                    <button
                      onClick={() => {
                        if (childItem.current) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          navigate(childItem.path);
                        }
                      }}
                      className={`sidebar-submenu-button ${
                        childItem.current ? "active" : ""
                      }`}
                    >
                      {childItem.title}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="router-main-content">
        <div className="router-content-header">
          <div className="breadcrumbs">
            <span>Home</span> &gt; <span>FAQs</span>
          </div>
          <h1>FAQs</h1>
          <button className="copy-page-button">
            <span className="copy-icon">📋</span> Copy Page
          </button>
        </div>
        <p className="intro-text">
          Here are some questions that people commonly have about React Router
          v6. You might also find what you're looking for in the{" "}
          <a href="/router/examples">examples</a>.
        </p>
        {faqSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`faq-section ${
              openSection === section.id ? "open" : ""
            }`}
          >
            <h2
              className="faq-header"
              onClick={() => toggleMainSection(section.id)}
            >
              {section.title}
              <span className="toggle-icon">
                {openSection === section.id ? "▲" : "▼"}
              </span>
            </h2>
            <div className="faq-content">
              <p>{section.content}</p>
              {section.code && (
                <CodeBlock
                  title={section.title}
                  codeSnippet={section.code}
                  language="jsx"
                />
              )}
            </div>
          </section>
        ))}
      </div>
      <div className="router-sidebar-right">
        <div className="sidebar-right-header">On this page</div>
        <ul className="sidebar-right-menu">
          {faqSections.map((section) => (
            <li key={`right-nav-${section.id}`}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
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
export default RouterPages;
