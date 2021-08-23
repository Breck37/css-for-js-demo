import React, { useEffect, useMemo, useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkItem = ({ label, route }) => {
  return (
    <Link href={route}>
      <LinkItemStyled>{label}</LinkItemStyled>
    </Link>
  );
};

export default LinkItem;

const LinkItemStyled = styled.li`
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 10px 25px -7px rgba(0, 0, 0, 1);
  padding: 2rem;
  margin-bottom: 1.5rem;
`;
