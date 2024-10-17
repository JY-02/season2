import { styled } from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.svg";
import DalkongBook from "../../assets/images/DalkongBook.svg";
import photo from "../../assets/images/MakeBookPhoto.svg";
import TextPhoto from "../../assets/images/TextImage.svg";
import SaveIcon from "../../assets/images/Save.svg";
import ContinueIcon from "../../assets/images/Continue.svg";
import MakeBookBG from "../../assets/images/MakeBookBG.svg";
import MakeBookImg from "../../assets/images/MakeBookImg.svg";
import MakeBookBtn1 from "../../assets/images/MakeBookBtn1.svg";
import MakeBookBtn2 from "../../assets/images/MakeBookBtn2.svg";
import BookCover from "../../assets/images/BookCover.jpg";
import BookReIcon from "../../assets/images/BookRe.svg";

export const Container = styled.div`
  position: relative;
  background-image: url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`;

export const BookImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 10%;
`;

export const BookImage = styled.div`
  background-image: url(${DalkongBook});
  background-position: center;
  width: 1300px;
  height: 700px;
  position: relative;
`;

export const TextBoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10%;
`;

export const TextBox = styled.div`
  position: absolute;
  top: -240%;
  right: 19%;
  transform: translateY(-30%);
  color: black;
  font-size: 28px;
  font-weight: bold;
  line-height: 2;
  text-align: center;
  background-color: white;
  border: 3px solid #aa528e;
  padding: 30px;
  width: 450px;
  height: 500px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageTextBox = styled.div`
  position: absolute;
  bottom: 600px;
  left: 620px;
  transform: translateX(-48%);
  padding: 10px 20px;
  background-color: white;
  border: 3px solid #aa528e;
  padding: 30px;
  width: 500px;
  height: 340px;
  z-index: 10;
`;

export const ImageButton = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  color: white;
  background-image: url(${photo});
  background-size: 200px, 150px;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.34);
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 450px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    background-color: #f1a3d7;
  }
`;

export const NewImage = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  color: white;
  background-image: url(${BookCover});
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.34);
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 450px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    background-color: #a2b2dc;
  }
`;

export const TextImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10%;
  position: relative;
`;

export const TextImage = styled.div`
  background-image: url(${TextPhoto});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 100px;
  position: absolute;
  top: -355px;
  left: 380px;
`;

export const CustomButton = styled.button`
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 100;
  padding: 70px;
  background-color: transparent;
  background-image: url(${SaveIcon});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const CustomButton2 = styled.button`
  position: fixed;
  top: 20px;
  right: 190px;
  z-index: 100;
  padding: 70px;
  background-color: transparent;
  background-image: url(${ContinueIcon});
  background-size: contain;
  background-repeat: no-repeat;
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

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  flex-direction: row;
`;

export const FullscreenImage = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 90px);
  background-image: url(${MakeBookBG});
  background-size: cover;
  background-position: center;
  z-index: 200;
`;

export const MakeBookImage = styled.div`
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 50vw;
  height: 50vh;
  background-image: url(${MakeBookImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 300;
`;

export const OverlayButtonWrapper = styled.div`
  position: fixed;
  top: 300px;
  left: 45%;
  transform: translateX(-50%);
  z-index: 400;
  display: flex;
  flex-direction: row;
`;

export const OverlayButton1 = styled.button`
  position: fixed;
  top: 250px;
  left: calc(50% - 10px);
  transform: translateX(-50%);
  width: 180px;
  height: 60px;
  background-image: url(${MakeBookBtn1});
  background-size: contain;
  background-color: #d9d9d9;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  z-index: 400;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const OverlayButton2 = styled.button`
  position: fixed;
  top: 250px;
  left: calc(50% + 200px);
  transform: translateX(-50%);
  width: 180px;
  height: 60px;
  background-image: url(${MakeBookBtn2});
  background-size: contain;
  background-color: #d9d9d9;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  z-index: 400;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const BottomRightButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 500;
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: transparent;
  background-image: url(${BookReIcon});
  background-size: contain;
  background-repeat: no-repeat;
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

export const Arrow_Image = styled.img`
  height: 150px;
  padding-top: 40px;
  object-fit: cover;
`;

export const ArrowButton = styled.button`
  position: absolute;
  right: 150px;
  top: 58%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }
`;
