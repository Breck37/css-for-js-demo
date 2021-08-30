import React, { useEffect, useMemo, useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkItem = ({ label, route, comingSoon }) => {
  return (
    <LinkItemStyled comingSoon={comingSoon}>
      <Link href={route}>{label}</Link>
      {comingSoon ? (
        <div className="coming-soon-banner">COMING SOON</div>
      ) : null}
    </LinkItemStyled>
  );
};

export default LinkItem;

const LinkItemStyled = styled.li`
  cursor: pointer;
  width: calc(100% - 4rem);
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 10px 25px -7px rgba(0, 0, 0, 1);
  padding: 2rem;
  margin: 0 2rem 1.5rem;
  position: relative:
`;
