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

    h1,
    h3 {
      text-align: center;
      margin: 0 0 1rem;
    }

    .block {
      width: 100%;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    > span {
      margin-bottom: 0.5rem;
    }
  }

  .block:last-child {
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

  .answer {
    display: none;
    width: 100%;
  }

  .reveal {
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      margin: 0;
    }

    &:hover {
      text-align: center;
      > div.answer {
        display: block;
      }
      > p {
        display: none;
      }
    }
  }

  .subtitle {
    font-size: 0.875rem;
    font-style: itallic;
    text-align: center;
    margin-bottom: 1rem;
  }

  .link {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 800px) {
    padding: 2rem 0.5rem;

    .block {
      width: 90%;
      margin-bottom: 0;
    }
  }
`;
