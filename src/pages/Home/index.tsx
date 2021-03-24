import { useState } from "react";
import ButtonStart from "src/components/ButtonStart";
import SetTimeBox from "src/components/SetTimeBox";

import { Container } from "src/styles/components/Container";
import { TitleMain } from "src/styles/components/TitleMain";
import { HomeWrapper, HomeContainer, HomeBox } from "src/styles/pages/Home";

function Home() {
  const [ workTime, setWorkTime ] = useState(25);
  const [ intervalTime, setIntervalTime ] = useState(5);
  const [ ciclesTime, setCiclesTime ] = useState(3);

  function setNewWorkTime(isDec = false) {
    if (workTime > 0) {
      !isDec 
        ? setWorkTime(workTime+1)
        : setWorkTime(workTime-1);
    }
  }

  function setNewIntervalTime(isDec = false) {
    if (intervalTime > 0) {
      !isDec 
        ? setIntervalTime(intervalTime+1)
        : setIntervalTime(intervalTime-1);
    }
  }

  function setNewCiclesTime(isDec = false) {
    if (ciclesTime > 0) {
      !isDec 
        ? setCiclesTime(ciclesTime+1)
        : setCiclesTime(ciclesTime-1);
    }
  }

  return (
    <HomeWrapper>
      <Container>
      <HomeContainer>
          <TitleMain>Defina seu ciclo e entre no clima!</TitleMain>
          <HomeBox>
            <SetTimeBox 
              title="Trabalho" value={workTime} 
              setValueUp={() => setNewWorkTime(false)} 
              setValueDown={() => setNewWorkTime(true)} />
            <SetTimeBox 
              title="Intervalo" value={intervalTime} 
              setValueUp={() => setNewIntervalTime(false)} 
              setValueDown={() => setNewIntervalTime(true)} />
            <SetTimeBox 
              title="Ciclos" value={ciclesTime} 
              setValueUp={() => setNewCiclesTime(false)} 
              setValueDown={() => setNewCiclesTime(true)} />
          </HomeBox>
          <ButtonStart route="/start" />
        </HomeContainer>
      </Container>
    </HomeWrapper>
  )
}

export default Home;