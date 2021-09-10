import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "./styled/InnerModuleStyled";

// *  Earlier, we talked about how margin is akin to "personal space"; with COVID, we need to keep 6 feet away from other folks.
// When we think about it, though, that 6 feet can be "shared". If each person has a 6-foot bubble, we don't actually need to be 12 feet away!
//       * Only vertical margins collapse (block margins)
// html {
//   writing-mode: vertical-lr;
// }
//       * Only collapse in flow layout (position, grid, flex, flow)
//       * Only adjacent elements collapse (<br />)
//       * Bigger margin wins
//       * Nesting doesn’t help
//       * Blocked by padding or border
//       * Blocked by gap (taller parent than child with margin)
//       * Margin must be touching to collapse
//       * Can collapse same direction ( every element has 0px margin, margin gets absorbed)
//       * More than two margins can collapse into the same
//       * Surprisingly negative margins collapse as well (Hacky but can be used if you don’t control one of the margins)
// ￼
//       Solution? Layout components: Different margins in different locations

// * Braid concept: https://seek-oss.github.io/braid-design-system/components/Stack/

const InnerMarginCollapse = () => {
  return (
    <InnerModuleStyled>
      <div className="block">
        Shared space vs Personal space
        <div className="code">
          <SyntaxHighlighter language="html">
            {`          
            In the box-model section, we brought up how margin can be similar to
            personal space and related it to covid and the 6ft of space. If you
            think about it, if each person has a 6ft bubble - that would mean 12ft
            of space. Thus, the bubble becomes "shared".
          `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block">
        Rules
        <div className="code">
          <SyntaxHighlighter>{`
            * Only Vertical Marins Collapse
              (In the early days, CSS wasn't intended to be used for layouts. 
              The people writing the spec were imagining headings and paragraphs, 
              not columns and sidebars. So they decided horizontal shouldn't collapse)

            * Only collapse in Flow layout (position, grid, flex)

            * Bigger margin wins

            * Blocked by padding / border

            * Blocked by gap 

            * Must be touching to consititute collapse

            * Can collapse in same direction
              (0px margin is still a collapsible margin. 
              
              Each section has 0px top margin, and it gets combined with the 32px 
              top margin on the paragraph. 
              Since 32px is the larger of the two, it wins.)

            * More than 2 margins can be involved in collapse

            * Can also involve negative margins
          `}</SyntaxHighlighter>

          <a target="_blank" href="https://jsfiddle.net/breck37/60u7p1gr/44/">
            Rules Exercise
          </a>
        </div>
      </div>

      <div className="block">
        Braid Concept
        <div className="detail">
          Solution for handling these tricks? Look no further than our very own
          Stack component... Or, take a look at the{" "}
          <a href="https://seek-oss.github.io/braid-design-system/">
            Braid Design system
          </a>
        </div>
      </div>
    </InnerModuleStyled>
  );
};

export const MarginCollapse = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="margincollapse"
      selected={selected}
      baseModule="rendering-one"
      innerChildren={<InnerMarginCollapse />}
    >
      <div className={styles.card_container}>Margin Collapse</div>
    </ModuleCard>
  );
};

export default MarginCollapse;
