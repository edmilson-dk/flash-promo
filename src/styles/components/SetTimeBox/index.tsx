import styled from "styled-components"

export const SetTimeBoxWrapper = styled.div`
  width: 100%;

  > article {
    width: 100%;
    display: grid;
    grid-template-columns: 4.166rem 1fr;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const SetTimeBoxTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.666rem;
  color: var(--white);
`;

export const SetTimeBoxButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SetTimeBoxValue = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: var(--dark-light);
  border-radius: 10px;
  box-shadow: 0 0 3px 3px rgba(244, 244, 244, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  > strong {
    font-size: 6.666rem;
    font-weight: 700;
    text-align: center;
    color: var(--white);
    line-height: 1.4;
  }
`;