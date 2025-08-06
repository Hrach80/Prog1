import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBook,
  FaReact,
  FaInfoCircle,
  FaLightbulb,
  FaCode,
  FaTools,
  FaLink,
} from "react-icons/fa";
import "../ReactPages/ReactPages.css";

export const ThemeContext = createContext("light");

const initialState = { count: 0 };
export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function GreetUser({ name }) {
  return <h1 className="greet-user-title">Hello, {name}!</h1>;
}

export function DocumentTitleUpdater() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    document.title = `Hello, ${userName === "" ? "Guest" : userName}!`;
    return () => {
      document.title = "React App";
    };
  }, [userName]);
  return (
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Enter your name"
      className="text-input"
    />
  );
}

export function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button className={`themed-button ${theme}-theme-button`}>
      My theme is {theme}
    </button>
  );
}

export function FocusInput() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      <input ref={inputEl} type="text" className="text-input" />
      <button onClick={onButtonClick} className="action-button">
        Focus Input
      </button>
    </>
  );
}

export function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter-container">
      <p className="counter-display">Counter: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="counter-button"
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="counter-button"
      >
        +
      </button>
    </div>
  );
}

export function ExpensiveCalculation({ a, b }) {
  const [multiplier, setMultiplier] = useState(1);
  const result = useMemo(() => {
    console.log("Performing expensive calculation...");
    return (a + b) * multiplier;
  }, [a, b, multiplier]);
  return (
    <div className="expensive-calculation-container">
      <p>Result: {result}</p>
      <button
        onClick={() => setMultiplier((prev) => prev + 1)}
        className="action-button"
      >
        Increase Multiplier
      </button>
    </div>
  );
}

export function ParentComponent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div className="parent-component-container">
      <p>Counter: {count}</p>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  console.log("Button rendered", children);
  return (
    <button onClick={onClick} className="action-button">
      {children}
    </button>
  );
}

const ReactPages = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };
  const memoizedValue = useMemo(() => {
    return 1 + 2;
  }, []);
  const memoizedCallback = useCallback(() => {
    console.log("Called memoized callback");
  }, []);
  return (
    <div className="react-page-container">
      <h1 className="react-page-title">
        <FaReact className="react-icon" /> React.js - The Foundation of Modern
        Frontend
      </h1>
      <section
        className={`react-section introduction ${
          openSection === "intro" ? "open" : ""
        }`}
      >
        <h2 onClick={() => toggleSection("intro")} className="section-header">
          <FaInfoCircle className="header-icon" /> What is React.js?{" "}
          <span className="toggle-icon">
            {openSection === "intro" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <p>
            **React** is a JavaScript library for building user interfaces (UI).
            It was developed by Facebook and is known for its component-based
            approach, which allows for the creation of complex and reusable UI
            elements. Key advantages of React include its Virtual DOM, which
            improves performance, and its unidirectional data flow, which
            simplifies state management.
          </p>
          <p>
            **Why use React.js:**
            <ul>
              <li>
                **Component-Based Architecture:** Allows for creating
                independent and reusable UI components.
              </li>
              <li>
                **Virtual DOM:** Optimizes UI updates, improving application
                speed.
              </li>
              <li>
                **JSX:** Enables writing HTML-like code within JavaScript.
              </li>
              <li>
                **Large Community:** Has an active and growing community that
                constantly supports and develops the library.
              </li>
            </ul>
          </p>
          <p>
            **Official Website:**{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              react.dev <FaExternalLinkAlt />
            </a>
          </p>
        </div>
      </section>
      <section
        className={`react-section concepts ${
          openSection === "concepts" ? "open" : ""
        }`}
      >
        <h2
          onClick={() => toggleSection("concepts")}
          className="section-header"
        >
          <FaLightbulb className="header-icon" /> Core Concepts{" "}
          <span className="toggle-icon">
            {openSection === "concepts" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <h3>Components</h3>
          <p>
            In React, the UI is built from components. There are two main types:
            functional components and class components. Today, functional
            components are primarily used thanks to hooks.
          </p>
          <div className="code-example">
            <h4>Functional Component Example</h4>
            <pre>
              <code>{`import React from 'react';

function GreetUser({ name }) {
  return <h1>Hello, \${name}!</h1>;
}

export default GreetUser;`}</code>
            </pre>
          </div>
          <h3>JSX (JavaScript XML)</h3>
          <p>
            JSX is a JavaScript extension that allows you to write HTML-like
            code in JS files. It compiles into React.createElement function
            calls.
          </p>
          <div className="code-example">
            <h4>JSX Example</h4>
            <pre>
              <code>{`const element = <h1>Hello world!</h1>;
// is equivalent to
const element = React.createElement('h1', null, 'Hello world!');`}</code>
            </pre>
          </div>
          <h3>Props (Properties)</h3>
          <p>
            Props allow data to be passed to components from top-down (parent to
            child). Props are immutable (read-only).
          </p>
          <h3>State</h3>
          <p>
            State is a component's internal data that can change over time.
            Changes in state lead to re-rendering of the component.
          </p>
        </div>
      </section>
      <section
        className={`react-section hooks ${
          openSection === "hooks" ? "open" : ""
        }`}
      >
        <h2 onClick={() => toggleSection("hooks")} className="section-header">
          <FaCode className="header-icon" /> React Hooks{" "}
          <span className="toggle-icon">
            {openSection === "hooks" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <p>
            Hooks are functions that allow you to use React's state and
            lifecycle features in functional components without writing classes.
          </p>
          <h3>`useState`</h3>
          <p>
            Allows functional components to have state. Returns the current
            state value and a function to update it.
          </p>
          <div className="code-example">
            <pre>
              <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</code>
            </pre>
          </div>
          <h3>`useEffect`</h3>
          <p>
            Allows performing side effects in functional components (e.g., data
            fetching, DOM interaction, subscriptions).
          </p>
          <div className="code-example">
            <pre>
              <code>{`import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    document.title = \`Hello, \${userName === '' ? 'Guest' : userName}!\`;
    return () => {
      // Cleanup function
    };
  }, [userName]);

  return (
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`}</code>
            </pre>
          </div>
          <h3>`useContext`</h3>
          <p>
            Allows access to Context values without manually passing props
            through all levels of the component tree.
          </p>
          <div className="code-example">
            <pre>
              <code>{`import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>My theme is \${theme}</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
);`}</code>
            </pre>
          </div>
          <h3>`useRef`</h3>
          <p>
            Returns a ref object that remains the same throughout the
            component's lifecycle. Primarily used for direct access to DOM
            elements or to store mutable values without causing re-renders.
          </p>
          <div className="code-example">
            <pre>
              <code>{`import React, { useRef } from 'react';

function FocusInput() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus Input</button>
    </>
  );
}`}</code>
            </pre>
          </div>
          <h3>`useReducer`</h3>
          <p>
            An alternative to `useState` for state management, especially for
            complex state logic involving multiple sub-values or when the next
            state depends on the previous one. It's similar to how Redux works.
          </p>
          <div className="code-example">
            <pre>
              <code>{`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Counter: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}`}</code>
            </pre>
          </div>
          <h3>`useMemo`</h3>
          <p>
            Memoizes calculated values, preventing expensive calculations from
            being re-executed on every render if dependencies haven't changed.
          </p>
          <div className="code-example">
            <pre>
              <code>{`import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ a, b }) {
  const [multiplier, setMultiplier] = useState(1);

  const result = useMemo(() => {
    console.log('Performing expensive calculation...');
    return (a + b) * multiplier;
  }, [a, b, multiplier]);

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setMultiplier(prev => prev + 1)}>Increase Multiplier</button>
    </div>
  );
}`}</code>
            </pre>
          </div>
          <h3>`useCallback`</h3>
          <p>
            Memoizes functions, preventing the function from being recreated on
            every render if dependencies haven't changed. This is especially
            useful for optimizing components passed as props to child
            components.
          </p>
          <div className="code-example">
            <pre>
              <code>{`import React, { useCallback, useState } from 'react';

function Button({ onClick, children }) {
  console.log('Button rendered', children);
  return <button onClick={onClick}>{children}</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Counter: {count}</p>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>
      <section
        className={`react-section libraries ${
          openSection === "libraries" ? "open" : ""
        }`}
      >
        <h2
          onClick={() => toggleSection("libraries")}
          className="section-header"
        >
          <FaTools className="header-icon" /> Important Libraries and Tools{" "}
          <span className="toggle-icon">
            {openSection === "libraries" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>
              <h4>React Router</h4>
              <p>For implementing navigation in applications.</p>
              <a
                href="https://reactrouter.com/en/main"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Official Website <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <h4>Redux / Zustand / React Context API</h4>
              <p>State Management solutions for complex applications.</p>
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Redux <FaExternalLinkAlt />
              </a>{" "}
              |{" "}
              <a
                href="https://zustand-demo.pmnd.rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Zustand <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <h4>Axios / Fetch API</h4>
              <p>For data fetching from APIs.</p>
              <a
                href="https://axios-http.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Axios <FaExternalLinkAlt />
              </a>{" "}
              |{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Fetch API MDN <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <h4>Material-UI / Ant Design / Chakra UI</h4>
              <p>UI component libraries to accelerate design development.</p>
              <a
                href="https://mui.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Material-UI <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <h4>Formik / React Hook Form</h4>
              <p>
                For managing forms, simplifying validation and data submission.
              </p>
              <a
                href="https://formik.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Formik <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <h4>Jest / React Testing Library</h4>
              <p>For testing React applications.</p>
              <a
                href="https://jestjs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Jest <FaExternalLinkAlt />
              </a>{" "}
              |{" "}
              <a
                href="https://testing-library.com/docs/react-testing-library/intro/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                React Testing Library <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`react-section resources ${
          openSection === "resources" ? "open" : ""
        }`}
      >
        <h2
          onClick={() => toggleSection("resources")}
          className="section-header"
        >
          <FaLink className="header-icon" /> References and Resources{" "}
          <span className="toggle-icon">
            {openSection === "resources" ? "▼" : "►"}
          </span>
        </h2>
        <div className="section-content">
          <ul>
            <li>
              <a
                href="https://react.dev/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaBook /> React Official Learn Tutorial <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/facebook/react"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                <FaGithub /> React GitHub Repository <FaExternalLinkAlt />
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
export default ReactPages;
