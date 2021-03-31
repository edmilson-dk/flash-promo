import { ValueBoxRoudedWrapper, ValueBoxRoudedContainer } from "src/styles/components/ValueBoxRouded";

type ValueBoxRoudedProps = {
  minuteLeft: number;
  minuteRight: number;
  secondLeft: number;
  secondRight: number;
  isPause: boolean;
}

function ValueBoxRouded({ 
  minuteLeft,
  minuteRight,
  secondLeft,
  secondRight,
  isPause,
}: ValueBoxRoudedProps) {
  return (
    <ValueBoxRoudedWrapper>
      <ValueBoxRoudedContainer isPause={isPause}>
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