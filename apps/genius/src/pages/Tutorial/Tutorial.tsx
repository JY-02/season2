// Tutorial.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Navbar2 from '../Navbar/Navbar2';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TutorialContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.div`
  background: url('src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const CharacterBubble = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.9s ease-in-out;
`;

const CharacterImage = styled.div`
  background: url('src/assets/images/character.png') no-repeat center center;
  background-size: contain;
  width: 500px;
  height: 370px;
  margin-top: 180px;
  margin-bottom: 10px;
  align-items: center;
`;

const StepContent = styled.div`
  white-space: pre-line;
  background-color: #fff;
  padding: 100px 60px;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 30%;
  font-size: 21px;
  color: #000;
  transform: translate(-50%, -90%);
  width: 100%;
  border: 1.5px solid lightseagreen;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out; /* fadeIn 애니메이션 적용 */
  line-height: 1.8;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NextButton = styled.button`
  background-color: #fff;
  color: #8DD1BD;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 5px;
  border: 2px solid skyblue;

  &:hover {
    background-color: #4da351;
    color: #fff;
    border: 2px solid skyblue;
  }

  &:focus {
    outline: 0;
  }
`;

const EndButton = styled.button`
  background-color: #fff;
  color: #5d5d5d;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 5px;
  border: 2px solid skyblue;

  &:hover {
    border: 2px solid skyblue;
    background-color: #4da351;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

const Tutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 2:
        return (
          <>
            우리 함께 동화책을 만들며 숲속을 더욱 아름답게 <br />만들어나가기 위해 여러분에게 안내할 사항이 있어요.
          </>
        );
      case 3:
        return (
          <>
            동화책을 만들면 숲속에 많은 나무와 꽃들이 자라나요! 이 숲속을 더욱 아름답게 만들기 위해 <br />
            알콩이, 달콩이가 기다리고 있답니다.
          </>
        );
      case 4:
        return (
          <>
          동화책 제작 방법에 대한 자세한 내용은 <br />선택한 캐릭터가 안내할 거예요. 
          <br />우리가 당신의 이야기를 가득 채워줄게요!       
          </>
        );
      case 5:
        return (
          <>
            동화책을 만들수록 숲속이 더욱 아름다워질거에요. <br />이제 시작해볼까요? 알콩이와 달콩이가 당신의 동화 <br />이야기를 만들어내기 위해 기다리고 있어요.
          </>
        );
      case 6:
        return (
          <>
            동화책을 완성하고 완성된 이야기를 즐겨보세요. <br />함께한 여정이 기억에 오래 남을 거예요.
          </>
        );
      case 7:
        return (
          <>
            숲속의 아름다움을 함께 만들어보실 준비가 되셨나요? <br />함께 동화책을 만들러 가볼까요?
          </>
        );
      default:
        return (
          <>
           안녕하세요! <br />우리는 이 숲속을 지키는 가이드<br />알콩이, 달콩이에요.
          </>
        );
    }
  };

  return (
    <TutorialContainer>
      <Navbar2 />
      <BackgroundImage />
      <CharacterBubble>
        <CharacterImage />
        <StepContent key={currentStep}>{getStepContent()}</StepContent> {/* 키 추가 */}
        {currentStep < 7 && (
          <ButtonContainer>
            <NextButton onClick={nextStep}>다음으로</NextButton>
          </ButtonContainer>
        )}

        {currentStep === 7 && (
          <Link to="/selectchar">
            <ButtonContainer>
              <EndButton>튜토리얼 마침</EndButton>
            </ButtonContainer>
          </Link>
        )}
      </CharacterBubble>
    </TutorialContainer>
  );
};

export default Tutorial;
