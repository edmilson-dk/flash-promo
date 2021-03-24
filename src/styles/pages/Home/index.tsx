import styled from "styled-components"

export const HomeWrapper = styled.main`
  width: 100%;
  height: 100vh;
  padding: 2.5rem;
  background-color: var(--dark);
`;

export const HomeBox = styled.div`
  width: 100%;
  height: 233px;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
  justify-content: center;
  align-items: center;
`;

export const HomeContainer = styled.article`
  width: 100%;
  min-height: 100%;
  display: flex;
  
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;