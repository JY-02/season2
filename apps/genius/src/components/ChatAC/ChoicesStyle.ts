import styled from "styled-components";

export const ChoiceButton = styled.button`
  display: block;
  margin: 9px;

  background: #b5e4f8;
  color: #333;
  font-size: 30px;

  width: 570px;
  height: fit-content; /* 변경된 부분 */

  &:hover {
    border: 4px solid #05ff00;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChoiceContainer = styled.div`
  /* Rectangle 65 */
  padding: 10px;
  width: fit-content; /* 변경된 부분 */
  height: fit-content; /* 변경된 부분 */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  /* 세로 중앙 정렬을 위한 스타일 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
`;
