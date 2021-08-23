import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

const InnerMarginCollapse = () => {
  return <div>MarginCollapse</div>;
};

export const MarginCollapse = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="margincollapse"
      selected={selected}
      innerChildren={<InnerMarginCollapse />}
    >
      <div className={styles.card_container}>MarginCollapse Coming Soon</div>
    </ModuleCard>
  );
};

export default MarginCollapse;
