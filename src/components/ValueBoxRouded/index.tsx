import { ValueBoxRoudedWrapper, ValueBoxRoudedContainer } from "src/styles/components/ValueBoxRouded";

function ValueBoxRouded() {
  return (
    <ValueBoxRoudedWrapper>
      <ValueBoxRoudedContainer>
        <div>
          <strong>2</strong>
          <strong>5</strong>
        </div>
          <span>:</span>
        <div>
          <strong>0</strong>
          <strong>0</strong>
        </div>
      </ValueBoxRoudedContainer>
    </ValueBoxRoudedWrapper>
  )
}

export default ValueBoxRouded;