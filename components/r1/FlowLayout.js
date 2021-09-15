import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "../styled/InnerModuleStyled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const InnerFlowLayout = () => {
  return (
    <InnerModuleStyled>
      <div className="block">
        <h1>Flow Layout</h1>
        <div className="subtitle">Flow layout is default "layout mode"</div>
        <div className="subtitle">
          Others include positioned, flexbox and grid layout
        </div>
      </div>
      <div className="block">
        <h3>Block | Inline | Inline block</h3>
        <div className="subtitle">
          These displays are not only direction based but also include a set of
          rules
        </div>
        <SyntaxHighlighter language="css" showLineNumbers={true}>
          {`
  Inline

  Elements: can not change in width or height 
  Vertical-Padding: may work but results can be surprising. 
      (We'll cover this more in an upcoming typography module)
  Two-Exceptions: 
      - Replaced elements (image, video, canvas) 
      - Button elements (like replaced, but not quite)

  "Magic-Space": 
      - Created mainly for text
      - Can be impacted by white space
      - Can product shapes other than boxes (line-wrap)
      - Padding only on tips
      <div className="block">
          `}
        </SyntaxHighlighter>
        <div className="link">
          <a target="_blank" href="https://jsfiddle.net/breck37/20ajkrco/11/">
            Tweak Inline Behavior
          </a>
        </div>
      </div>
      <div className="block">
        <SyntaxHighlighter language="css" showLineNumbers={true}>
          {`
  Block

  Greed: Will take up as much as it can
          `}
        </SyntaxHighlighter>
      </div>
      <div className="block">
        <SyntaxHighlighter language="css" showLineNumbers={true}>
          {`
  Inline-Block

  * Internally block
  * Externally inline
    - Parent elements treat as inline
    - Can be styled as a block
          `}
        </SyntaxHighlighter>
      </div>
      <div className="block">
        <h3>Height Algorithms</h3>
        <div className="code">
          <SyntaxHighlighter language="css" showLineNumbers={true}>
            {`
  Height is special in that it defaults
  to be as small as possible in block elements...

  We've all experienced issues with coordinating height
  
  How to fix:
    - 'height: 100%' on every element before 
        your main one (including html and body)
    - 'min-height: 100%' on your main wrapper
    - dont try percentage-based heights within wrapper
              `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block">
        <h3>Width Algorithims</h3>
        <div className="code">
          <SyntaxHighlighter language="css" showLineNumbers={true}>
            {`
  Based on parent elements content space (box-sizing)

  Width: auto will allow a hungry value to grow 
  as much as its able to

  Default: block elements are “context-aware” (dynamic sizing)
  
  Measurements: completely explicit or parent relative

  Keywords: auto / min-content (intrinsic minifies based on children) / max-content (No breaks) / fit-content (dynamic)

  Min-Max: allow you to mix contraints and percentages

  (e.g
    width: 50%;
    min-width: 170px;
    max-width: 300px;
  ) 
            `}
          </SyntaxHighlighter>
          <div className="link">
            <a target="_blank" href="https://jsfiddle.net/breck37/ru4cgLxd/1/">
              Width Exercise
            </a>
          </div>
        </div>
      </div>
    </InnerModuleStyled>
  );
};

export const FlowLayout = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="flowlayout"
      selected={selected}
      baseModule="rendering-one"
      innerChildren={<InnerFlowLayout />}
    >
      <div className={styles.card_container}>
        <p className="card-title">Flow Layout</p>
      </div>
    </ModuleCard>
  );
};

export default FlowLayout;
