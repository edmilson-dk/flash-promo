import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 3.333rem;
  height: 3.333rem;
  border-radius: 50%;
  background-color: var(--green);
  
  & + & { margin-top: 1.666rem; }

  &,
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > span {
    width: 90%;
    height: 90%;

    > svg {
      stroke: var(--white);
    }
  }
`;