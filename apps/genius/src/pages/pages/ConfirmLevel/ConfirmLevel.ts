import { styled } from "styled-components";
import DalkongBG from "../../assets/images/AlkongBG.svg";

export const Container = styled.div`
  background-image: url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ConfirmLevelTitle = styled.div`
  font-size: 50px;
  padding-top: 11%;
  padding-bottom: 40px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

// CheckButton
export const ImageWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
`;

// LevelButton
export const ImageWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
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
`;

export const LevelButton = styled.button<{ bgImage: string }>`
  background-color: rgba(255, 255, 255, 0.34);
  border: 8px solid white;
  color: black;
  font-size: 130px;
  margin: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 450px;
  height: 480px;
  text-align: center;
  background-image: url(${(props) => props.bgImage});
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 35px;
  margin-top: -5px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 25px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.34);
    border: 8px solid white;
  }
`;

export const LevelButton2 = styled.button<{ bgImage: string }>`
  background-color: rgba(242, 202, 94, 0.8);
  border: 8px solid #1ee74a;
  color: black;
  font-size: 130px;
  margin: 25px;
  cursor: pointer;
  width: 450px;
  height: 480px;
  text-align: center;
  background-image: url(${(props) => props.bgImage});
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 35px;
  margin-top: -5px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 25px;

  &:hover {
    background-color: rgba(242, 202, 94, 0.8);
    border: 8px solid #1ee74a;
  }
`;
