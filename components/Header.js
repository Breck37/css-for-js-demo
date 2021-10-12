import React, { useEffect, useMemo, useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-title-wrap">
        <h1>
          CSS For <strong>Javascript</strong> Devs
        </h1>
        <h6>
          Based on{" "}
          <a href="https://courses.joshwcomeau.com/css-for-js">
            <strong>courses.joshwcomeau.com/css-for-js</strong>
          </a>
        </h6>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        {/* <Link href="/playground">Playground</Link> */}
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  height: 6rem;
  width: 100vw;
  border-bottom: 2px solid #454dcc;
  padding: 1rem;
  padding-left: 2rem;
  display: flex;
  align-items: flex-end;

  .header-title-wrap {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;

    h1,
    h6 {
      margin: 0;

      > strong,
      a > strong {
        color: #454dcc;
        font-style: italic;
      }
    }

    h1 {
      font-size: 1.5rem;
    }

    h6 {
      text-align: right;
    }

    @media (min-width: 800px) {
      h1 {
        font-size: 2rem;
      }
    }
  }

  .links {
    a:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
