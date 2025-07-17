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


const CssPages = () => {
  const navigate = useNavigate();

  return (
    <div className="HtmlPages">
      <img className="imglogo" src={Csslog} alt="" />
      <h1 className="HtMlH1">css</h1>
      <button onClick={() => navigate("/About Mi")} className="btnBec">
        beck to About Mi
      </button>
      <CodeBlock title="CSS Syntax" codeSnippet={CSSSyntax} />
      <CodeBlock
        title="Typography Properties"
        codeSnippet={typographyProperties}
      />
      <CodeBlock
        title="Box Model Properties"
        codeSnippet={boxModelProperties}
      />
      <CodeBlock
        title="Background Properties"
        codeSnippet={backgroundProperties}
      />
      <CodeBlock title="Flexbox Layout" codeSnippet={flexboxLayout} />
      <CodeBlock title="Grid Layout" codeSnippet={gridLayout} />
      <CodeBlock title="Responsive Design" codeSnippet={responsiveDesign} />
      <CodeBlock title="Media Queries" codeSnippet={mediaQueries} />
      <CodeBlock
        title="Transitions and Animations"
        codeSnippet={transitionsAndAnimations}
      />
      <CodeBlock
        title="Pseudo-classes and Elements"
        codeSnippet={pseudoClassesAndElements}
      />
      <CodeBlock title="CSS Selectors" codeSnippet={CSSSelectors} />
      <CodeBlock title="CSS Variables" codeSnippet={CSSVariables} />
      <CodeBlock title="CSS Specificity" codeSnippet={CSSSpecificity} />
      <CodeBlock title="CSS Box Model" codeSnippet={CSSBoxModel} />
      <CodeBlock title="CSS Units" codeSnippet={CSSUnits} />
      <CodeBlock title="CSS Colors" codeSnippet={CSSColors} />
      <CodeBlock title="CSS Functions" codeSnippet={CSSFunctions} />
      <CodeBlock title="CSS Positioning" codeSnippet={CSSPositioning} />
      <CodeBlock title="CSS Overflow" codeSnippet={CSSOverflow} />
      <CodeBlock title="CSS Z-Index" codeSnippet={CSSZIndex} />
    </div>
  );
};
export default CssPages;
