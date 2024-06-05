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
  OvalButton
} from "./OtherBasic";
import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/OtherProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";

const OtherBasic: React.FC = () => {
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
      <ColorSection></ColorSection>
    </PageContainer>
  );
};

export default OtherBasic;
