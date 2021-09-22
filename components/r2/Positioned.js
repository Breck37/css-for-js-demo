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
      </div>
      <div className="block">
        <h3>Differences</h3>
        <SyntaxHighlighter>
          {`
          'static': Default, top / left, etc. have no effect.

          'relative': Most subtle position layout available. 
                - Constrains particular children
                - enables additional css properties (top / left / bottom, etc.)
                - values are in reference to natural position
                - negative values can be used
                - Siblings don't move

           Positioned layout tagline: "We don't effect 'layout'"!
                


        `}
        </SyntaxHighlighter>
      </div>
      <div className="block">
        <SyntaxHighlighter>
          {`
                static - default, top / left have no effect
                relative - most subtle, 2 things: Constrains particular children, enables additional css properties, anything but static gets top, right, bottom, left. 
                With relative, the values are in reference to its natural position
                Negative values can be used
                Doesn’t impact layout (left: -10px has the same effect as right: 10px), siblings don’t move 1st exercise
                
                Block items don't have a specified width, they can dynamically resize when, say, margin-left is increased. left, on the other hand, pushes an item around without ever changing its dimensions. 2nd Exercise
                
                Can also move inline elements 3rd Exercise
        `}
        </SyntaxHighlighter>
      </div>
    </InnerModuleStyled>
  );
};

const Positioned = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="positioned"
      selected={selected}
      baseModule="rendering-two"
      innerChildren={<InnerPositioned />}
    >
      <div className={styles.card_container}>
        <p className="card-title">Positioned</p>
      </div>
    </ModuleCard>
  );
};

export default Positioned;
