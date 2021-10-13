import React, { useEffect, useMemo, useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkItem = ({ label, route, comingSoon }) => {
  return (
    <Link href={route}>
      <LinkItemStyled comingSoon={comingSoon}>
        {label}{" "}
        {comingSoon ? (
          <div className="coming-soon-banner">COMING SOON</div>
        ) : null}
      </LinkItemStyled>
    </Link>
  );
};

export default LinkItem;

const LinkItemStyled = styled.li`
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  background-color: ${({ comingSoon }) =>
    !comingSoon ? "##fff" : "rgba(0,0,0, 0.1)"};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem;
  position: relative;
  margin: 0 1rem 1.5rem;

  &:hover {
    background-color: ${({ comingSoon }) =>
      !comingSoon ? "#454dcc" : "rgba(69, 77, 204, 0.6)"};
    color: white;
    display: flex;

    > div {
      display: block;
      position: absolute;
      color: #fff;
      width: 66%;
      right: 0;
      top: 0;
      bottom: 0;
      font-size: 82px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
  }

  > div {
    display: none;
  }
`;
