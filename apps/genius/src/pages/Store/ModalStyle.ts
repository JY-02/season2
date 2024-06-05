import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #ACD9CB;
  margin-top: 80px;
  padding: 75px 60px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 25px;
  background: #fff;
  border-radius: 0px;
  cursor: pointer;
  padding: 5px 10px;

  &:focus {
    outline: 0;
  }
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0 15px;
  border: 1px solid #a3a3a3;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  margin-left: 3px;
`;

export const Seeds = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const PriceWithLine = styled.span`
  position: relative;
  font-size: 18px;
  margin-left: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    width: 1px;
    height: 70%;
    background-color: #000;
    transform: translateY(-50%);
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;

export const CheckoutButton = styled.button`
  background-color: #E4589B;
  color: #fff;
  font-size: 23px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin-top: 60px;
  margin-left: 520px;
  margin-bottom: -10px;
  
`;
