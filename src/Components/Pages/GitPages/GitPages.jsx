import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBook,
  FaGitAlt,
  FaInfoCircle,
  FaTerminal,
  FaCodeBranch,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you have react-router-dom for internal links
import "../GitPages/GitPages.css"; // Link to your CSS file

const GitPages = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div className="git-page-container">
      <h1 className="git-page-title">
        <FaGitAlt style={{ marginRight: "10px", color: "#F1502F" }} /> Git -
        Version Control System
      </h1>

  
      <section
        className={`git-section ${openSection === "intro" ? "open" : ""}`}
      >
        <h2 onClick={() => toggleSection("intro")} className="section-header">
          <FaInfoCircle style={{ marginRight: "10px" }} /> What is Git?
          <span className="toggle-icon">
            {openSection === "intro" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <p>
            **Git** is a free and open-source distributed version control system
            designed to handle everything from small to very large projects with
            speed and efficiency. It allows multiple developers to work on the
            same project simultaneously without overwriting each other's
            changes.
          </p>
          <p>
            Git tracks changes in source code during software development,
            enabling developers to revert to previous versions of files, track
            who made which changes, and manage different versions of a project.
          </p>
          <ul>
            <li>
              **Distributed:** Every developer has a full copy of the
              repository, including its entire history.
            </li>
            <li>
              **Non-linear Development:** Supports parallel development of
              features and bug fixes.
            </li>
            <li>
              **Integrity:** The content of files is secured with SHA1 hashes.
            </li>
            <li>
              **Speed:** Most operations are local, making them incredibly fast.
            </li>
          </ul>
          <p>
            **Official Git Website:**{" "}
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              git-scm.com <FaExternalLinkAlt />
            </a>
          </p>
        </div>
      </section>

    
      <section
        className={`git-section ${openSection === "concepts" ? "open" : ""}`}
      >
        <h2
          onClick={() => toggleSection("concepts")}
          className="section-header"
        >
          <FaCodeBranch style={{ marginRight: "10px" }} /> Core Concepts
          <span className="toggle-icon">
            {openSection === "concepts" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <h3>Repository (Repo)</h3>
          <p>
            A Git repository is a `.git` directory inside a project. This
            directory contains all the history and metadata for your project.
          </p>
          <h3>Commit</h3>
          <p>
            A commit is a snapshot of your repository at a specific point in
            time. It records changes made to one or more files. Each commit has
            a unique ID (SHA-1 hash), an author, a date, and a commit message.
          </p>
          <h3>Branch</h3>
          <p>
            A branch is a lightweight movable pointer to one of your commits.
            The default branch name in Git is `main` (or `master` in older
            repositories). Branches allow you to develop features, fix bugs, or
            experiment with new ideas in a contained environment without
            affecting the main codebase.
          </p>
          <h3>Merge</h3>
          <p>
            Merging is the process of integrating changes from one branch into
            another.
          </p>
          <h3>Clone</h3>
          <p>Cloning creates a local copy of an existing Git repository.</p>
          <h3>Pull / Push</h3>
          <p>
            **Pull** fetches changes from a remote repository and integrates
            them into your current branch. **Push** uploads your local commits
            to a remote repository.
          </p>
        </div>
      </section>


      <section
        className={`git-section ${openSection === "commands" ? "open" : ""}`}
      >
        <h2
          onClick={() => toggleSection("commands")}
          className="section-header"
        >
          <FaTerminal style={{ marginRight: "10px" }} /> Essential Git Commands
          <span className="toggle-icon">
            {openSection === "commands" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <h3>Initialize a new repository</h3>
          <div className="code-example">
            <pre>
              <code>git init</code>
            </pre>
          </div>

          <h3>Clone an existing repository</h3>
          <div className="code-example">
            <pre>
              <code>git clone [repository_url]</code>
            </pre>
          </div>

          <h3>Add changes to the staging area</h3>
          <div className="code-example">
            <pre>
              <code>git add [file_name]</code>
            </pre>
            <pre>
              <code>git add . // Add all changes</code>
            </pre>
          </div>

          <h3>Commit changes</h3>
          <div className="code-example">
            <pre>
              <code>git commit -m "Your commit message"</code>
            </pre>
          </div>

          <h3>Check the status of your repository</h3>
          <div className="code-example">
            <pre>
              <code>git status</code>
            </pre>
          </div>

          <h3>View commit history</h3>
          <div className="code-example">
            <pre>
              <code>git log</code>
            </pre>
          </div>

          <h3>Create a new branch</h3>
          <div className="code-example">
            <pre>
              <code>git branch [branch_name]</code>
            </pre>
          </div>

          <h3>Switch to a branch</h3>
          <div className="code-example">
            <pre>
              <code>git checkout [branch_name]</code>
            </pre>
            <pre>
              <code>git switch [branch_name] // Newer alternative</code>
            </pre>
          </div>

          <h3>Create and switch to a new branch</h3>
          <div className="code-example">
            <pre>
              <code>git checkout -b [new_branch_name]</code>
            </pre>
          </div>

          <h3>Merge a branch</h3>
          <div className="code-example">
            <pre>
              <code>git merge [branch_to_merge]</code>
            </pre>
          </div>

          <h3>Push changes to a remote repository</h3>
          <div className="code-example">
            <pre>
              <code>git push origin [branch_name]</code>
            </pre>
          </div>

          <h3>Pull changes from a remote repository</h3>
          <div className="code-example">
            <pre>
              <code>git pull origin [branch_name]</code>
            </pre>
          </div>
        </div>
      </section>

      
      <section
        className={`git-section ${openSection === "resources" ? "open" : ""}`}
      >
        <h2
          onClick={() => toggleSection("resources")}
          className="section-header"
        >
          <FaBook style={{ marginRight: "10px" }} /> Resources and References
          <span className="toggle-icon">
            {openSection === "resources" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>
              <a
                href="https://git-scm.com/doc"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaBook /> Official Git Documentation <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://try.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaGithub /> Try Git (Interactive Tutorial){" "}
                <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://www.atlassian.com/git/tutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaExternalLinkAlt /> Atlassian Git Tutorials{" "}
                <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <Link to="/contact" className="internal-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GitPages;
