// AlkongTutorial.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as TutorialStyle from './AlkongTutorialStyle';
import Navbar2 from '../Navbar/Navbar2';

const AlkongTutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 2:
        return (
          <>
            동화책 제작에 앞서서 <br />먼저, 어떤 종류의 동화를 만들지 고민해봐!
          </>
        );
      case 3:
        return (
          <>
            그런 다음, 원하는 동화 장르를 선택하고, <br />
            너가 마음에 드는 동화 주제를 골라주면 돼!
          </>
        );
      case 4:
        return (
          <>
            동화 주제를 정했다면, <br /> 이제 내가 몇 가지 질문을 할거야.<br />
            질문에 답할 선택지 개수를 골라줘!
          </>
        );
      case 5:
        return (
          <>
            선택지는 2개, 3개, 4개 중에 고를 수 있어! <br />
            내가 물어보는 것 중에 선택지를 <br /> 1가지만 골라주면 돼. <br />
          </>
        );
      case 6:
        return (
          <>
            너가 골라준 선택지를 바탕으로 <br />동화 이야기를 생성할거야!<br />
            시간이 걸릴 수도 있으니 조금만 기다려줘!
          </>
        );
      case 7:
        return (
          <>
            내 설명은 여기까지야!<br />
            이제 나랑 같이 동화책을 만들러 가볼까?
          </>
        );
      default:
        return (
          <>
           안녕! 나는 함께 동화책을 만들어나갈 <br /> 너의 가이드, 알콩이야.
          </>
        );
    }
  };
  

  return (
    <TutorialStyle.TutorialContainer>
      <Navbar2 />
      <TutorialStyle.BackgroundImage />
      <TutorialStyle.CharacterBubble>
        <TutorialStyle.CharacterImage />
        <TutorialStyle.StepContent key={currentStep}>{getStepContent()}</TutorialStyle.StepContent> {/* 키 추가 */}
        {currentStep < 7 && (
          <TutorialStyle.ButtonContainer>
            <TutorialStyle.NextButton onClick={nextStep}>다음으로</TutorialStyle.NextButton>
          </TutorialStyle.ButtonContainer>
        )}
      
      {currentStep === 7 && (
        <Link to="/genre2">
          <TutorialStyle.ButtonContainer>
          <TutorialStyle.EndButton>튜토리얼 마침</TutorialStyle.EndButton>
          </TutorialStyle.ButtonContainer>
        </Link>
      )}
      </TutorialStyle.CharacterBubble>
    </TutorialStyle.TutorialContainer>
  );
};

export default AlkongTutorial;
