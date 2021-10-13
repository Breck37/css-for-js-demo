import React, { useEffect, useMemo, useCallback, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "../styled/InnerModuleStyled";

const InnerPositioned = () => {
  return (
    <InnerModuleStyled>
      <div className="block">
        <h1>Positioned Layout</h1>
        <div className="subtitle">Defining Feature: items can overlap</div>
        <div className="subtitle">
          But... it doesn't affect layout! (In-Flow){" "}
        </div>
      </div>
      <div className="block">
        <h3>Differences</h3>
        <div className="code">
          <SyntaxHighlighter language="css">
            {`
            static: {
              status: default,
              attiribute: top / left, etc. have no effect
              constrains: default,
              enabled: default,
              reference: in-flow,
              negatives: true,
              relationships: everybody is impacted,
              impact: dynamically resizes elements.
            };

            relative: {
              status: custom,
              attribute: Most subtle position layout available,
              contrains: Particular children,
              enabled: additional css properties (top / left / bottom / right),
              reference: in-flow; values are in reference to natural position,
              negatives: true,
              relationships: siblings don't move,
              impact: doesn't dynamically resize elements, such as static does.
            }
        `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="link">
        <a target="_blank" href="https://jsfiddle.net/breck37/odaftx4c/279/">
          Relative Exercise
        </a>
      </div>
    </InnerModuleStyled>
  );
};

const Positioned = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="layout"
      selected={selected}
      baseModule="positions"
      innerChildren={<InnerPositioned />}
    >
      <div className={styles.card_container}>
        <p className="card-title">Relative</p>
      </div>
    </ModuleCard>
  );
};

export default Positioned;
