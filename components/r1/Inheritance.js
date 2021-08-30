import React from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

const InnerInheritance = () => {
  return <div>Inheritance</div>;
};

export const Inheritance = ({ onClick, selected }) => {
  return (
    <ModuleCard
      onClick={onClick}
      topic="inheritance"
      selected={selected}
      innerChildren={<InnerInheritance />}
    >
      <div className={styles.card_container}>Inheritance</div>
    </ModuleCard>
  );
};

export default Inheritance;
