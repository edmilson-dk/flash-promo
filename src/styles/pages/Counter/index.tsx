import styled from "styled-components";

export const CounterWrapper = styled.main`
  width: 100%;
  height: 100vh;
  padding: 2.5rem 0;
  background-color: var(--dark);
`;

export const CounterContainer = styled.article`
  width: 100%;
  max-width: 500px;
  min-height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  justify-content: center;
  align-items: center;
`;