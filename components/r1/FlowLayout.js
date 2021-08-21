import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

export const FlowLayout = ({ onClick, selected }) => {
  return (
    <ModuleCard onClick={onClick} topic="flowlayout" selected={selected}>
      <div className={styles.card_container}>FlowLayout</div>
    </ModuleCard>
  );
};

export default FlowLayout;
