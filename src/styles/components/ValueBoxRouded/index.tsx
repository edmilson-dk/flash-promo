import styled, { css } from "styled-components";

type BoxContainerProps = {
  isPause: boolean;
}

export const ValueBoxRoudedWrapper = styled.article`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background-color: var(--dark-light);
  box-shadow: 0 0 3px 3px rgba(244, 244, 244, 0.2);
  padding: 1.25rem;
`;

export const ValueBoxRoudedContainer = styled.article<BoxContainerProps>`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  border: 5px solid;
  ${({ isPause }) => isPause
    ? css`border-color: var(--yellow);` 
    : css`border-color: var(--green);`
  }

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    > strong {
      font-size: 5rem;
      font-weight: 700;
      color: var(--white);
      text-align: center;
    }
  }

  > span {
      font-size: 5rem;
      color: var(--white);
      text-align: center;
      font-weight: 600;
    }
`;