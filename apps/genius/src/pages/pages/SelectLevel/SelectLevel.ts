import { styled } from "styled-components";
import DalkongBG from "../../assets/images/AlkongBG.svg";

export const Container = styled.div`
  background: url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const SelectLevelTitle = styled.div`
  font-size: 55px;
  padding-top: 10%;
  padding-bottom: 40px;
  font-weight: bold;
  text-align: center;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
`;

export const Arrow_Image = styled.img`
  height: 150px;
  padding-top: 40px;
  object-fit: cover; /* 이미지 비율 유지 */
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover; /* 이미지 비율 유지 */
`;

export const LevelButton = styled.button<{
  bgImage: string;
  hoverImage: string;
  isSelected?: boolean;
}>`
  background-color: ${(props) =>
    props.isSelected ? "rgba(242, 202, 94, 0.8)" : "rgba(255, 255, 255, 0.34)"};
  border: 8px solid ${(props) => (props.isSelected ? "#1ee74a" : "white")};
  color: black;
  font-size: 130px;
  margin: 25px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    background-image 0.3s;
  width: 450px;
  height: 480px;
  text-align: center;
  background-image: url(${(props) =>
    props.isSelected ? props.hoverImage : props.bgImage});
  background-size: ${(props) => (props.isSelected ? "90%" : "80%")};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 35px;
  margin-top: -5px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 25px;

  &:hover {
    background-color: rgba(242, 202, 94, 0.8);
    border-color: #1ee74a;
    background-image: url(${(props) => props.hoverImage});
    background-size: 90%;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const CheckButton = styled.button<{ CheckImg: string }>`
  background-color: rgba(255, 255, 255, 0.5);
  border: 6px solid white;
  color: black;
  font-size: 50px;
  margin: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 350px;
  height: 50px;
  text-align: center;
  background-image: url(${(props) => props.CheckImg});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 70px;
  margin-top: -5px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 25px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.34);
    border: 8px solid #1ee74a;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const ImageWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
`;
