import React, { useEffect, useMemo, useCallback, useState } from "react";
import styles from "../../styles/Components.module.css";
import { ModuleCard } from "../ModuleCard";

const Relative = () => {
  return (
    <ModuleCard>
      <div className={styles.card_container}>
        <p className="card-title">Relative</p>
      </div>
    </ModuleCard>
  );
};

export default Relative;
