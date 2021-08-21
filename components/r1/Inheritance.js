import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

export const Inheritance = ({ onClick, selected }) => {
  return (
    <ModuleCard onClick={onClick} topic="inheritance" selected={selected}>
      <div className={styles.card_container}>Inheritance</div>
    </ModuleCard>
  );
};

export default Inheritance;
