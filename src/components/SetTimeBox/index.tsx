import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import ControlSetTimeButton from "../ControlSetTimeButton";

import {
  SetTimeBoxWrapper,
  SetTimeBoxButtons,
  SetTimeBoxValue,
  SetTimeBoxTitle
} from "src/styles/components/SetTimeBox";

type SetTimeBoxProps = {
  value: number;
  title: string;
  setValueUp: () => void;
  setValueDown: () => void;
}

function SetTimeBox({ value, title, setValueUp, setValueDown }: SetTimeBoxProps) {
  return (
    <SetTimeBoxWrapper>
      <SetTimeBoxTitle>{ title }</SetTimeBoxTitle>
      <article>
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
      </article>
    </SetTimeBoxWrapper>
  )
}

export default SetTimeBox;