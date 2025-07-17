import React from "react";
import "../HtmlPages/HtmlPages.css";
import CodeBlock from "../../Function/CodeBlock";
import { useNavigate } from "react-router-dom";
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

const HtmlPages = () => {
  const navigate = useNavigate();

  return (
    <div className="HtmlPages">
      <img className="imglogo" src={Ht5} alt="HTML5 Logo" />

      <h1 className="HtMlH1">HTML</h1>

      {/* Navigation button at a fixed position */}
      <button onClick={() => navigate("/About Mi")} className="btnBec">
        Back to About Mi
      </button>

      {/* CodeBlock components */}
      <CodeBlock title="Simple HTML Document" codeSnippet={simpleHtmlCode} />
      <CodeBlock title="HTML Elements" codeSnippet={htmlElementsCode} />
      <CodeBlock title="HTML Attributes" codeSnippet={HTMLAttributes} />
      <CodeBlock title="HTML Headings" codeSnippet={HTMLHeadings} />
      <CodeBlock title="HTML Paragraphs" codeSnippet={HTMLParagraphs} />
      <CodeBlock title="HTML Styles" codeSnippet={HTMLStyles} />
      <CodeBlock
        title="HTML Text Formatting"
        codeSnippet={HTMLTextFormatting}
      />
      <CodeBlock title="HTML Comments" codeSnippet={HTMLComments} />
      <CodeBlock title="HTML Images" codeSnippet={HTMLImages} />
      <CodeBlock title="HTML Div Element" codeSnippet={HTMLDivElement} />
      <CodeBlock title="HTML Class" codeSnippet={HTMLclass} />
      <CodeBlock title="HTML Iframes" codeSnippet={HTMLIframes} />
      <CodeBlock title="HTML Forms" codeSnippet={HTMLForms} />
      <CodeBlock
        title="HTML Form Attributes"
        codeSnippet={HTMLFormAttributes}
      />
      <CodeBlock title="HTML Form Elements" codeSnippet={HTMLFormElements} />
      <CodeBlock title="HTML Input Types" codeSnippet={HTMLInputTypes} />
      <CodeBlock title="HTML Multimedia Formats" codeSnippet={HTMLMultimedia} />
      <CodeBlock title="HTML Video" codeSnippet={HTMLVideo} />
      <CodeBlock title="HTML Audio" codeSnippet={HTMLAudio} />
    </div>
  );
};

export default React.memo(HtmlPages); // Use React.memo for performance optimization
