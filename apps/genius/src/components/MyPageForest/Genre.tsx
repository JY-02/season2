import React, { useEffect, useState } from "react";
import { pieData1 } from "./data"; // 데이터 가져오기
import styled from "styled-components";

interface PieDataItem {
  name: string;
  value: number;
}

interface PieData {
  [key: string]: PieDataItem[];
}

interface GenreProps {
  year: string;
  onMostPopularGenreChange: (genre: string) => void;
}

const genreImages: { [key: string]: string } = {
  공포동화: "/ghost.svg",
  판타지동화: "/castle.svg",
  전래동화: "/full_story.svg",
  학습동화: "/book.svg"
};

const GenreList = styled.ul`
  list-style-type: none;

  width: 400px;
  height: 330px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const GenreItem = styled.li`
  display: flex;
  align-items: center;
`;

const GenreImage = styled.img`
  width: 80px;
  margin-right: 20px;
`;

const GenreText = styled.span`
  font-weight: 400;
  color: #000;
  font-size: 38px;
  font-family: "Arial", sans-serif;
  letter-spacing: 0.5px;
  margin: 10px 0;
`;

const Genre: React.FC<GenreProps> = ({ year, onMostPopularGenreChange }) => {
  const [sortedData, setSortedData] = useState<PieDataItem[]>([]);

  useEffect(() => {
    const data: PieDataItem[] = (pieData1 as PieData)[year];
    if (data.length > 0) {
      const mostPopular = data.reduce((prev, current) =>
        prev.value > current.value ? prev : current
      );
      onMostPopularGenreChange(mostPopular.name);
      const sorted = [...data].sort((a, b) => b.value - a.value);
      setSortedData(sorted);
    }
  }, [year, onMostPopularGenreChange]);

  return (
    <div>
      <GenreList>
        {sortedData.map((entry, index) => (
          <GenreItem key={index}>
            <GenreImage src={genreImages[entry.name]} alt={entry.name} />
            <GenreText>
              {entry.name} {entry.value}권
            </GenreText>
          </GenreItem>
        ))}
      </GenreList>
    </div>
  );
};

export default Genre;
