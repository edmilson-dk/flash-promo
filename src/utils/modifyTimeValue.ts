type modifiyTimeValueProps = {
  state: number;
  setState: (value: React.SetStateAction<number>) => void;
  isDec: boolean;
}

function modifiyTimeValue({ state, setState, isDec }: modifiyTimeValueProps) {
  if (!isDec && state <= 60) setState(state+1);
  if (isDec && state > 0 ) setState(state-1); 
}

export default modifiyTimeValue;