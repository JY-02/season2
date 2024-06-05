import styled from 'styled-components';

export const BodyContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('./assets/dalkong.jpg');
`;

export const QuestionText = styled.div`
  font-size: 35px;
  margin-bottom: 50px;
  text-align: center;
  color: #ffffff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const OptionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #000000;
  font-size: 60px;
  border-radius: 50px;
  width: 400px;
  height: 500px;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  border: 2px solid #9b9b9b;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 0 rgba(0, 0, 0, 0);
    color: #ffffff;
    background-color: #73aed5;
    border-color: #3498db;
  }

  &.selected {
    background-color: #3498db;
    color: #ffffff !important;
    border-color: #3498db !important;
  }
`;

export const ConfirmationMessage = styled.div`
  font-size: 24px;
  margin-top: 50px;
  text-align: center;
  color: #ffffff;
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const ConfirmationButton = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #3498db;
    color: #ffffff;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
