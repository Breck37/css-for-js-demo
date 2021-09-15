import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "../styled/InnerModuleStyled";

const InnerBoxModel = () => {
  return (
    <InnerModuleStyled>
      <div className="image">
        <img src="https://tse4.mm.bing.net/th?id=OIP.jEJvpaswiDIwd0skF88H-wHaHa&pid=Api" />
      </div>
      <div className="block">
        <h1>The Box Model</h1>
        <div className="list">
          <span>
            <b>Content</b> = Person (the human being inside the coat)
          </span>
          <span>
            <b>Padding</b> = Coat Stuffing (the more stuffing there is, the more
            poofed-up the coat will be, and the more space the person will take
            up)
          </span>
          <span>
            <b>Border</b> = Coat (It has a thickness and a color, and it affects
            the person's appearance)
          </span>
          <span>
            <b>Margin</b> = Personal Space (as we've learned in recent times,
            its recommended to have 6ft of space around us)
          </span>
        </div>
        <div>
          <h3>Box-sizing: How wide do you want it?</h3>
          <div className="image">
            <img src="https://media.giphy.com/media/esR1eKgmOnxWKR627f/giphy.gif" />
          </div>
        </div>
        <div className="block">
          <div className="code">
            <SyntaxHighlighter language="html" showLineNumbers={true}>
              {`
  <style>
    section {
      width: 500px;
    }
    .box {
      width: 100%;
      padding: 20px;
      border: 4px solid;
    }

  </style>

  <section>
    <div class="box"></div>
  </section>

  // What are the dimensions of .boxs?
            `}
            </SyntaxHighlighter>
            <div className="reveal one">
              <p>Reveal</p>
              <div className="answer">Answer: 548px x 48px</div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="code">
            <SyntaxHighlighter language="html" showLineNumbers={true}>
              {`
  <style>
    * {
      box-sizing: border-box;
    }
    section {
      width: 500px;
      height: 250px;
    }
    .box {
      width: 100%;
      height: 100%;
      padding: 30px;
      border: 4px solid;
      margin: 20px;
    }
  </style>

  <section>
    <div class="box"></div>
  </section>

  // What about this one, (box)?
            `}
            </SyntaxHighlighter>
            <div className="reveal two">
              <p>Reveal</p>
              <div className="answer">Answer: 500px x 250px</div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="code">
            <SyntaxHighlighter language="html" showLineNumbers={true}>
              {`
  <style>
    * {
      box-sizing: border-box;
    }
    section {
      width: 500px;
      padding: 30px;
    }
    .box {
      width: 50%;
      height: 100%;
    }
  </style>

  <section>
    <div class="box"></div>
  </section>

  // What are the dimensions, (box)?
            `}
            </SyntaxHighlighter>

            <div className="reveal three">
              <p>Reveal</p>
              <div className="answer">Answer: 220px x 0px</div>
            </div>
          </div>
        </div>
      </div>

      <div className="block">
        <h3>Random</h3>
        <div className="code">
          <SyntaxHighlighter language="css" showLineNumbers={true}>
            {`
  Units: px, em, rem

  Shorthand: top / right / bottom / left. ( 0, 0 0, 0 10px 0,
  0 0 0 10px)

  Overwrites: ( padding: 48px, padding-top: 0px)
              `}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block">
        <h3>Border</h3>
        <div className="code">
          <SyntaxHighlighter language="css" showLineNumbers={true}>
            {`
  Properties: width style color

  Style: only required property

  Outline: used like border but doesn't affect layout 
  (no radius, can stack with border)

  Outline-offset: build gap between element (including border)

  Outline: 'none' (e.g: outline: 'none') breaks accessibility. 
  If needed, should be used with focus properties.
            `}
          </SyntaxHighlighter>
        </div>
      </div>
    </InnerModuleStyled>
  );
};

export const BoxModel = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="boxmodel"
      selected={selected}
      baseModule="rendering-one"
      innerChildren={<InnerBoxModel />}
    >
      <div className={styles.card_container}>
        <p className="card-title">Box Model</p>
      </div>
    </ModuleCard>
  );
};

export default BoxModel;
