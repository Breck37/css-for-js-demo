import React, { useEffect, useMemo, useCallback, useState } from "react";
import ModuleContainer from "../styled/ModuleContainer";

const R2 = () => {
  return (
    <div>
      <ModuleContainer>
        <ul>
          <Inheritance
            selected={module === "inheritance"}
            onClick={handlePick}
          />
          <Cascade selected={module === "cascade"} onClick={handlePick} />
          <Direction selected={module === "direction"} onClick={handlePick} />
          <BoxModel selected={module === "boxmodel"} onClick={handlePick} />
          <FlowLayout selected={module === "flowlayout"} onClick={handlePick} />
          <MarginCollapse
            selected={module === "margincollapse"}
            onClick={handlePick}
          />
        </ul>
      </ModuleContainer>
    </div>
  );
};

export default R2;
