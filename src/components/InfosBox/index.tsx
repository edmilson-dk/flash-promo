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
  onClickPlay: () => void;
}

function InfosBox({ title , onClickPlay }: InfosBoxProps) {
  return (
    <InfosBoxWrapper>
      <InfosBoxContainer>
        <InfosBoxTitle>{ title }</InfosBoxTitle>
        <InfosBoxDots>
          <span></span>
          <span></span>
          <span></span>
        </InfosBoxDots>
        <InfosBoxButtonsWrapper>
          <button onClick={onClickPlay}>
              <span>
                <FiPlay size="100%"/>
              </span>
            </button>
          <button>
            <span>
              <FiRepeat size="100%"/>
            </span>
          </button>
        </InfosBoxButtonsWrapper>
      </InfosBoxContainer>
    </InfosBoxWrapper>
  )
}

export default InfosBox;