import React, { useEffect, useMemo, useCallback, useState } from "react";
import { useRouter } from "next/router";
import ModuleContainer from "../styled/ModuleContainer";
import { getParam } from "../../utils/get-param";
import Relative from "./Relative";

const Positions = () => {
  const router = useRouter();
  const { query } = router;
  const module = getParam({ query, key: "module" });

  const handlePick = (selectedTopic) => {
    router.push(`/modules/positions/${selectedTopic}`, undefined, {
      shallow: true,
    });
  };

  return (
    <ModuleContainer>
      <ul>
        <Relative selected={module === "relative"} onClick={handlePick} />
      </ul>
    </ModuleContainer>
  );
};

export default Positions;
