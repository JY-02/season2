// ThemePage.tsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as C from "../../pages/StoryFlow/container";
import Shape from "../../components/ThemePage/Shape";
import * as Styles from "./ThemePageStyle";
import Regenerate from "../../assets/images/regenerate.png";
import { themes, Theme } from "./themes";

interface ThemePageProps {
  id: string;
}

const ThemePage: React.FC<ThemePageProps> = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = "ThemePage";

  useEffect(() => {
    const themeId = location.search.split("=")[1];
    if (themeId) {
      const currentTheme = themes.find((theme) => theme.id === themeId);
      if (currentTheme) {
        const remainder = parseInt(themeId) % 3;
        let relatedIds: number[] = [];
        if (remainder === 1) {
          relatedIds = [+themeId, +themeId + 1, +themeId + 2];
        } else if (remainder === 2) {
          relatedIds = [+themeId - 1, +themeId, +themeId + 1];
        } else {
          relatedIds = [+themeId - 2, +themeId - 1, +themeId];
        }
        const relatedThemes = themes.filter((theme) =>
          relatedIds.includes(parseInt(theme.id))
        );
        setSelectedTheme(relatedThemes);
      }
    } else {
      setSelectedTheme(themes.slice(0, 3));
    }
  }, [location]);

  const handleImageContainerClick = (themeId: string) => {
    navigate(`/ThemePageNext?id=${themeId}`);
  };

  const handleRefreshClick = () => {
    const firstThemeIndex = themes.findIndex(
      (theme) => theme.id === selectedTheme[0].id
    );
    const nextIndex =
      firstThemeIndex + 3 < themes.length ? firstThemeIndex + 3 : 0;
    setSelectedTheme(themes.slice(nextIndex, nextIndex + 3));
  };

  return (
    <Styles.BackgroundContainer>
      <C.Header2 currentPage={currentPage} />
      <Styles.JustPadding1 />
      <Styles.Title>주제가 될 새싹을 골라볼까?</Styles.Title>
      <Styles.JustPadding2 />
      <Styles.ShapeContainer>
        {selectedTheme.map((theme, index) => (
          <Shape
            key={theme.id}
            title={theme.title}
            subjectImage={theme.subjectImage}
            onImageContainerClick={() => handleImageContainerClick(theme.id)}
            delay={(index + 1) * 1000}
          />
        ))}
      </Styles.ShapeContainer>
      <Styles.Regenarate onClick={handleRefreshClick}>
        <Styles.RegenarateImg src={Regenerate} />
      </Styles.Regenarate>
    </Styles.BackgroundContainer>
  );
};

export default ThemePage;
