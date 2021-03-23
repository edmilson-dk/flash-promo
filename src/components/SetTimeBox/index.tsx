import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import ControlSetTimeButton from "../ControlSetTimeButton";

import {
  SetTimeBoxWrapper,
  SetTimeBoxButtons,
  SetTimeBoxValue
} from "src/styles/components/SetTimeBox";

type SetTimeBoxProps = {
  value: number;
  setValueUp: () => void;
  setValueDown: () => void;
}

function SetTimeBox({ value, setValueUp, setValueDown }: SetTimeBoxProps) {
  return (
    <SetTimeBoxWrapper>
      <SetTimeBoxButtons>
        <ControlSetTimeButton 
          icon={<FiArrowUp size="100%"/>} 
          onClick={setValueUp}/>
        <ControlSetTimeButton 
          icon={<FiArrowDown size="100%"/>} 
          onClick={setValueDown}/>
      </SetTimeBoxButtons>
      <SetTimeBoxValue>
        <strong>{ value }</strong>
      </SetTimeBoxValue>
    </SetTimeBoxWrapper>
  )
}

export default SetTimeBox;