// 다른 사람 프로필 페이지에서 사용되는 왼쪽 고정 화면과 오른쪽 단색 화면

import styled from "styled-components";

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
    outline: none;
    border: none;
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

  &:focus {
    outline: none;
    border: none;
  }
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

  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    background-color: #fff;
    color: #333;
  }
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

export const OvalButton = styled.button`
  width: 180px;
  height: 60px;
  border-radius: 25px;
  background-color: #fff;
  color: #333;
  font-size: 23px;
  font-weight: bold;
  font-family: Helvetica;
  cursor: pointer;
  border: none;
  outline: none;
  margin-top: 70px;

  &:focus {
    outline: none;
    border: none;
  }
`;
