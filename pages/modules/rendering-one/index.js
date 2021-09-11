import React, { useState } from "react";
import Page from "../../../components/Page";
import styled from "styled-components";
import {
  BoxModel,
  Cascade,
  Direction,
  FlowLayout,
  Inheritance,
  MarginCollapse,
} from "../../../components/r1";
import { useRouter } from "next/router";
import R1 from "../../../components/r1";

const RenderingOne = () => {
  const router = useRouter();

  const handlePick = (selectedTopic) => {
    router.push(`/modules/rendering-one/${selectedTopic}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Page>
      <ROneStyled>
        <h1>Rendering Logic One</h1>
        <R1 handlePick={handlePick} />
      </ROneStyled>
    </Page>
  );
};

export default RenderingOne;

const ROneStyled = styled.div`
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 2rem;

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    > ul {
      height: calc(100% - 6rem);
      overflow-y: scroll;
      scrollbar-width: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 2rem;
      padding: 1rem 1rem;

      ::-webkit-scrollbar {
        display: none;
      }

      > li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0px 10px 13px -7px #000000,
          5px 5px 15px 5px rgba(0, 0, 0, 0);
        box-shadow: 0px 10px 13px -7px #000000,
          5px 5px 15px 5px rgba(0, 0, 0, 0);
      }
    }
  }
`;
