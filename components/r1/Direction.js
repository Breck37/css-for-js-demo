import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

const InnerDirection = () => {
  return <div>Direction</div>;
};

export const Direction = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="direction"
      selected={selected}
      innerChildren={<InnerDirection />}
    >
      <div className={styles.card_container}>Direction Coming Soon</div>
    </ModuleCard>
  );
};

export default Direction;
