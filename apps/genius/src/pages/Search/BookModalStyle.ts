// ModalStyle.ts
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 60%;
  max-width: 800px;
  height: 70%;
  padding: 20px;
  margin-top: 80px;
  position: relative;
  border: 1px solid #000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: rgba(0,0,0,0.2);
  border: none;
  border-radius: 0px;
  cursor: pointer;
  font-size: 16px;
  color: #000;
`;

export const Content = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  height: 100%;
  overflow: auto;

  hr {
    border: 0;
    border-top: 1px solid #000; /* 선의 두께와 색상 설정 */
    margin: 20px 0; /* 수평선 위아래 여백 */
    margin-right: 10px;
  }

  h2 {
    font-size: 24px;
    color: #000;
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 20px;
    color: #000;
  }

  img {
    display: block;
    margin: 0 auto 20px; /* 좌우 여백을 auto로 설정하여 가운데 정렬 */
    max-width: 200px;
    width: 100%;
  }

  button {
    width: 30%;
    margin: 0 auto 20px;
    padding: 15px 30px;
    background-color: #8DD1BD;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 40px;
  }
`;


