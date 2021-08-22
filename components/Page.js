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
  padding: 2rem 2rem 0;
`;

const Container = styled.div`
  height: calc(100% - 96px);
  width: 100%;
`;
