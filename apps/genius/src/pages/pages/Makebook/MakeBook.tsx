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
} from "./MakeBook";

import right from "../../assets/images/right.svg";
import left from "../../assets/images/left.svg";
import BookCover from "../../assets/images/BookCover.jpg";
import BookCover2 from "../../assets/images/BookCover2.jpg";
import BookCover3 from "../../assets/images/BookCover3.jpg";
import BookCover4 from "../../assets/images/BookCover4.jpg";
import BookCover5 from "../../assets/images/BookCover5.jpg";
import BookCover6 from "../../assets/images/BookCover6.jpg";
import BookCover7 from "../../assets/images/BookCover7.jpg";

const MakeBook = () => {
  const currentPage = "MakeBook";
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const [showImageButton, setShowImageButton] = useState(true);
  const [showNewImage, setShowNewImage] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();

  const texts = [
    "한때 바닷속에서 이야기가 시작되었습니다. 밝고 명랑한 성격을 지닌 13살의 인어공주는 물 밖 세상이 궁금하여 모험을 떠났어요.",
    "인어공주가 물 밖 세상에서 어선을 발견했어요. 호기심 가득한 그녀는 어선 안으로 들어가 숨어 버리고 말았는데, 어떤 모험이 그녀를 기다리고 있을까요?",
    "어선 안에서 인어공주는 비슷한 나이의 남자아이를 발견했어요. 그 두 사람은 서로 궁금해하며 서로의 세계에 대해 이야기를 나누었어요. 곧 인어공주는 물 속으로 돌아가야 한다는 사실을 알게 되고, 둘 사이에 특별한 우정이 시작되었습니다.",
    "인어공주와 남자아이는 함께 어선을 떠나 수영을 즐기며 서로의 세계를 탐험하는데요. 남자아이는 인어공주를 따라 바닷속으로 내려가 물 속 동물들과 친구가 되어 즐거운 여행을 떠날 거예요.",
    "이어 남자아이가 인어공주와 함께 수영을 즐겨서 물속에서도 숨을 쉴 수 있게 되었어요. 함께 우그웨이 거북이 할아버지를 만나 바닷속 세계를 탐험하는 도중, 다양한 모험을 겪게 되었습니다.",
    "우그웨이 거북이 할아버지와 함께 인어공주와 남자아이는 해류를 타고 전 세계의 바다를 모험하는데요. 그들은 아름다운 해저 도시들을 발견하고, 위험한 상어 무리와의 경쟁을 통해 용기와 우정을 강화했습니다. 그러나 한 곳에서 물속 마법이 속발했고, 그들을 구하기 위해 더 많은 모험을 해야 했습니다.",
    "마지막으로 남자아이가 인어공주를 너무 좋아해 바닷 속에서 살기로 결정했어요. 인어공주와 남자아이는 결혼하여 전 세계 바다를 자유롭게 모험할 것이며, 그 용감한 여정은 계속되었습니다."
  ];

  const images = [
    BookCover,
    BookCover2,
    BookCover3,
    BookCover4,
    BookCover5,
    BookCover6,
    BookCover7
  ];

  const handleNextPage = () => {
    if (pageCount === 6) {
      alert("이미지를 선택할 수 있는 마지막 페이지입니다!");
    }
    if (pageCount < 7) {
      setPageCount((prevCount) => prevCount + 1);
      if (showNewImage) {
        setShowNewImage(false);
        setShowImageButton(true);
      }
    } else {
      navigate("/LastPage2");
    }
  };

  const handlePreviousPage = () => {
    if (pageCount > 1) {
      setPageCount((prevCount) => prevCount - 1);
    }
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
      <C.Header currentPage={currentPage} />
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
        {pageCount > 1 && (
          <ArrowButton
            onClick={handlePreviousPage}
            style={{ left: "150px", right: "auto" }}
          >
            <Arrow_Image src={left} alt="left" />
          </ArrowButton>
        )}
        <ArrowButton onClick={handleNextPage}>
          <Arrow_Image src={right} alt="right" />
        </ArrowButton>
      </BookImageContainer>
      <TextBoxContainer>
        <TextBox> {texts[pageCount - 1]} </TextBox>
      </TextBoxContainer>
      <ImageTextBox>
        {showImageButton ? (
          <ImageButton onClick={handleImageButtonClick}></ImageButton>
        ) : (
          showNewImage && (
            <NewImage
              style={{ backgroundImage: `url(${images[pageCount - 1]})` }}
            />
          )
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

export default MakeBook;
