import { ValueBoxRoudedWrapper, ValueBoxRoudedContainer } from "src/styles/components/ValueBoxRouded";

type ValueBoxRoudedProps = {
  minuteLeft: number;
  minuteRight: number;
  secondLeft: number;
  secondRight: number;
}

function ValueBoxRouded({ 
  minuteLeft,
  minuteRight,
  secondLeft,
  secondRight
}: ValueBoxRoudedProps) {
  return (
    <ValueBoxRoudedWrapper>
      <ValueBoxRoudedContainer>
        <div>
          <strong>{ minuteLeft }</strong>
          <strong>{ minuteRight }</strong>
        </div>
          <span>:</span>
        <div>
          <strong>{ secondLeft }</strong>
          <strong>{ secondRight }</strong>
        </div>
      </ValueBoxRoudedContainer>
    </ValueBoxRoudedWrapper>
  )
}

export default ValueBoxRouded;