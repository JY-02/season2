//ThemePageNext.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShapeNext from "../../components/ThemePage/ShapeNext";
import * as C from "../../pages/StoryFlow/container";
import * as Styles from "./ThemePageStyle";
import { themes } from "./themes";

const ThemePageNext: React.FC = () => {
  const location = useLocation();
  const id = parseInt(new URLSearchParams(location.search).get("id") || "1");
  const navigate = useNavigate();
  const currentPage = "ThemePageNext";

  const handleOkBtnClick = () => {
    navigate(`/SelectLevel`);
  };

  const handleNoBtnClick = () => {
    navigate(`/ThemePage?id=${id}`);
  };

  const getThemeIndex = (id: number) => {
    return Math.ceil(id / 3) - 1;
  };

  const themeIndex = getThemeIndex(id);
  const startIndex = themeIndex * 3 - 1;

  const getComponentIndex = (id: number) => {
    return (id - 1) % 3;
  };

  return (
    <Styles.BackgroundContainer>
      <C.Header2 currentPage={currentPage} />
      <Styles.Title>좋았어, 이제 이야기 꽃을 피워볼까?</Styles.Title>
      <Styles.BtnContainer>
        <Styles.OkBtn onClick={handleOkBtnClick}>응 그럴래</Styles.OkBtn>
        <Styles.NoBtn onClick={handleNoBtnClick}>다시 고를래</Styles.NoBtn>
      </Styles.BtnContainer>
      <Styles.ShapeContainer>
        {[1, 2, 3].map((index) => (
          <ShapeNext
            key={startIndex + index}
            title={themes[startIndex + index].title}
            isFlower={getComponentIndex(id) === index - 1}
          />
        ))}
      </Styles.ShapeContainer>
    </Styles.BackgroundContainer>
  );
};

export default ThemePageNext;
