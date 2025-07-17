
import React, { useState, useRef } from "react";

const CodeBlock = ({ title, codeSnippet }) => {
  const [showCode, setShowCode] = useState(false);
  const codeRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState("Copy");

  const handleClick = () => {
    setShowCode(!showCode);
    setCopyStatus("Copy"); 
  };

  const handleCopyCode = async () => {
    if (codeRef.current) {
      const textToCopy = codeRef.current.innerText;
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopyStatus("Copied!");
      } catch (err) {
        setCopyStatus("Failed to copy!");
        console.error("Failed to copy: ", err);
      }

      setTimeout(() => {
        setCopyStatus("Copy");
      }, 2000);
    }
  };

  return (
    <>
      <button onClick={handleClick} className="HtMl">
        {title} 
      </button>
      <pre className={`HtMlPre ${showCode ? "show" : ""}`}>
        <code ref={codeRef}>{codeSnippet}</code>
        <button onClick={handleCopyCode}>{copyStatus}</button>
      </pre>
    </>
  );
};

export default CodeBlock;
