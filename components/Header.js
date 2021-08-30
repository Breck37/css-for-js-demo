import React, { useEffect, useMemo, useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        CSS For <strong>Javascript</strong> Devs
      </h1>
      <div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  position: relative;
  height: 6rem;
  width: 100vw;
  border-bottom: 2px solid #454dcc;
  padding: 3rem 2rem 1rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  > h1 {
    margin: 0;

    > strong {
      color: #454dcc;
      font-style: italic;
    }
  }

  > div {
    height: 100%;
    width: 40%;
    margin 0 2rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;

    > div {
      cursor: pointer;

      &:hover {
        color: #454dcc;
      }
    }
  }
`;
