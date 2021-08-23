import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

const InnerCascade = () => {
  return <div>Cascade</div>;
};

export const Cascade = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="cascade"
      selected={selected}
      innerChildren={<InnerCascade />}
    >
      <div className={styles.card_container}>Cascade Coming Soon</div>
    </ModuleCard>
  );
};

export default Cascade;
