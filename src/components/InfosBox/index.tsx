import { FiPlay, FiRepeat } from "react-icons/fi";

import {
  InfosBoxWrapper,
  InfosBoxContainer,
  InfosBoxTitle,
  InfosBoxDots,
  InfosBoxButtonsWrapper
} from "src/styles/components/InfosBox"

function InfosBox() {
  return (
    <InfosBoxWrapper>
      <InfosBoxContainer>
        <InfosBoxTitle>Trabalho</InfosBoxTitle>
        <InfosBoxDots>
          <span></span>
          <span></span>
          <span></span>
        </InfosBoxDots>
        <InfosBoxButtonsWrapper>
          <button>
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