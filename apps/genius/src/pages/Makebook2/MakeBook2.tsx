import * as C from "../StoryFlow/container";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BookImage,
  BookImageContainer,
  TextBox,
  TextBoxContainer,
  ImageButton,
  ImageTextBox,
  TextImageContainer,
  TextImage,
  CustomButton,
  CustomButton2,
  ButtonWrapper,
  FullscreenImage,
  MakeBookImage,
  OverlayButtonWrapper,
  OverlayButton1,
  OverlayButton2,
  NewImage,
  BottomRightButton,
  ArrowButton,
  Arrow_Image
} from "./MakeBook2";

import right from "../../assets/images/right.svg";

const MakeBook2 = () => {
  const currentPage = "MakeBook2";
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const [showImageButton, setShowImageButton] = useState(true);
  const [showNewImage, setShowNewImage] = useState(false);
  const navigate = useNavigate();

  const nextpage = () => {
    console.log("다음 장");
    navigate("/LastPage");
  };

  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };

  const handleImageButtonClick = () => {
    setShowFullscreenImage(true);
  };

  const handleCustomButtonClick = () => {
    console.log("Custom button clicked");
  };

  const handleCustomButton2Click = () => {
    console.log("Custom button 2 clicked");
  };

  const handleOverlayButton1Click = () => {
    setShowFullscreenImage(false);
  };

  const handleOverlayButton2Click = () => {
    setShowImageButton(false);
    setShowNewImage(true);
    setShowFullscreenImage(false);
  };

  const handleBottomRightButtonClick = () => {
    setShowImageButton(true);
    setShowNewImage(false);
  };

  useEffect(() => {
    if (showFullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFullscreenImage]);

  return (
    <Container>
      <C.Header2 currentPage={currentPage} />
      {showFullscreenImage && !showNewImage && (
        <>
          <FullscreenImage />
          <MakeBookImage />
          <OverlayButtonWrapper>
            <OverlayButton1 onClick={handleOverlayButton1Click} />
            <OverlayButton2 onClick={handleOverlayButton2Click} />
          </OverlayButtonWrapper>
        </>
      )}
      <BookImageContainer>
        <BookImage onClick={() => handleImageClick("BookImage")} />
        <ArrowButton onClick={nextpage}>
          <Arrow_Image src={right} alt="right" />
        </ArrowButton>
      </BookImageContainer>
      <TextBoxContainer>
        <TextBox>
          김미미는 갈색 머리에 까만 눈을 가지고 있어요. 미미는 매우 용감한 성격을 가진 소녀예요.
        </TextBox>
      </TextBoxContainer>
      <ImageTextBox>
        {showImageButton ? (
          <ImageButton onClick={handleImageButtonClick}></ImageButton>
        ) : (
          showNewImage && <NewImage />
        )}
      </ImageTextBox>
      <TextImageContainer>
        <TextImage onClick={() => handleImageClick("TextImage")} />
      </TextImageContainer>
      <ButtonWrapper>
        <CustomButton onClick={handleCustomButtonClick}></CustomButton>
        <CustomButton2 onClick={handleCustomButton2Click}></CustomButton2>
      </ButtonWrapper>
      <BottomRightButton onClick={handleBottomRightButtonClick} />
    </Container>
  );
};

export default MakeBook2;
