import React, { useEffect, useMemo, useCallback, useState } from "react";
import ModuleContainer from "../styled/ModuleContainer";
import Relative from "./Relative";

const R2 = () => {
  const handlePick = (selectedTopic) => {
    router.push(`/modules/rendering-two/${selectedTopic}`, undefined, {
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

export default R2;
