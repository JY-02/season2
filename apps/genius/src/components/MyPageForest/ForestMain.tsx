// ForestMain.tsx
import React, { useState, useEffect } from "react";
import YearSelector from "./YearSelector";
import Genre from "./Genre";
import WhoWin from "./WhoWin";
import TaleGraph from "./TaleGraph";
import { barData } from "./data";
import * as S from "./ForestMainStyle";

const ForestMain: React.FC = () => {
  const [year, setYear] = useState<string>("2024");
  const [totalFlowers, setTotalFlowers] = useState<number>(0);
  const [mostPopularGenre, setMostPopularGenre] = useState<string>("");
  const [winner, setWinner] = useState<string>("");

  useEffect(() => {
    const data = barData[year];
    if (data) {
      const total = data.reduce((sum, current) => sum + current.uv, 0);
      setTotalFlowers(total);
    }
  }, [year]);

  return (
    <S.Container>
      <S.Title>나의 숲</S.Title>
      <S.YearSelectorContainer>
        <YearSelector year={year} setYear={setYear} />
      </S.YearSelectorContainer>

      <S.TopPane>
        <S.FlowerContainer>
          <S.FlowerImage />
          <S.Text1>1년간 내가 피운 이야기 꽃</S.Text1>
          <S.Text2>{totalFlowers}송이</S.Text2>
        </S.FlowerContainer>

        <S.GenreContainer>
          <Genre year={year} onMostPopularGenreChange={setMostPopularGenre} />
          <S.Text1>어떤 동화를 가장 많이 만들었을까?</S.Text1>
          <S.Text2 style={{ color: "#FA7B76" }}>{mostPopularGenre}</S.Text2>
        </S.GenreContainer>

        <S.GenreContainer>
          <WhoWin year={year} onWinnerChange={setWinner} />
          <S.Text1>알콩이 vs 달콩이 승자는?</S.Text1>
          <S.Text2 style={{ color: "#8884D8" }}>{winner}</S.Text2>
        </S.GenreContainer>
      </S.TopPane>

      <S.BottomPane>
        <TaleGraph year={year} />
      </S.BottomPane>
    </S.Container>
  );
};

export default ForestMain;
