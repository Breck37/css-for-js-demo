import React from "react";
import styles from "../../../../styles/Components.module.css";
import { ModuleCard } from "../../../../components/ModuleCard";

export const Direction = ({ onClick, selected }) => {
  return (
    <ModuleCard onClick={onClick} topic="direction" selected={selected}>
      <div className={styles.card_container}>Direction</div>
    </ModuleCard>
  );
};

export default Direction;
