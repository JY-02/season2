// InquiryFormStyle.ts
import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const InputGroup = styled.div`
  margin-bottom: 30px;
  width: 80%;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 19px;
  
`;

export const InputField = styled.input`
  padding: 12px;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  padding: 12px;
  width: 100%;
  height: 300px; /* 조절 가능한 높이 */
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  outline: none;
  resize: vertical; /* 사용자가 수직으로 크기 조절할 수 있도록 함 */
  position: relative;
  &:focus {
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  position: absolute;
  right: 20%;

  &:hover {
    background-color: #0056b3;
  }
`;
