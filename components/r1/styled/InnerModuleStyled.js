import styled from "styled-components";

export const InnerModuleStyled = styled.div`
  padding: 2rem 2rem 0;
  font-family: serif;
  font-size: 1.15rem;

  .block {
    width: 75%;
    margin: 0 auto;
    border-radius: 16px;
    margin-bottom: 1.5rem;
    padding: 1rem 1rem 2rem;
    > pre {
      border-radius: 16px;
    }

    .code {
      margin: 0 auto;
    }
  }

  .block:not(last-child) {
    margin-bottom: 0;
  }

  .two {
    display: flex;
    align-items: center;

    a {
      margin-left: 0.5rem;
    }
  }

  a {
    height: 18px;
    color: red;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 200px;
      height: 200px;
    }
  }
`;
