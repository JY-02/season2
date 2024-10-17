import styled from "styled-components";
import SeedNum from "../../assets/images/SeedNum.svg";
import QuestionImage from "../../assets/images/Question.svg";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

export const TopBar = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 2;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

type ImageSectionProps = {
  bgImage: string;
};

export const ImageSection = styled.div<ImageSectionProps>`
  background-image: url("${(props) => props.bgImage}");
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  width: 30vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 28vh;
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BottomButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 60px;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const ColorSection = styled.div`
  background-color: #acd0cb;
  width: 70vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 155px;
  position: relative;
`;

type ProfileButtonProps = {
  image: string;
};

export const ProfileButton = styled.button<ProfileButtonProps>`
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 8px solid white;
  width: 250px;
  height: 250px;
  cursor: pointer;
  margin-bottom: -5px;
  transform: translateY(-30%);
  outline: none;
  user-select: none;

  &:focus {
    box-shadow: 0 0 0 2px #acd0cb;
  }
`;

export const NameButton = styled.button`
  background-color: #ffffff;
  color: #333;
  border: 5px solid #acd0cb;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  text-align: center;
  margin-bottom: 30px;
`;

export const IDButton = styled.button`
  background-color: #ffffff;
  color: #333;
  border: 5px solid #acd0cb;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SocialButton = styled.button`
  width: 140px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const SocialImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 40px;
`;

export const SeedNumButtonContainer = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  transform: translateX(-11%);
  margin-top: 30px;
`;

export const SeedNumButton = styled(SocialButton)`
  background-image: url(${SeedNum});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export const QuestionButton = styled.button`
  background-image: url(${QuestionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 52%;
  right: 22px;
  transform: translateY(-50%);

  &:focus {
    outline: none;
    border: none;
  }
`;

export const AnswerImg = styled.img`
  position: absolute;
  top: 30%;
  right: -60px;
  transform: translateY(-90%);
  width: 360px;
  height: auto;
  display: block;
`;
