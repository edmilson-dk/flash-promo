import styled from "styled-components";

export const ButtonSaveAndStartWrapper = styled.button`
  width: 100%;
  max-width: 230px;
  padding: 0.833rem 1rem;
  background-color: var(--green);
  border-radius: 10px;

  > a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

  > a strong {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
    color: var(--white);
  }

  > a span {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      stroke: var(--white);
    }
  }
`;