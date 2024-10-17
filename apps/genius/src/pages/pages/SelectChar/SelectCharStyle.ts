// SelectCharStyle.ts

import styled from 'styled-components';

interface CharacterButtonProps {
  isAlKong?: boolean;
}

export const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const CharacterContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; 
  border: none;
  overflow: hidden; /* 이미지가 넘치지 않도록 오버플로우를 숨깁니다. */

  &:nth-child(1) {
    background-image: url('./src/assets/images/AlkongBG.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:nth-child(2) {
    background-image: url('./src/assets/images/DalkongBG.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.selected {
    border: none;
  }

  &:focus {
    outline: 0;
  }
`;

export const CharacterButton = styled.button<CharacterButtonProps>`
  position: relative;
  margin-bottom: 250px;
  font-size: 30px;
  font-weight: bold;
  padding: 20px 35px;
  border-radius: 40px;
  border: none;
  background-color: #ffffff;
  color: ${({ isAlKong }) => (isAlKong ? '#7EC7B1' : '#D057A9')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: color 0.3s, transform 0.2s; /* 글자색 및 이동 트랜지션 추가 */

  &:hover {
    color: ${({ isAlKong }) => (isAlKong ? '#6DA697' : '#B84890')};
    transform: translateY(-5px); /* 호버 시 살짝 위로 이동 */
  }
`;

export const DalKongButton = styled(CharacterButton)<CharacterButtonProps>`
  
  color: #D057A9;
  &:hover {
    color: #B84890;
    transform: translateY(-5px); /* 호버 시 살짝 위로 이동 */
  }
  &:focus {
    outline: 0;
  }
`;

export const AlKongButton = styled(CharacterButton)<CharacterButtonProps>`
  color: #7EC7B1;
  &:hover {
    color: #6DA697;
    transform: translateY(-5px); /* 호버 시 살짝 위로 이동 */
  }
  &:focus {
    outline: 0;
  }
`;

export const CharacterImage = styled.img`
  position: absolute; /* 상대적인 위치에 대비하여 절대적인 위치로 설정 */
  top: 400px; /* 버튼 아래에 위치하도록 조정 */
  margin: 0 auto;
  vertical-align: top;
  width: 400px; /* 이미지 크기 조정 */

  &:focus {
    outline: 0;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;
