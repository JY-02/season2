import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  PageContainer,
  ImageSection,
  ColorSection,
  ProfileButton,
  NameButton,
  IDButton,
  SocialButton,
  SocialButtonsContainer,
  SocialImage,
  SeedNumButtonContainer,
  SeedNumButton,
  QuestionButton,
  AnswerImg,
  ReadBookTitleImage,
  TextBoxContainer,
  TextBox,
  BookImageContainer,
  BookImage,
  LeftButton,
  NextPageButton
} from "./MyReadBook";
import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/MyProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";
import AnswerImage from "../../assets/images/Answer.svg";
import ReadBookTitleImageSrc from "../../assets/images/ReadBookTitleImage.svg";

const MyReadBook: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleQuestionClick = () => {
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
    }, 3000);
  };
  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };

  return (
    <PageContainer>
      <Navbar />
      <ImageSection bgImage={bgImage}>
        <ProfileButton
          image={profileImage}
          onClick={() => console.log("Profile button clicked!")}
        />
        <NameButton onClick={() => console.log("Name button clicked!")}>
          박예은
        </NameButton>
        <IDButton onClick={() => console.log("ID button clicked!")}>
          _.zer023
        </IDButton>
        <SocialButtonsContainer>
          <SocialButton
            onClick={() => console.log("Following button clicked!")}
          >
            <SocialImage src={followingImage} alt="Following" />
          </SocialButton>
          <SocialButton onClick={() => console.log("Follower button clicked!")}>
            <SocialImage src={followerImage} alt="Follower" />
          </SocialButton>
        </SocialButtonsContainer>
        <SeedNumButtonContainer>
          <SeedNumButton
            onClick={() => console.log("SeedNum button clicked!")}
          />
          <QuestionButton onClick={handleQuestionClick} />
          {showAnswer && <AnswerImg src={AnswerImage} alt="Answer" />}
        </SeedNumButtonContainer>
      </ImageSection>
      <ColorSection>
        <ReadBookTitleImage src={ReadBookTitleImageSrc} alt="Read Book Title" />
        <BookImageContainer>
          <BookImage onClick={() => handleImageClick("BookImage")} />
          <LeftButton onClick={() => console.log("LeftButton clicked!")} />
          <NextPageButton onClick={() => console.log("NextPageButton clicked!")} />
        </BookImageContainer>
        <TextBoxContainer>
          <TextBox>
            김미미는 갈색 머리에 까만 눈을 가지고 있어요. 미미는 매우 용감한 성격을 가진 소녀예요.
          </TextBox>
        </TextBoxContainer>
      </ColorSection>
    </PageContainer>
  );
};

export default MyReadBook;
