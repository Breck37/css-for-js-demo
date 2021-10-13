import { useRouter } from "next/router";
import { getParam } from "../../utils/get-param";

import { Inheritance } from "./Inheritance";
import { Cascade } from "./Cascade";
import { Direction } from "./Direction";
import { BoxModel } from "./BoxModel";
import { FlowLayout } from "./FlowLayout";
import { MarginCollapse } from "./MarginCollapse";
import ModuleContainer from "../styled/ModuleContainer";

export default function Rendering({ handlePick }) {
  const router = useRouter();
  const { query } = router;
  const module = getParam({ query, key: "module" });

  return (
    <ModuleContainer>
      <ul>
        <Inheritance selected={module === "inheritance"} onClick={handlePick} />
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
  );
}
