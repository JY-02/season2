import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  BookButton,
  FlowerButton,
  ForestButton,
  TopButtonContainer,
  BottomButtonContainer
} from "./MyPage";
import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/MyProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";
import AnswerImage from "../../assets/images/Answer.svg";

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuestionClick = () => {
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
    }, 3000);
  };

  const handleBookButtonClick = () => {
    navigate("/MyPageBook");
  };
  const handleFlowerButtonClick = () => {
    navigate("/MyPagePlant");
  };
  const handleForestButtonClick = () => {
    navigate("/MyPageForest");
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
        <TopButtonContainer>
          <BookButton onClick={handleBookButtonClick} />
          <FlowerButton onClick={handleFlowerButtonClick} />
        </TopButtonContainer>
        <BottomButtonContainer>
          <ForestButton onClick={handleForestButtonClick} />
        </BottomButtonContainer>
      </ColorSection>
    </PageContainer>
  );
};

export default MyPage;
