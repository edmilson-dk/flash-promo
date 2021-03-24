type modifiyTimeValueProps = {
  state: number;
  setState: (value: React.SetStateAction<number>) => void;
  isDec: boolean;
}

function modifiyTimeValue({ state, setState, isDec }: modifiyTimeValueProps) {
  if (state > 0) {
    !isDec 
      ? setState(state+1)
      : setState(state-1);
  }
}

export default modifiyTimeValue;