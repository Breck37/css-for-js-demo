import React, { useEffect, useMemo, useCallback, useState } from "react";
import { useRouter } from "next/router";
import ModuleContainer from "../styled/ModuleContainer";
import { getParam } from "../../utils/get-param";
import Positioned from "./Positioned";

const R2 = () => {
  const router = useRouter();
  const { query } = router;
  const module = getParam({ query, key: "module" });

  const handlePick = (selectedTopic) => {
    router.push(`/modules/rendering-two/${selectedTopic}`, undefined, {
      shallow: true,
    });
  };

  return (
    <ModuleContainer>
      <ul>
        <Positioned selected={module === "positioned"} onClick={handlePick} />
      </ul>
    </ModuleContainer>
  );
};

export default R2;
