import React, { useState } from "react";
import Page from "../../components/Page";
import styled from "styled-components";
import {
  BoxModel,
  Cascade,
  Direction,
  FlowLayout,
  Inheritance,
  MarginCollapse,
} from "../../components/r1";

const RenderingOne = () => {
  const [selected, setSelected] = useState("");

  const checkSelected = (component) => {
    return Boolean(selected === component);
  };

  const handlePick = (selectedTopic) => {
    console.log({ selectedTopic });
    setSelected(selectedTopic);
  };
  console.log({ selected });
  return (
    <Page>
      <ROneStyled>
        <h1>Rendering Logic One</h1>
        <div>
          <ul>
            <Inheritance
              selected={checkSelected("inheritance")}
              onClick={handlePick}
            />
            <Cascade selected={checkSelected("cascade")} onClick={handlePick} />
            <Direction
              selected={checkSelected("direction")}
              onClick={handlePick}
            />
            <BoxModel
              selected={checkSelected("boxmodel")}
              onClick={handlePick}
            />
            <FlowLayout
              selected={checkSelected("flowlayout")}
              onClick={handlePick}
            />
            <MarginCollapse
              selected={checkSelected("margincollapse")}
              onClick={handlePick}
            />
          </ul>
        </div>
      </ROneStyled>
    </Page>
  );
};

export default RenderingOne;

const ROneStyled = styled.div`
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;

  > div {
    height: calc(100% - 82px);

    > ul {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 1rem;
      padding: 0 0 1rem;

      > li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0px 10px 13px -7px #000000,
          5px 5px 15px 5px rgba(0, 0, 0, 0);
        box-shadow: 0px 10px 13px -7px #000000,
          5px 5px 15px 5px rgba(0, 0, 0, 0);

        &:hover {
          transform: scale(1.02);
        }
      }
    }
  }
`;
