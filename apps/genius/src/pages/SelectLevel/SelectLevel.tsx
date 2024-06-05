import * as C from "../../pages/StoryFlow/container";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import 추가
import {
  Container,
  SelectLevelTitle,
  Wrapper,
  ImageWrapper,
  LevelButton,
  CheckButton,
  ImageWrapper1
} from "./SelectLevel";
import easy from "../../assets/images/Level2.svg";
import medium from "../../assets/images/Level3.svg";
import hard from "../../assets/images/Level4.svg";
import checkEasy from "../../assets/images/Check2.svg";
import checkMedium from "../../assets/images/Check3.svg";
import checkHard from "../../assets/images/Check4.svg";
import yes from "../../assets/images/LevelYes.svg";
import no from "../../assets/images/LevelNo.svg";

const SelectLevel = () => {
  const currentPage = "SelectLevel";
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [showConfirm, setShowConfirm] = useState(false);
  const [title, setTitle] = useState("선택지 개수는 몇 개로 할까?");
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
    setSelectedButton(type);
    setShowConfirm(true);
    setTitle("좋아, 다음 단계로 넘어갈까?");
  };

  const handleYesClick = () => {
    navigate("/ChatAC");
  };

  const handleNoClick = () => {
    setShowConfirm(false);
    setTitle("선택지 개수는 몇 개로 할까?");
    setSelectedButton(null);
  };

  return (
    <Container>
      <C.Header2 currentPage={currentPage} />
      <Wrapper>
        <SelectLevelTitle>{title}</SelectLevelTitle>
        {showConfirm && (
          <ImageWrapper1>
            <CheckButton CheckImg={yes} onClick={handleYesClick} />
            <CheckButton CheckImg={no} onClick={handleNoClick} />
          </ImageWrapper1>
        )}
        <ImageWrapper>
          <LevelButton
            bgImage={easy}
            hoverImage={checkEasy}
            isSelected={selectedButton === "easy"} // 선택된 상태를 반영
            onClick={() => handleImageClick("easy")}
          />
          <LevelButton
            bgImage={medium}
            hoverImage={checkMedium}
            isSelected={selectedButton === "medium"} // 선택된 상태를 반영
            onClick={() => handleImageClick("medium")}
          />
          <LevelButton
            bgImage={hard}
            hoverImage={checkHard}
            isSelected={selectedButton === "hard"} // 선택된 상태를 반영
            onClick={() => handleImageClick("hard")}
          />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default SelectLevel;
