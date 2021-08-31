import React, { useMemo } from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getParam } from "../../utils/get-param";

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
    <InnerInheritanceStyled>
      <div className="block one">
        Inheritable properties will apply to children and grand children and so
        on.
      </div>
      <div className="block two">
        <p>Only Certain Properties (border vs font-size)</p>
        <p> Complete List </p>
      </div>
      <div className="block three">
        Prototypal (Mental Model)
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
      <div className="block four">Inherit Property</div>
    </InnerInheritanceStyled>
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
      <div className={styles.card_container}>Inheritance</div>
    </ModuleCard>
  );
};

export default Inheritance;

const InnerInheritanceStyled = styled.div`
  padding: 2rem 2rem 0;

  .block {
    width: 75%;
    margin: 0 auto;
    background-color: aqua;
    border-radius: 16px;
    > pre {
      border-radius: 16px;
    }

    .code {
      margin: 0 auto;
    }
  }
`;
