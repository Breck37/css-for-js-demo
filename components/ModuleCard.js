import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Close } from "./icons";

export const ModuleCard = ({
  children,
  selected = false,
  onClick,
  topic,
  innerChildren,
  baseModule,
}) => {
  const router = useRouter();

  const handleSelect = () => {
    onClick(topic);
  };

  const handleReset = (event) => {
    event.stopPropagation();
    router.push(`/modules/${baseModule}`);
  };

  return (
    <ModuleCardStyled selected={selected} onClick={handleSelect}>
      <CloseWrap selected={selected} onClick={handleReset}>
        <Close />
      </CloseWrap>
      <ChildrenWrap selected={selected}>{children}</ChildrenWrap>
      <ContentWrap selected={selected}>
        <InnerWrap>{innerChildren}</InnerWrap>
      </ContentWrap>
    </ModuleCardStyled>
  );
};

const ModuleCardStyled = styled.li`
  width: 100%;
  height: 100%;
  min-height: 250px;
  max-height: ${({ selected }) => !selected && "250px"};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: ${({ selected }) => (selected ? "absolute" : "static")};
  background-color: ${({ selected }) =>
    selected ? "rgba(0,0,0,0.8)" : "#fff"};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  z-index: ${({ selected }) => (selected ? 10000 : 1)};
  transition: position 0.3s;
  padding: 2.375rem;

  .title {
    display: ${({ selected }) => (selected ? "none" : "flex")};
    justify-content: center;
    align-items: center;
  }

  &:hover {
    transform: ${({ selected }) => (selected ? "none" : "scale(1.02)")};

    p.card-title {
      font-size: 4rem;
    }
  }
`;

const ChildrenWrap = styled.div`
  display: ${({ selected }) => (selected ? "none" : "block")};
`;

const CloseWrap = styled.div`
  width: 48px;
  height: 48px;
  display: ${({ selected }) => (selected ? "block" : "none")};
  position: absolute;
  top: 16px;
  right: 32px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #c2c2c2;
  }
`;

const ContentWrap = styled.div`
  display: ${({ selected }) => (selected ? "block" : "none")};
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
`;

const InnerWrap = styled.div`
  margin: 3.375rem 0 0;
  height: calc(100% - 3.375rem);
  border-radius: 0.5rem;
  background-color: #fff;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
