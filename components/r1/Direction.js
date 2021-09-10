import React from "react";
import { Prism as SyntaxHighligher } from "react-syntax-highlighter";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "./styled/InnerModuleStyled";

const InnerDirection = () => {
  return (
    <InnerModuleStyled>
      <div className="block">
        <h1>Direction</h1>
        In general, CSS mechanics and terms are "inherited" from the print world
        (e.g Margin / Padding)
      </div>
      <div className="block">
        Default CSS has vertically-oriented blocks and horizontally-oriented
        words
      </div>
      <div className="block">
        Enter <b>"Logical"</b> properties ( Click{" "}
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties"
        >
          here
        </a>{" "}
        to learn more)
        <div className="code">
          <SyntaxHighligher language="css" showLineNumbers={true}>
            {`  
              p {
                display: block;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
              }

              * There are logical variants for padding, border, 
              and overflow as well. 

              * By using these properties, your alignments 
              can be dynamic depending on user language. 
              (e.g Arabic will be inverse)
            `}
          </SyntaxHighligher>
        </div>
      </div>
    </InnerModuleStyled>
  );
};

export const Direction = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="direction"
      selected={selected}
      baseModule="rendering-one"
      innerChildren={<InnerDirection />}
    >
      <div className={styles.card_container}>
        <p className="card-title">Direction</p>
      </div>
    </ModuleCard>
  );
};

export default Direction;
