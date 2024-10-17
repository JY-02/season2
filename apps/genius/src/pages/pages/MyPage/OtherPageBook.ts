// 나의 책장 버튼 누른 후 첫 화면
import styled from "styled-components";
import * as S from "./OtherBasic";
import ButtonImage from "../../assets/images/BookSample.svg";

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
export const OvalButton = S.OvalButton;

export const SampleButton = styled.button`
  position: relative;
  width: 300px;
  height: 400px;
  border: none;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${ButtonImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }

  &:hover:before {
    opacity: 0.7;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 90px;
  align-items: center;
  position: absolute;
  top: 250px;
  left: 31%;
  right: 0%;
  background-color: transparent;
  width: 80%;
  padding-left: 50px;
  z-index: 3;
`;

interface HoverButtonProps {
  bgImage: string;
}

export const HoverButton = styled.button<HoverButtonProps>`
  position: absolute;
  top: 60%;
  left: 33%;
  transform: translate(-50%, -50%);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  border: none;
  cursor: pointer;
  opacity: 1;
  transition:
    opacity 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.6);
  }
  margin: 5px;
`;
