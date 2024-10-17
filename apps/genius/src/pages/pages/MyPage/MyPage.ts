import styled from "styled-components";
import * as S from "./MyBasic";
import MyPageBook from "../../assets/images/MyPageBook.svg";
import MyPageFlower from "../../assets/images/MyPageFlower.svg";
import MyPageForest from "../../assets/images/MyPageForest.svg";
import MyPageBookText from "../../assets/images/BookText.svg";
import MyPageFlowerText from "../../assets/images/FlowerText.svg";
import MyPageForestText from "../../assets/images/ForestText.svg";

// MyBasic에서 받아와서 사용 (왼쪽 고정부 화면)
export const PageContainer = S.PageContainer;
export const TopBar = S.TopBar;
export const Logo = S.Logo;
export const NavButton = S.NavButton;
export const ButtonGroup = S.ButtonGroup;
export const ImageSection = S.ImageSection;
export const TopButtonContainer = S.TopButtonContainer;
export const BottomButtonContainer = S.BottomButtonContainer;
export const ColorSection = S.ColorSection;
export const ProfileButton = S.ProfileButton;
export const NameButton = S.NameButton;
export const IDButton = S.IDButton;
export const SocialButton = S.SocialButton;
export const SocialImage = S.SocialImage;
export const SocialButtonsContainer = S.SocialButtonsContainer;
export const SeedNumButtonContainer = S.SeedNumButtonContainer;
export const SeedNumButton = S.SeedNumButton;
export const QuestionButton = S.QuestionButton;
export const AnswerImg = S.AnswerImg;

export const BookButton = styled.button`
  background-image: url(${MyPageBook});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  width: 600px;
  height: 400px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: block;
  margin: 0 20px;
  padding: 0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-image 0.3s ease,
    background-size 0.3s ease,
    background-color 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    background-image: url(${MyPageBookText});
    background-size: 80%;
    background-color: #ffffff;
  }
`;

export const FlowerButton = styled.button`
  background-image: url(${MyPageFlower});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  width: 600px;
  height: 400px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: block;
  margin: 0 20px;
  padding: 0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-image 0.3s ease,
    background-size 0.3s ease,
    background-color 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    background-image: url(${MyPageFlowerText});
    background-size: 80%;
    background-color: #ffffff;
  }
`;

export const ForestButton = styled.button`
  background-image: url(${MyPageForest});
  background-size: 113% 113%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  width: 1250px;
  height: 400px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  padding: 0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-image 0.3s ease,
    background-size 0.3s ease,
    background-color 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    background-image: url(${MyPageForestText});
    background-size: 60% 60%;
    background-color: #ffffff;
  }
`;
