import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "../styled/InnerModuleStyled";

const InnerCascade = () => {
  return (
    <InnerModuleStyled>
      <div className="block">
        <h1>Cascade</h1>
        The ultimate specificity showdown between two fighters
      </div>
      <div className="block">
        Consider the following
        <div className="code">
          <SyntaxHighlighter language="html" showLineNumbers={true}>
            {`
            <style>
                p {
                  font-weight: bold;
                  color: hsl(0deg 0% 10%);
                }

                .introduction {
                  color: violet;
                }
            </style>

            <p class="introduction">
              Hello world
            </p>
            
            // Why does violet win?...
            `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block">
        How might we show how this works in javascript? (Think Butter...)
        <div className="code">
          <SyntaxHighlighter language="javascript" showLineNumbers={true}>
            {`
              const stylesToApply = {
                ...inheritedStyles, // color, font-size, etc
                ...tagStyles, // p, div, body, etc
                ...classStyles, // .class
                ...idStyles, // #class
                ...inlineStyles, // style=""
                ...importantStyles, // !important
              }
            `}
          </SyntaxHighlighter>
        </div>
      </div>
    </InnerModuleStyled>
  );
};

export const Cascade = ({ onClick, selected }) => {
  console.log("IN CASCADE");
  return (
    <ModuleCard
      onClick={onClick}
      topic="cascade"
      selected={selected}
      baseModule="rendering-one"
      innerChildren={<InnerCascade />}
    >
      <div className={styles.card_container}>
        <p className="card-title">Cascade</p>
      </div>
    </ModuleCard>
  );
};

export default Cascade;
