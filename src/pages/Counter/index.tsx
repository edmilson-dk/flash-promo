import { useEffect, useState } from "react";

import useStorage from "src/hooks/useStorage";

import InfosBox from "src/components/InfosBox";
import ValueBoxRouded from "src/components/ValueBoxRouded";

import { Container } from "src/styles/components/Container";
import { CounterWrapper, CounterContainer } from "src/styles/pages/Counter";

import formatTime from "src/utils/formatTime";

function Counter() {
  const { getToStorage } = useStorage();

  const [ finishedCicles, setfinishedCicles ] = useState(0);
  const [ cicles, setCicles ] = useState(0);
  const [ isActive, setIsActive ] = useState(false);
  const [ isIntervalActive, setisIntervalActive ] = useState(false);
  const [ time, setTime ] = useState(0);
  const [ intervalTime, setIntervalTime ] = useState(0);

  const [ fullTime, setFullTime ] = useState({
    minuteLeft: 0,
    minuteRight: 0,
    secondLeft: 0,
    secondRight: 0,
  });

  useEffect(() => {
    const { time, interval, cicles } = getToStorage('@flashPomoTime');

    setCicles(cicles);
    setIntervalTime(interval * 60);
    setTime(time * 60);
  }, []);

  useEffect(() => {
    const result = isIntervalActive 
     ? formatTime(intervalTime)
     : formatTime(time)

    setFullTime({...result});
  }, [time, intervalTime, isIntervalActive]);

  function handlerFinishedCicle(time: number) {
    setTime(time * 60);
    setfinishedCicles(finishedCicles+1);
    setisIntervalActive(true);
  }

  useEffect(() => {
    if (isActive && finishedCicles < cicles) {
      if (!isIntervalActive && time > 0) {
        setTimeout(() => setTime(time -1), 1000);
      }
      
      if (time <= 0){
        const { time } = getToStorage('@flashPomoTime');
        handlerFinishedCicle(time);   
      }
      
      if (isIntervalActive){
        if (intervalTime > 0) {
          setTimeout(() => setIntervalTime(intervalTime -1), 1000);
        } else {
          const { interval } = getToStorage('@flashPomoTime');
          setIntervalTime(interval * 60);
          setisIntervalActive(false);
        }
      } 
    }
  }, [ isActive, time, intervalTime, isIntervalActive ])

  return (
    <CounterWrapper>
      <Container>
        <CounterContainer>
          <ValueBoxRouded 
            minuteLeft={fullTime.minuteLeft}
            minuteRight={fullTime.minuteRight}
            secondLeft={fullTime.secondLeft}
            secondRight={fullTime.secondRight}
            isPause={isIntervalActive}
          />
          <InfosBox 
            title={isIntervalActive ? 'Pausa' : 'Trabalho'}
            isPause={isIntervalActive}
            onClickPlay={() => setIsActive(true)}
            ciclesCount={cicles}
            ciclesFinishedCount={finishedCicles}
          />
        </CounterContainer>
      </Container>
    </CounterWrapper>
  )
}

export default Counter;