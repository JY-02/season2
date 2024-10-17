import * as C from "../../pages/StoryFlow/container";
// import { useNavigate } from "react-router-dom";
import {
  Container,
  ConfirmLevelTitle,
  Wrapper,
  ImageWrapper1,
  ImageWrapper2,
  CheckButton,
  LevelButton,
  LevelButton2
} from "./ConfirmLevel";
import yes from "../../assets/images/LevelYes.svg";
import no from "../../assets/images/LevelNo.svg";
import easy from "../../assets/images/Check2.svg";
import medium from "../../assets/images/Check3.svg";
import hard from "../../assets/images/Check4.svg";

const ConfirmLevel = () => {
  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };
  const currentPage = "ConfirmLevel";
  return (
    <Container>
      <C.Header2 currentPage={currentPage} />
      <Wrapper>
        <ConfirmLevelTitle>좋았어, 다음 단계로 넘어갈까?</ConfirmLevelTitle>
        <ImageWrapper1>
          <CheckButton CheckImg={yes} onClick={() => handleImageClick("yes")} />
          <CheckButton CheckImg={no} onClick={() => handleImageClick("no")} />
        </ImageWrapper1>
        <ImageWrapper2>
          <LevelButton
            bgImage={easy}
            onClick={() => handleImageClick("easy")}
          />
          <LevelButton2
            bgImage={medium}
            onClick={() => handleImageClick("medium")}
          />
          <LevelButton
            bgImage={hard}
            onClick={() => handleImageClick("hard")}
          />
        </ImageWrapper2>
      </Wrapper>
    </Container>
  );
};

export default ConfirmLevel;
