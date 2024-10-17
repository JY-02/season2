import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: url('./src/assets/images/forest.jpg') no-repeat center center fixed;
  flex-direction: column;
  background-size: cover;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const InputContainer = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  width: 100%;
`;

export const NicknameInput = styled.input`
  padding: 15px;
  font-weight: 100;
  margin: 30px;
  border: #9D9D9D;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  font-size: 25px;
  border-radius: 40px;
  padding-left: 20px; 
  padding-right: 20px; 

  &:focus {
    outline: 0;
  }
`;

export const GreetingText = styled.p`
  color: #8DD1BD;
  display: inline;
`;

export const SubmitBtn = styled.button`
  font-weight: 100;
  padding: 15px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 23px;
  margin-top: 10px;

  &:hover {
    background-color: #2980b9;
  }

  &:focus {
    outline: 0;
  }
`;
