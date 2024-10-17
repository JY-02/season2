// 나의 숲 버튼 누른 후 첫 화면
import styled from "styled-components";
import * as S from "./MyBasic";
import ButtonImage from "../../assets/images/DesignMyForest.svg";

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

export const ForestButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  padding-left: 50px;
`;

export const ForestButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-image: url(${ButtonImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  outline: none;
  &:focus {
    outline: none;
    border: none;
  }
`;
