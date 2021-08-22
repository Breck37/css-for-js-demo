import React from "react";
import styles from "../../styles/Components.module.css";
import styled from "styled-components";
import { ModuleCard } from "../ModuleCard";

const InnerInheritance = () => {
  return (
    <InnerWrap>
      <div>Content</div>
    </InnerWrap>
  );
};

const InheritanceCard = () => {
  return (
    <div className={`${styles.card_container} title`}>
      <div>Inheritance</div>
    </div>
  );
};

export const Inheritance = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="inheritance"
      selected={selected}
      children={<InheritanceCard />}
      innerChildren={<InnerInheritance />}
    />
  );
};

export default Inheritance;

const InnerWrap = styled.div`
  height: 200%;
`;
