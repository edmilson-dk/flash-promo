import styled, { css } from "styled-components"

type TitleProps = {
  isPause: boolean;
}

type DotsProps = {
  countActive: number;
}

export const InfosBoxWrapper = styled.div`
  width: 100%;
  background-color: transparent;
`;

export const InfosBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfosBoxTitle = styled.h3<TitleProps>`
  margin-bottom: 2.5rem;
  font-size: 3.666rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;

  ${({ isPause }) => isPause 
    ? css`color: var(--yellow);` 
    : css`color: var(--green);`
  };
`;

export const InfosBoxDots = styled.div<DotsProps>`
  margin-bottom: 2.5rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ countActive }) => countActive && css`
    span:nth-child(-n + ${countActive}) {
      background-color: var(--yellow);
    }
  `}
  
  > span + span {
    margin-left: 8px;
  }

  > span {
    margin-left: 8px;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--gray);
  }
`

export const InfosBoxButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > button {
    width: 5rem;
    height: 4.166rem;
    padding: 5px;
    border-radius: 10px;
    background-color: var(--dark-light);
    box-shadow: 0 0 3px 3px rgba(244, 244, 244, 0.2);

    &,
    > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > span {
      width: auto;
      height: 90%;
    
      > svg {
        stroke: var(--white);
      }
    }
  }
`;