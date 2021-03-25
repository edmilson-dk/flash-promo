import InfosBox from "src/components/InfosBox";
import ValueBoxRouded from "src/components/ValueBoxRouded";

import { Container } from "src/styles/components/Container";

import { CounterWrapper, CounterContainer } from "src/styles/pages/Counter";

function Counter() {
  return (
    <CounterWrapper>
      <Container>
        <CounterContainer>
          <ValueBoxRouded />
          <InfosBox />
        </CounterContainer>
      </Container>
    </CounterWrapper>
  )
}

export default Counter;