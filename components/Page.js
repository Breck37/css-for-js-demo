import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <PageStyled>
      <Header />
      <Container>{children}</Container>
    </PageStyled>
  );
}

const PageStyled = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  height: calc(100% - 96px);
  width: 100%;
`;
