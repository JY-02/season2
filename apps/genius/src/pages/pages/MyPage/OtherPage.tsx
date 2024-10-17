import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  PageContainer,
  ImageSection,
  ColorSection,
  ProfileButton,
  NameButton,
  TopButtonContainer,
  BottomButtonContainer,
  IDButton,
  SocialButton,
  SocialButtonsContainer,
  SocialImage,
  OvalButton,
  BookButton,
  FlowerButton,
  ForestButton
} from "./OtherPage";
import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/OtherProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";

const OtherPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBookButtonClick = () => {
    navigate("/OtherPageBook");
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
          최윤서
        </NameButton>
        <IDButton onClick={() => console.log("ID button clicked!")}>
          yunseo_o
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
        <OvalButton onClick={() => console.log("New Oval Button clicked!")}>
          팔로우
        </OvalButton>
      </ImageSection>
      <ColorSection>
        <TopButtonContainer>
          <BookButton onClick={handleBookButtonClick} />
          <FlowerButton onClick={() => console.log("Flower button clicked!")} />
        </TopButtonContainer>
        <BottomButtonContainer>
          <ForestButton onClick={() => console.log("Forest button clicked!")} />
        </BottomButtonContainer>
      </ColorSection>
    </PageContainer>
  );
};

export default OtherPage;
