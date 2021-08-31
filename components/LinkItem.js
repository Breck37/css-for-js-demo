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
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem;
  position: relative;
  margin: 0 1rem 1.5rem;
`;
