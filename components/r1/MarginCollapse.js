import React from "react";
import styles from "../../../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

export const MarginCollapse = ({ onClick, selected }) => {
  return (
    <ModuleCard onClick={onClick} topic="margincollapse" selected={selected}>
      <div className={styles.card_container}>MarginCollapse</div>
    </ModuleCard>
  );
};

export default MarginCollapse;
