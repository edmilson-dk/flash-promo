import { ReactNode } from "react";

import { ButtonWrapper } from  "src/styles/components/ControlSetTimeButton";

type ControlSetTimeButtonProps = {
  icon: ReactNode;
  onClick: () => void;
}

function ControlSetTimeButton({ icon, onClick }: ControlSetTimeButtonProps) {
  return (
    <ButtonWrapper type="button" onClick={onClick}>
      <span>{ icon }</span>
    </ButtonWrapper>
  )
}

export default ControlSetTimeButton;