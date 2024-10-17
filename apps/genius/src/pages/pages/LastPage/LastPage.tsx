import * as C from "../../pages/StoryFlow/container";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BookImageContainer,
  BookImage,
  UpperTextBox,
  TextBox,
  SmallTextBox,
  Button1,
  Button2,
  BarcodeImage,
  ButtonWrapper,
  NewButton1,
  NewButton2,
  LastPageACImage
} from "./LastPage";

const LastPage = () => {
  const currentPage = "LastPage";
  const navigate = useNavigate();

  const handleButtonClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked`);
  };

  const handleExitButtonClick = () => {
    navigate("/MainHome");
  };

  return (
    <Container>
      <C.Header2 currentPage={currentPage} />
      <BookImageContainer>
        <LastPageACImage />
        <BookImage />
        <UpperTextBox>
          24.05.19
        </UpperTextBox>
        <TextBox>
          인어공주의 대탐험
        </TextBox>
        <SmallTextBox>
          지은이 | 박예은
        </SmallTextBox>
        <Button1 onClick={() => handleButtonClick("MainButton")} />
        <Button2 onClick={() => handleButtonClick("SecondaryButton")} />
        <BarcodeImage />
        <ButtonWrapper>
          <NewButton1 onClick={() => handleButtonClick("BaroButton")} />
          <NewButton2 onClick={handleExitButtonClick} />
        </ButtonWrapper>
      </BookImageContainer>
    </Container>
  );
};

export default LastPage;
