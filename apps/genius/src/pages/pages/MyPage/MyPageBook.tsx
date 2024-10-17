import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅을 import
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
  SampleButton,
  ButtonRow,
  HoverButton
} from "./MyPageBook";
import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/MyProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";
import AnswerImage from "../../assets/images/Answer.svg";
import BookTextImage from "../../assets/images/BookTitle.svg";
import AddButtonImg1 from "../../assets/images/BookChoose1.svg";
import AddButtonImg2 from "../../assets/images/BookChoose2.svg";
import ButtonImage1 from "../../assets/images/BookSample.svg";
import ButtonImage2 from "../../assets/images/BookSample2.svg";
import ButtonImage3 from "../../assets/images/BookSample3.svg";

const MyPageBook: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [showAnswer, setShowAnswer] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleQuestionClick = () => {
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
    }, 3000);
  };

  const buttonImages = [ButtonImage1, ButtonImage2, ButtonImage3];

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
      <ButtonRow>
        {buttonImages.map((image, index) => (
          <SampleButton
            key={index}
            bgImage={image}
            onMouseEnter={() => setHoverIndex(index + 1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === index + 1 && (
              <>
                <HoverButton
                  bgImage={AddButtonImg1}
                  style={{ opacity: 1, transform: "translate(-70%, -120%)" }}
                  onClick={() => navigate("/MyReadBook")} // 클릭 시 페이지 이동
                />
                <HoverButton
                  bgImage={AddButtonImg2}
                  style={{ opacity: 1, transform: "translate(70%, -120%)" }}
                  onClick={() => navigate("/MyReadBook")} // 클릭 시 페이지 이동
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

export default MyPageBook;
