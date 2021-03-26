function formatTime(fullTime: number) {
  const minutes = Math.floor(fullTime / 60);
  const seconds = fullTime % 60;

  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

  return {
    minuteLeft: Number(minuteLeft),
    minuteRight: Number(minuteRight),
    secondLeft: Number(secondLeft),
    secondRight: Number(secondRight),
  }
}

export default formatTime;