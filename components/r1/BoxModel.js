import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";
import { InnerModuleStyled } from "./styled/InnerModuleStyled";

// _Box Model_
//       * Content (Person) / Padding (Coat stuffing) / Border (coat) / Margin (Personal Space)
//       * Box-sizing
//       * border-box vs content-box quiz

// * _Padding_
//       * Inner space
//       * Units px, em, rem
//       * shorthand top / right / bottom / left
//       * overwrites ( padding: 48px, padding-top: 0px; )

// * _Border_
//       * Width, Style, Color
//       * style only required field
//       * Fonts color by default (currentColor explicitly)
//       * Border Radius corners vs sides
//       * An outline property can be used the exact same way as a border but it doesn’t affect layout. There is no radius and can be stacked on top of a border.
//       * Outline-offset builds gap between element and outline
//       * `outline: none` shouldn’t be used as it breaks accessibility. There should be focus properties applied when this is needed

// * _Margin_
//       * Pits against two fighters (p tag with a class / Specificity)
//      Exercise
//           - card wrapper with padding,
//           - p tags with content
// 	  - image width 100% (images are replaced/embedded elements, videos/canvas)

const InnerBoxModel = () => {
  return (
    <InnerModuleStyled>
      <div className="image">
        <img src="https://tse4.mm.bing.net/th?id=OIP.jEJvpaswiDIwd0skF88H-wHaHa&pid=Api" />
      </div>
      <div className="block">
        The Box Model
        <div>
          <span>Content = Person (the human being inside the coat)</span>
          <span>
            Padding = Coat Stuffing (the more stuffing there is, the more
            poofed-up the coat will be, and the more space the person will take
            up)
          </span>
          <span>
            Border = Coat (It has a thickness and a color, and it affects the
            person's appearance)
          </span>
          <span>
            Margin = Personal Space (as we've learned in recent years, it's good
            to have 2 meters (6 feet) of space around us)
          </span>
        </div>
        <div>
          Box-sizing: How wide do you want it?
          <div>
            <img
              style={{ height: 50, width: 50 }}
              src="https://media.giphy.com/media/esR1eKgmOnxWKR627f/giphy.gif"
            />
          </div>
        </div>
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

              // What are the dimensions?
            `}
          </SyntaxHighlighter>

          <div>Answer: 548px x 48px</div>
        </div>
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

              // What about this one?
            `}
          </SyntaxHighlighter>

          <div>Answer: 500px x 250px</div>
        </div>
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

              // What are the dimensions?
            `}
          </SyntaxHighlighter>

          <div>Answer: 220px x 0px</div>
        </div>
      </div>

      <div className="block">
        Random
        <div className="code">
          <div>* Units px, em, rem</div>
          <div> * shorthand top / right / bottom / left </div>
          <div>* overwrites ( padding: 48px, padding-top: 0px) </div>
        </div>
      </div>
      <div className="block">
        Border
        <div className="code">
          <div> * Width, Style, Color * style only required field</div>
          <div>
            * An outline property can be used the exact same way as a border but
            it doesn’t affect layout. There is no radius and can be stacked on
            top of a border.
          </div>
          <div>* Outline-offset builds gap between element and outline</div>
          <div>
            * `outline: none` shouldn’t be used as it breaks accessibility.
            There should be focus properties applied when this is needed
          </div>
        </div>
      </div>
      <div className="block">Margin</div>
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
      <div className={styles.card_container}>BoxModel Coming Soon</div>
    </ModuleCard>
  );
};

export default BoxModel;
