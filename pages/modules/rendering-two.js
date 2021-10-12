import React, { useEffect, useMemo, useCallback, useState } from "react";
import Page from "../../components/Page";
import R2 from "../../components/positions";
import { OuterModuleStyled } from "../../components/styled/OuterModuleStyled";

const RenderingTwo = () => {
  return (
    <Page>
      <OuterModuleStyled>
        <R2 />
      </OuterModuleStyled>
    </Page>
  );
};

export default RenderingTwo;
