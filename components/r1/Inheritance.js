import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "./styled/InnerModuleStyled";

const listOfInheritedProperties = [
  "border-collapse",
  "border-spacing",
  "caption-side",
  "color",
  "cursor",
  "direction",
  "empty-cells",
  "font-family",
  "font-size",
  "font-style",
  "font-variant",
  "font-weight",
  "font-size-adjust",
  "font-stretch",
  "font",
  "letter-spacing",
  "line-height",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "list-style",
  "orphans",
  "quotes",
  "tab-size",
  "text-align",
  "text-align-last",
  "text-decoration-color",
  "text-indent",
  "text-justify",
  "text-shadow",
  "text-transform",
  "visibility",
  "white-space",
  "widows",
  "word-break",
  "word-spacing",
  "word-wrap",
];

const InnerInheritance = () => {
  return (
    <InnerModuleStyled>
      <div className="block one">
        <h1>Inheritance</h1>
        Inheritable properties will apply to children and grand children and so
        on, most of which are font related. (Its a DX thing)
        <div className="code">
          <SyntaxHighlighter language="javascript" showLineNumbers={true}>
            {`
              <p>
                I know <em>you</em> are but what am I?
              <p>
            `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block two">
        <p>Only Certain Properties are inheritable (border vs font-size):</p>
        <a target="_blank" href="https://gist.github.com/dcneiner/1137601">
          {" "}
          Complete List
        </a>
      </div>
      <div className="block three">
        Prototypal (As a mental model)
        <div className="code">
          <SyntaxHighlighter language="javascript" showLineNumbers={true}>
            {`
              class Main {
                color = "black"
              }
              
              class Paragraph extends Main {
                backgroundColor = "red"
              }
              
              class Span extends Paragraph {}
              
              const s = new Span(); 
              
              console.log(s.color)
            `}
          </SyntaxHighlighter>
        </div>
        <br />
        <div className="code">
          <SyntaxHighlighter language="html" showLineNumbers={true}>
            {`
                <main style="color: black;">
                  <p style="color: red;">
                    Hello <span> World</span>
                  </p>
                </main>
              `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block four">
        Inherit Property
        <div className="code">
          <SyntaxHighlighter language="html" showLineNumbers={true}>
            {`
            a {
              color: inherit;
              text-decoration: inherit;
            } 
              `}
          </SyntaxHighlighter>
        </div>
      </div>
    </InnerModuleStyled>
  );
};

export const Inheritance = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="inheritance"
      selected={selected}
      baseModule="rendering-one"
      innerChildren={<InnerInheritance />}
    >
      <div className={styles.card_container}>
        <p>Inheritance</p>
      </div>
    </ModuleCard>
  );
};

export default Inheritance;
