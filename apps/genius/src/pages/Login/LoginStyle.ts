// LoginStyle.ts

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f0f0f0;
`;


export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin-top: 60px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 19px;
  margin-bottom: 15px;

  &:focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: medium;
  color: #fff;
  margin-top: 50px;
  background-color: #8DD1BD;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export const Divider = styled.div`
  width: 80%;
  border-bottom: 2px solid #9D9D9D;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  text-align: left;
  margin-bottom: 5px;
  font-size: 18px;
  margin-right: 60px;
  white-space: nowrap;
  max-width: 80px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AutoLoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AutoLoginLabel = styled.label`
  margin-left: 5px;
`;

export const ForgotPasswordContainer = styled.div`
  text-align: right;
`;

export const ForgotPasswordLink = styled.a`
  color: #9D9D9D;
  text-decoration: none;
  cursor: pointer;
  border-bottom : 1px solid;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
