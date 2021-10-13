import React, { useState } from "react";
import Page from "../../../components/Page";
import styled from "styled-components";
import { useRouter } from "next/router";
import Rendering from "../../../components/rendering";
import { OuterModuleStyled } from "../../../components/styled/OuterModuleStyled";

const RenderingPage = () => {
  const router = useRouter();

  const handlePick = (selectedTopic) => {
    router.push(`/modules/rendering/${selectedTopic}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Page>
      <OuterModuleStyled>
        <h1>Rendering Logic One</h1>
        <Rendering handlePick={handlePick} />
      </OuterModuleStyled>
    </Page>
  );
};

export default RenderingPage;
