// SignUpStyle.ts

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  top: 40px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px;
  justify-content: center;
  overflow-x: hidden;
  background-color: #f0f0f0;
  height: 100vh;
  position: relative;
  
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
  
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;

  &:focus {
    outline: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 30%;
  padding: 15px 10px;
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 50px;
  position: absolute;
  border: none;
  background-color: #8DD1BD;
  cursor: pointer;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    border: 2px solid #d9d9d9;
  }
  &:focus {
    outline: 0;
  }
`;

export const Divider = styled.div`
  width: 90%;
  border-bottom: 2px solid #9D9D9D;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Label = styled.div`
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  margin-right: 30px;
  white-space: nowrap;
  max-width: 100px;
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const PhoneInputBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Hyphen = styled.span`
  margin-left: 0;
  margin-bottom: 20px;
  margin-right: 25px;
  font-size: 20px;
  font-weight: lighter;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const FlexContainer = styled.div`
  flex: 1;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const ErrorMessage = styled.div`
  color: #FF0000;
  font-size: 14px;
  margin-top: 5px;
`;

export default {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Divider,
  Label,
  PhoneInputContainer,
  PhoneInputBox,
  Hyphen,
  Row,
  FlexContainer,
  CheckboxLabel,
  Checkbox,
  ErrorMessage,
};
