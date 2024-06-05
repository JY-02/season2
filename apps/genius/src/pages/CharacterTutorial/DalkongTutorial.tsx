// Tutorial.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as TutorialStyle from './DalkongTutorialStyle';
import Navbar2 from '../Navbar/Navbar2';

const DalkongTutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 2:
        return (
          <>
            먼저, 어떤 종류의 동화를 만들지 고민해보고 <br />여러 가지 중에서 마음에 드는 <br />동화 장르를 골라봐!
          </>
        );
      case 3:
        return (
          <>
            그런 다음, 동화책 제작에 필요한 <br />간단한 정보를 입력해줘.
            이렇게 하면 동화 <br />이야기 더 재미있어질 거야!
          </>
        );
      case 4:
        return (
          <>
            이제 AI가 입력한 정보를 바탕으로 <br />동화 이야기를 만들어줄거야.<br />
            준비가 되었다면 정보를 전달해줘.
          </>
        );
      case 5:
        return (
          <>
            이제 AI가 생성한 이야기를 확인하고 <br />원하는 대로 내용을 수정할 수 있어.
            부족한 <br />부분이 있다면 언제든지 추가하고 수정해봐.
          </>
        );
      case 6:
        return (
          <>
            동화의 각 페이지에는 <br />AI가 생성한 이미지를 넣을 수 있어. <br />
            동화책을 더 생생하게 만들어줄 거야!
          </>
        );
      case 7:
        return (
          <>
            내 설명은 여기까지야!<br />
            이제 나랑 함께 동화책을 만들러 가볼까?
          </>
        );
      default:
        return (
          <>
           안녕! 나는 함께 동화책을 만들어나갈 <br /> 너의 가이드, 달콩이야.
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
        <Link to="/">
          <TutorialStyle.ButtonContainer>
          <TutorialStyle.EndButton>튜토리얼 마침</TutorialStyle.EndButton>
          </TutorialStyle.ButtonContainer>
        </Link>
      )}
      </TutorialStyle.CharacterBubble>
    </TutorialStyle.TutorialContainer>
  );
};

export default DalkongTutorial;
