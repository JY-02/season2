import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px; 
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #000;
  position: absolute;
  top: 15%; 
  left: 60px; 
`;

export const BasketContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Basket = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #000;
  top: 20%;
  background-color: rgba(255,255,255,0.4);
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid #a3a3a3;
  right: 120px;
  justify-content: right;
  position: absolute;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const BasketImage = styled.img`
  width: 50px;
  margin-right: 4px;  
  margin-left: -1px;
  margin-bottom: -10px;
  height: 50px;
`;

export const ItemBox = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap; /* 여러 줄에 걸쳐 나열 */
  justify-content: space-around; /* 간격을 균등하게 배치 */
  margin-left: 20px;
  align-items: center;
  margin-top: 200px;
  background: #fff;
  border-radius: 15px;
  padding: 20px 30px;
  flex-shrink: 0;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-left: 20px;
  margin-bottom: 100px;
  padding: 80px 30px; /* 좌우 여백 */
  gap: 5px 30px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Seeds = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-size: 24px;
  margin-left: 30px;
  background-color: #e7e7e7;
  border-radius: 15px;
  padding: 10px 30px;
  cursor: pointer;
  font-weight: normal;

  &:hover {
    font-weight:bold;
  }
`;
