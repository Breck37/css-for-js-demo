import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "./styled/InnerModuleStyled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// * default layout mode (VS grid / flex)
// * inline/block
// * inline (No fuss elements, only some properties apply, no width/height)
//        - magic space created mainly for text (line-height: 0, display: block)
//        - whitespace can impact
//        - can produce shapes other than boxes (line-wrap, use border on strong tag in p tag)
//        - Padding only on tips via line-wrap
// * block (Greedy, fit-content helper firefox needs vendor prefix)

// ￼
//   * inline-block: styled like a block but treated like an inline
//         - doesn’t line-wrap

// * _Width Algorithms_
//  *    Based on parent elements content space (percentages)
//   *   Width: auto will allow a hungry value to grow as much as its able to
//   * by default, block elements are “context-aware” (dynamic sizing)
//   * Measurements: completely explicit or parent relative
//   * Keywords: auto / min-content (intrinsic minifies based on children) / max-content (No breaks) / fit-content (dynamic)
//  * min & max width allow you to mx contraints and percentages
//  * figures and captions

// * _HeightAlgorithms_
//  * Height is different in that it defaults to be as small as possible in block elements
// ￼

const InnerFlowLayout = () => {
  return (
    <InnerModuleStyled>
      <div className="block">
        Flow layout is default "layout mode"
        <div>
          Others include positioned layout, flexboxy layout and grid layout
        </div>
      </div>
      <div className="block">
        Block Vs Inline vs Inline block
        <div>
          Not only direction but also a set of rules Including: <br />
          Including: <br />
          Inline elements can not change in width or height <br />
          Vertical padding may work but results can be surprising. We'll cover
          this more in an upcoming typography module. <br />
          Two Exceptions: <br />
          Replaced elements (image, video, canvas) <br />
          Button elements <br />
        </div>
      </div>
      <div className="block">
        Inline
        <div>
          - magic space created mainly for text (line-height: 0, display: block)
          - whitespace can impact - can produce shapes other than boxes
          (line-wrap, use border on strong tag in p tag) - Padding only on tips
          via line-wrap // Link to Fiddl
        </div>
      </div>
      <div className="block">Block = Greedy</div>
      <div className="block">
        Inline block (Internal block, External inline) Parent treats as inline,
        but can be styled as a block
      </div>
      <div className="block">
        Tweak behavior (Link to Fiddle, Slice vs clone)
      </div>
      <div className="block">
        Height Algorithms
        <div className="code">
          <SyntaxHighlighter>
            {`Height is different in that it defaults to be as small as possible in block elements
            
            How to fix:
              height: 100% on every element before your main one (including html and body)
              min-height: 100% on your main wrapper
              dont try percentage-based heights within wrapper
              `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block">
        Width Algorithims
        <div className="code">
          <SyntaxHighlighter>
            {`
                   *    Based on parent elements content space (percentages)
                   *   Width: auto will allow a hungry value to grow as much as its able to
                   * by default, block elements are “context-aware” (dynamic sizing)
                   * Measurements: completely explicit or parent relative
                   * Keywords: auto / min-content (intrinsic minifies based on children) / max-content (No breaks) / fit-content (dynamic)
                  * min & max width allow you to mx contraints and percentages
                  * figures and captions
                  
            `}
          </SyntaxHighlighter>
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
      <div className={styles.card_container}>FlowLayout Coming Soon</div>
    </ModuleCard>
  );
};

export default FlowLayout;
