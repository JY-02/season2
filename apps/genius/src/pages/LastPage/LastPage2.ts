import { styled } from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.svg";
import LastPageBook from "../../assets/images/LastPageBook.svg";
import LastPageBtn1 from "../../assets/images/LastPageBtn1.jpg";
import LastPageBtn2 from "../../assets/images/LastPageBtn2.jpg";
import Barcode from "../../assets/images/Barcode.svg";
import BaroBtn from "../../assets/images/BaroBtn.svg";
import ExitBtn from "../../assets/images/ExitBtn.svg";
import LastPageAC from "../../assets/images/LastPageAC.png";

export const Container = styled.div`
  position: relative;
  background-image: url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const BookImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 8%;
  position: relative;
`;

export const BookImage = styled.div`
  background-image: url(${LastPageBook});
  background-position: center;
  width: 1300px;
  height: 700px;
  position: relative;
  left: -150px;
`;

export const UpperTextBox = styled.div`
  color: black;
  font-size: 17px;
  font-weight: normal;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 700px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(270deg);
  position: absolute;
  top: 22%; 
  left: 44.5%;
  transform: translate(-50%, -50%) rotate(270deg);
  z-index: 3;
`;

export const TextBox = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 700px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(270deg);
  position: absolute;
  top: 57%; 
  left: 43%;
  transform: translate(-50%, -50%) rotate(270deg);
  z-index: 3;
`;

export const SmallTextBox = styled.div`
  color: black;
  font-size: 16.5px;
  font-weight: normal;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(270deg);
  position: absolute;
  top: 92%;
  left: 44.3%;
  transform: translate(-50%, -50%) rotate(270deg);
  z-index: 3;
`;

export const Button1 = styled.button`
  background-image: url(${LastPageBtn1});
  background-size: cover;
  background-repeat: no-repeat;
  width: 560px;
  height: 565px;
  position: absolute;
  top: 56%;
  left: 24%;
  transform: translate(-50%, -50%);
  border: none;
  cursor: pointer;
  z-index: 3;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const Button2 = styled.button`
  background-image: url(${LastPageBtn2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 530px;
  height: 565px;
  position: absolute;
  top: 56%;
  left: 61%;
  transform: translate(-50%, -50%);
  border: none;
  cursor: pointer;
  z-index: 3;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const BarcodeImage = styled.div`
  background-image: url(${Barcode});
  background-size: contain;
  background-repeat: no-repeat;
  width: 160px;
  height: 118px;
  position: absolute;
  left: 155px;
  z-index: 4;
  bottom: -38px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: absolute;
  top: 20%;
  left: 76%;
  z-index: 3;
`;

export const NewButton1 = styled.button`
  background-image: url(${BaroBtn});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 51px;
  height: 100px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const NewButton2 = styled.button`
  background-image: url(${ExitBtn});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 51px;
  height: 100px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const LastPageACImage = styled.div`
  background-image: url(${LastPageAC});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60vw;
  height: 60vh;
  position: absolute;
  top: 380px;
  right: -650px;
  z-index: 5;
`;
