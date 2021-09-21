import React, { useState } from "react";
import Page from "../../../components/Page";
import styled from "styled-components";
import { useRouter } from "next/router";
import R1 from "../../../components/r1";
import { OuterModuleStyled } from "../../../components/styled/OuterModuleStyled";

const RenderingOne = () => {
  const router = useRouter();

  const handlePick = (selectedTopic) => {
    router.push(`/modules/rendering-one/${selectedTopic}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Page>
      <OuterModuleStyled>
        <h1>Rendering Logic One</h1>
        <R1 handlePick={handlePick} />
      </OuterModuleStyled>
    </Page>
  );
};

export default RenderingOne;
