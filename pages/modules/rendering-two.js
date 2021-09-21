import React, { useEffect, useMemo, useCallback, useState } from "react";
import Page from "../../components/Page";
import R2 from "../../components/r2";
import { OuterModuleStyled } from "../../components/styled/OuterModuleStyled";

const RenderingTwo = () => {
  return (
    <Page>
      <OuterModuleStyled>
        <h2>Rendering Logic Two</h2>
        <R2 />
      </OuterModuleStyled>
    </Page>
  );
};

export default RenderingTwo;
