import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TutorialContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const BackgroundImage = styled.div`
  background: url('src/assets/images/alkongBG.svg') no-repeat center center fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const CharacterBubble = styled.div`
  position: absolute;
  top: 66%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacterImage = styled.div`
  background: url('src/assets/images/alkongcharacter.png') no-repeat center center;
  background-size: contain;
  width: 400px;
  height: 400px;
  margin-top: 75px;
  margin-bottom: 10px;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const StepContent = styled.div`
  white-space: pre-line;
  background-color: #fff;
  padding: 100px 65px;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 80px;
  font-size: 21px;
  color: #000;
  transform: translate(-50%, -90%);
  width: 100%;
  border: 2px solid lightseagreen;
  text-align: center;
  animation: ${fadeIn} 1.0s ease-in-out;
  line-height: 1.8;
`;

export const ButtonContainer = styled.div` /* 새로운 컨테이너 스타일 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NextButton = styled.button`
  background-color: #fff;
  color: #8DD1BD;
  padding: 15px 35px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: -15px;
  border: 2px solid lightblue;

  &:hover {
    background-color: #4da351;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

export const EndButton = styled.button`
  background-color: #fff;
  color: #7EC7B1;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: -15px;
  border: 2px solid #7EC7B1;

  &:hover {
    color: #fff;
    background-color: #7EC7B1;
  }

  &:focus {
    outline: 0;
  }
`;