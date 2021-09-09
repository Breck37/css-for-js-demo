import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";

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
    border-radius: 16px;
    margin-bottom: 1.5rem;
    padding: 1rem 1rem 2rem;
    > pre {
      border-radius: 16px;
    }

    .code {
      margin: 0 auto;
    }
  }

  .block:not(last-child) {
    margin-bottom: 0;
  }

  .two {
    display: flex;
    align-items: center;

    a {
      height: 18px;
      margin-left: 0.5rem;
      color: red;
    }
  }
`;
