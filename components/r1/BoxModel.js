import React from "react";
import styles from "../../../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

export const BoxModel = ({ onClick, selected }) => {
  return (
    <ModuleCard onClick={onClick} topic="boxmodel" selected={selected}>
      <div className={styles.card_container}>BoxModel</div>
    </ModuleCard>
  );
};

export default BoxModel;
