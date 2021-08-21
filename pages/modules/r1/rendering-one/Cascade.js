import React from "react";
import styles from "../../../../styles/Components.module.css";
import { ModuleCard } from "../../../../components/ModuleCard";

export const Cascade = ({ onClick, selected }) => {
  return (
    <ModuleCard onClick={onClick} topic="cascade" selected={selected}>
      <div className={styles.card_container}>Cascade</div>
    </ModuleCard>
  );
};

export default Cascade;
