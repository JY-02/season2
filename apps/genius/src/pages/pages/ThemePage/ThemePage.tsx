// ThemePage.tsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as C from "../../pages/StoryFlow/container";
import Shape from "../../components/ThemePage/Shape";
import * as Styles from "./ThemePageStyle";
import Regenerate from "../../assets/images/regenerate.png";
import { themes, Theme } from "./themes";
import axios from "axios";

interface ThemeData {
  id: string;
  title: string;
  subjectImage: string;
}

const ThemePage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeData[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = "ThemePage";

  useEffect(() => {
    const themeId = location.search.split("=")[1];
    const nickname = localStorage.getItem('nickname');
    const genre = localStorage.getItem('genre');
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
      const requestData = {nickname, genre};
      axios
        .post(`http://localhost:8000/genius/intro/generate_subject/`, requestData, 
        {
          headers: {
            'Content-Type': "application/json"
          }
        })
        .then((response) => {
          console.log("API Response: ", response.data);  // 응답 로깅

          const subjectsData = response.data.map(
            (item: any, index: number): ThemeData => {
              return {
                id: index.toString(),
                title: item.name,
                subjectImage: item.image_url
              };
            }
          );
          setSelectedTheme(subjectsData);
          console.log("response", response);
          subjectsData.forEach((subject: any) => {
            console.log('Title:', subject.title);
            console.log('Subject Image:', subject.subjectImage);
            console.log('id', subject.id);
          });
        })
        .catch((error) => {
          console.error("Failed to fetch themes:", error);
        });
    }
  }, [location]);

  const handleImageContainerClick = (theme: ThemeData) => {
    const titles= selectedTheme.map((t)=>t.title);
    navigate(`/ThemePageNext?id=${theme.id}`, {state:{titles}});
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
            onImageContainerClick={() => handleImageContainerClick(theme)}
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
