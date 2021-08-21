import React from "react";
import styled from "styled-components";

export const ModuleCard = ({ children, selected = false, onClick, topic }) => {
  const handleSelect = () => {
    console.log("Select");
    onClick(topic);
  };

  return (
    <ModuleCardStyled selected={selected} onClick={handleSelect}>
      {children}
    </ModuleCardStyled>
  );
};

const ModuleCardStyled = styled.li`
  .container {
    width: 100%;
    height: 100%;
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: ${({ selected }) => (selected ? "absolute" : "static")};
    background-color: ${({ selected }) => (selected ? "#cfdced" : "#f8f9ff")};
    cursor: ${({ selected }) => (selected ? "default" : "pointer")};

    z-index: ${({ selected }) => (selected ? 10000 : 1)};
  }
`;
