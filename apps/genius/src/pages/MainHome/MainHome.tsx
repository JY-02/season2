import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Styles from "./MainHomeStyle";
import Navbar from '../Navbar/Navbar';

const MainHome: React.FC = () => {
  const [animationVisible, setAnimationVisible] = useState(false);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const [thirdSectionVisible, setThirdSectionVisible] = useState(false);
  const [fourthSectionVisible, setFourthSectionVisible] = useState(false);

  useEffect(() => {
    
    setAnimationVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const secondSection = document.getElementById('secondSection')?.offsetTop || 0;
      const thirdSection = document.getElementById('thirdSection')?.offsetTop || 0;
      const fourthSection = document.getElementById('fourthSection')?.offsetTop || 0;

      if (scrollPosition > secondSection) {
        setSecondSectionVisible(true);
      }

      if (scrollPosition > thirdSection) {
        setThirdSectionVisible(true);
      }

      if (scrollPosition > fourthSection) {
        setFourthSectionVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);

  const startAnimation = () => {
    // 원하는 동작 추가
  };

  return (
    <Styles.AppContainer className="app-container">
      <Navbar />
      <main>
        <Styles.MainSection className={`main-section ${animationVisible ? "visible" : ""}`}>
          <Styles.MainTitle className="main-title">세상에 <span className="highlight">단 ‘하나’뿐</span>인 나만의 동화책 <br/>이야기 꽃을 피워보세요!</Styles.MainTitle>
          <Styles.MainDescription className="main-description">
            세상에 있는 흔한 동화책 이야기와 결말은 너무 익숙해.<br />
            나만의 이야기로 동화책을 꾸미면 어떨까?<br />
            나도 동화책을 만들 수 있을까?<br />
            뭐? 어렵지 않다고?
          </Styles.MainDescription>
          <Styles.AnimationContainer className="animation-container">
            <Link to="/CreateStory">
              <Styles.CreateStoryButton onClick={startAnimation} className="create-story-button">
                나만의 동화 만들기
              </Styles.CreateStoryButton>
            </Link>
          </Styles.AnimationContainer>
        </Styles.MainSection>

        <Styles.SecondSection id="secondSection" className={`second-section ${secondSectionVisible ? "visible" : ""}`}>
          <img src={`src/assets/images/main2.png`} alt="Main 2" />
          <p><span className="highlight">아이</span>와 <span className="highlight2">부모</span>가 함께!<br></br>아이는 동화책을 만들며 성취하고,<br></br>부모는 아이의 동화를 자랑하세요!</p>
        </Styles.SecondSection>

        <Styles.ThirdSection id="thirdSection" className={`third-section ${thirdSectionVisible ? "visible" : ""}`}>
          <p>우리 아이의 <span className="highlight">창의력</span>과 <span className="highlight2">상상력</span>을 <br />마음껏 키워봐요!</p>
          <img src={`src/assets/images/main3.png`} alt="Main 3" />
        </Styles.ThirdSection>

        <Styles.FourthSection id="fourthSection" className={`fourth-section ${fourthSectionVisible ? "visible" : ""}`}>
          <img src={`src/assets/images/main4.png`} alt="Main 4" />
          {<p>아이들에게 친숙한 화면,<br></br>다양한 <span className="highlight">모바일 기기</span>와 <span className="highlight2">웹</span>에서도 즐겨봐요!</p>}
        </Styles.FourthSection>
      </main>
    </Styles.AppContainer>
  );
};

export default MainHome;
