import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

const InnerFlowLayout = () => {
  return <div>FlowLayout</div>;
};

export const FlowLayout = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="flowlayout"
      selected={selected}
      innerChildren={<InnerFlowLayout />}
    >
      <div className={styles.card_container}>FlowLayout Coming Soon</div>
    </ModuleCard>
  );
};

export default FlowLayout;
