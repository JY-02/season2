import styled from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.svg";
import MakeBookNext from "../../assets/images/MakeBookNext.svg";
import MakeBookBefore from "../../assets/images/MakeBookBefore.svg";

export const Container = styled.div`
  background: url(${DalkongBG}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  z-index: 100;
  align-items: center;
  padding-left: 20px;
`;

export const Header2 = styled.div`
  display: flex;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  z-index: 100;
  align-items: center;
  padding-left: 20px;
`;

export const HeaderElement = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 130px;
  align-items: center;
  overflow: hidden;
`;

export const Content1 = styled.div`
  position: fixed;
  top: 130px;
  overflow: hidden;
  width: 35%;
  height: 100%;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const Content2 = styled.div`
  position: sticky;
  top: 130px;
  left: 35%;
  width: 65%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const Content1Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const Content1TitleInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: center;
  gap: 30px;
  margin-top: -10px;
`;

export const Content1InputTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50px;
  text-align: center;
  margin-top: -10px;
`;

export const Content1InputSubject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50px;
  text-align: center;
  margin-top: -10px;
`;

export const Content1Subject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
`;

export const Content1SubjectInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: center;
  gap: 30px;
  margin-top: -30px;
`;

export const Content2Element = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;
`;

export const Content2ElementInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: white;
  border-radius: 50px;
  padding: 20px;
  white-space: pre-line;
  color: black;
  text-align: center;
  font-size: 2em;
  font-weight: 400;
`;

export const FixedImage = styled.img`
  position: absolute;
  top: 50px;
  left: 80px;
  width: 50px;
  height: auto;
  z-index: 10;
`;

export const LogoImage = styled.img`
  width: 160px;
  height: 145px;
  margin-left: -10px;
  margin-right: -100px;
`;

export const NextButton = styled.button`
  background: url(${MakeBookNext}) no-repeat center center;
  background-size: contain;
  width: 130px;
  height: 130px;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const BeforeButton = styled.button`
  background: url(${MakeBookBefore}) no-repeat center center;
  background-size: contain;
  width: 130px;
  height: 130px;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  top: -15px;
  right: 20px;
  z-index: 200;
  display: flex;
  gap: 20px;
  flex-direction: row;
`;
