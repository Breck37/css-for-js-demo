import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

const InnerBoxModel = () => {
  return <div>BoxModel</div>;
};

export const BoxModel = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="boxmodel"
      selected={selected}
      innerChildren={<InnerBoxModel />}
    >
      <div className={styles.card_container}>BoxModel Coming Soon</div>
    </ModuleCard>
  );
};

export default BoxModel;
