import { useState } from "react";

import ButtonSaveAndStart from "src/components/ButtonSaveAndStart";
import SetTimeBox from "src/components/SetTimeBox";
import useStorage from "src/hooks/useStorage";

import { Container } from "src/styles/components/Container";
import { TitleMain } from "src/styles/components/TitleMain";
import { HomeWrapper, HomeContainer, HomeBox } from "src/styles/pages/Home";

import modifiyTimeValue from "src/utils/modifyTimeValue";

function Home() {
  const [ workTime, setWorkTime ] = useState(25);
  const [ intervalTime, setIntervalTime ] = useState(5);
  const [ ciclesCount, setciclesCount ] = useState(3);
  
  const { addToStorage } = useStorage();

  return (
    <HomeWrapper>
      <Container>
      <HomeContainer>
          <TitleMain>Defina seu ciclo e entre no clima!</TitleMain>
          <HomeBox>
            <SetTimeBox 
              title="Trabalho" value={workTime} 
              setValueUp={() => modifiyTimeValue({ 
                state: workTime, setState: setWorkTime, isDec: false 
              })} 
              setValueDown={() => modifiyTimeValue({ 
                state: workTime, setState: setWorkTime, isDec: true 
              })} />
            <SetTimeBox 
              title="Intervalo" value={intervalTime} 
              setValueUp={() => modifiyTimeValue({ 
                state: intervalTime, setState: setIntervalTime, isDec: false 
              })}
              setValueDown={() =>  modifiyTimeValue({ 
                state: intervalTime, setState: setIntervalTime, isDec: true 
              })} />
            <SetTimeBox 
              title="Ciclos" value={ciclesCount} 
              setValueUp={() => modifiyTimeValue({ 
                state: ciclesCount, setState: setciclesCount, isDec: false 
              })}
              setValueDown={() => modifiyTimeValue({ 
                state: ciclesCount, setState: setciclesCount, isDec: true  
              })} />
          </HomeBox>
          <ButtonSaveAndStart 
            route="/start" 
            onClick={() => addToStorage({
                time: workTime,
                interval: intervalTime,
                cicles: ciclesCount
              },
              '@flashPomoTimes'
            )}
          />
        </HomeContainer>
      </Container>
    </HomeWrapper>
  )
}

export default Home;