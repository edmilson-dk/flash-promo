import { FiPlay, FiRepeat } from "react-icons/fi";

import {
  InfosBoxWrapper,
  InfosBoxContainer,
  InfosBoxTitle,
  InfosBoxDots,
  InfosBoxButtonsWrapper
} from "src/styles/components/InfosBox"

type InfosBoxProps = {
  title: string;
  isPause: boolean;
  ciclesCount: number;
  ciclesFinishedCount: number;
  onClickPlay: () => void;
}

function InfosBox({ 
  title , 
  onClickPlay, 
  isPause,
  ciclesCount,
  ciclesFinishedCount,
}: InfosBoxProps) {
  function generateDost(count: number) {
    const dots = [];

    for (let index = 0; index < count; index++) {
      dots.push([<span></span>]);
    }

    return dots;
  }

  return (
    <InfosBoxWrapper>
      <InfosBoxContainer>
        <InfosBoxTitle isPause={isPause}>{ title }</InfosBoxTitle>
        <InfosBoxDots countActive={ciclesFinishedCount}>
          {
            generateDost(ciclesCount).map(item => (item))
          }
        </InfosBoxDots>
        <InfosBoxButtonsWrapper>
          <button onClick={onClickPlay}>
              <span>
                <FiPlay size="100%"/>
              </span>
          </button>
        </InfosBoxButtonsWrapper>
      </InfosBoxContainer>
    </InfosBoxWrapper>
  )
}

export default InfosBox;