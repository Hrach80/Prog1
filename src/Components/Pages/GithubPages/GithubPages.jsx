import React, { useState } from "react";
import {
  FaGithub,
  FaCodeBranch,
  FaLaptopCode,
  FaHandsHelping,
  FaLink,
  FaBook,
  FaExternalLinkAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you have react-router-dom for internal links
import "../GithubPages/GithubPages.css"; // Link to your CSS file

const GithubPages = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div className="github-page-container">
      <h1 className="github-page-title">
        <FaGithub style={{ marginRight: "10px", color: "#6e5494" }} /> GitHub -
        Where the World Builds Software
      </h1>

      <section
        className={`github-section ${openSection === "intro" ? "open" : ""}`}
      >
        <h2 onClick={() => toggleSection("intro")} className="section-header">
          <FaInfoCircle style={{ marginRight: "10px" }} /> What is GitHub?
          <span className="toggle-icon">
            {openSection === "intro" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <p>
            **GitHub** is a web-based platform that uses **Git** for version
            control. It's the world's leading platform for software development
            and version control, allowing millions of developers to host and
            review code, manage projects, and build software together.
          </p>
          <p>
            While Git is the command-line tool, GitHub provides a **graphical
            interface**, **collaboration features**, and a **social network**
            built around code.
          </p>
          <ul>
            <li>
              **Repository Hosting:** Host your Git repositories in the cloud.
            </li>
            <li>
              **Collaboration Tools:** Features like Pull Requests, Issues, and
              Code Review facilitate teamwork.
            </li>
            <li>
              **Project Management:** Tools like Projects and Wikis help
              organize development.
            </li>
            <li>
              **Open Source Hub:** A vast majority of open-source projects are
              hosted on GitHub.
            </li>
            <li>
              **Community:** Connect with developers, contribute to projects,
              and showcase your work.
            </li>
          </ul>
          <p>
            **Official GitHub Website:**{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              github.com <FaExternalLinkAlt />
            </a>
          </p>
        </div>
      </section>

    
      <section
        className={`github-section ${openSection === "features" ? "open" : ""}`}
      >
        <h2
          onClick={() => toggleSection("features")}
          className="section-header"
        >
          <FaLaptopCode style={{ marginRight: "10px" }} /> Key Features
          <span className="toggle-icon">
            {openSection === "features" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <h3>Repositories (Repos)</h3>
          <p>
            These are the fundamental building blocks on GitHub. A repository
            contains all of your project's files, including revision history.
            You can have public or private repositories.
          </p>
          <h3>Pull Requests (PRs)</h3>
          <p>
            Pull Requests are a core part of GitHub's collaboration model. They
            let you tell others about changes you've pushed to a branch in a
            repository on GitHub. Once a Pull Request is opened, you can discuss
            and review the potential changes with collaborators and add
            follow-up commits before your changes are merged into the base
            branch.
          </p>
          <h3>Issues</h3>
          <p>
            Issues are a great way to keep track of tasks, enhancements, and
            bugs for your projects. They can be assigned to team members and
            organized with labels.
          </p>
          <h3>Code Review</h3>
          <p>
            GitHub allows collaborators to review code changes, suggest
            improvements, and ensure code quality before merging.
          </p>
          <h3>Actions (CI/CD)</h3>
          <p>
            GitHub Actions allow you to automate, customize, and execute your
            software development workflows right in your repository. You can
            discover, create, and share actions to perform any job, including
            CI/CD, and combine actions in a fully customized workflow.
          </p>
          <h3>Pages</h3>
          <p>
            GitHub Pages is a free hosting service that takes HTML, CSS, and
            JavaScript files straight from a repository on GitHub, optionally
            runs them through a build process, and publishes a website directly
            from your code.
          </p>
        </div>
      </section>

      <section
        className={`github-section ${openSection === "workflow" ? "open" : ""}`}
      >
        <h2
          onClick={() => toggleSection("workflow")}
          className="section-header"
        >
          <FaCodeBranch style={{ marginRight: "10px" }} /> Common GitHub
          Workflow
          <span className="toggle-icon">
            {openSection === "workflow" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <p>A typical workflow on GitHub involves these steps:</p>
          <ol>
            <li>
              **Fork** (for open-source contributions) or **Clone** (for
              private/team projects) the repository to your local machine.
            </li>
            <li>
              **Create a new branch** for your feature or bug fix (e.g., `git
              checkout -b my-new-feature`).
            </li>
            <li>**Make your changes** to the code.</li>
            <li>
              **Add and Commit** your changes (`git add .`, `git commit -m
              "Descriptive message"`).
            </li>
            <li>
              **Push** your branch to GitHub (`git push origin my-new-feature`).
            </li>
            <li>**Open a Pull Request** on GitHub to propose your changes.</li>
            <li>
              **Collaborate** with reviewers, address feedback, and push more
              commits if needed.
            </li>
            <li>
              **Merge** your Pull Request into the main branch once approved.
            </li>
            <li>
              **Pull** the updated main branch to your local machine to keep it
              synchronized.
            </li>
          </ol>
        </div>
      </section>

      <section
        className={`github-section ${
          openSection === "resources" ? "open" : ""
        }`}
      >
        <h2
          onClick={() => toggleSection("resources")}
          className="section-header"
        >
          <FaBook style={{ marginRight: "10px" }} /> Resources & Further Reading
          <span className="toggle-icon">
            {openSection === "resources" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>
              <a
                href="https://docs.github.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaBook /> GitHub Docs - Official Documentation{" "}
                <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://skills.github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaGithub /> GitHub Skills - Learn GitHub through interactive
                courses <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://guides.github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaLink /> GitHub Guides - Step-by-step tutorials{" "}
                <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <Link to="/git" className="internal-link">
                <FaCodeBranch /> Learn more about Git (the underlying system)
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GithubPages;
