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
  SampleButton,
  ButtonRow,
  OvalButton,
  HoverButton
} from "./OtherPageBook";
import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/OtherProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";
import BookTextImage from "../../assets/images/BookTitle.svg";
import AddButtonImg1 from "../../assets/images/BookChoose1.svg";
import AddButtonImg2 from "../../assets/images/BookChoose2.svg";

const OtherPageBook: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
      <ButtonRow>
        {[1, 2, 3].map((index) => (
          <SampleButton
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === index && (
              <>
                <HoverButton
                  bgImage={AddButtonImg1}
                  style={{ opacity: 1, transform: "translate(-70%, -120%)" }}
                  onClick={() =>
                    console.log(`Hover Button 1 clicked from group ${index}`)
                  }
                />
                <HoverButton
                  bgImage={AddButtonImg2}
                  style={{ opacity: 1, transform: "translate(70%, -120%)" }}
                  onClick={() =>
                    console.log(`Hover Button 2 clicked from group ${index}`)
                  }
                />
              </>
            )}
          </SampleButton>
        ))}
      </ButtonRow>
      <ColorSection>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
            padding: "20px"
          }}
        >
          <img
            src={BookTextImage}
            alt="Book Text"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              height: "auto",
              margin: "-50px 0 0 -20px"
            }}
          />
        </div>
      </ColorSection>
    </PageContainer>
  );
};

export default OtherPageBook;
