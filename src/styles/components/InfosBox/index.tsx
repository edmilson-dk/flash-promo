import styled from "styled-components"

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

export const InfosBoxTitle = styled.h3`
  margin-bottom: 2.5rem;
  font-size: 3.666rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  color: var(--green);
`;

export const InfosBoxDots = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > span + span {
    margin-left: 8px;
  }

  > span {
    width: 0.666rem;
    height: 0.666rem;
    border-radius: 50%;
    background-color: var(--green);
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