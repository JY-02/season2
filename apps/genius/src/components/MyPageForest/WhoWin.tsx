import React, { useEffect, useState } from "react";
import { pieData2 } from "./data";
import styled from "styled-components";

interface PieDataItem {
  name: string;
  value: number;
}

interface PieData {
  [key: string]: PieDataItem[];
}

interface PieChart2Props {
  year: string;
  onWinnerChange: (winner: string) => void;
}

const characterImages: { [key: string]: string } = {
  알콩이: "/dalkongcharacter.png",
  달콩이: "/alkongcharacter.png"
};

export const TextEntry = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* 세로에서 가로로 변경 */
  margin-top: 45px;
  margin-bottom: 0px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  align-items: center;
  margin: 0 -70px; /* 각 열 간격 조정 */
`;

const CharacterImage = styled.img`
  height: 300px; /* 이미지의 크기 조정 */
`;

const WhoWin: React.FC<PieChart2Props> = ({ year, onWinnerChange }) => {
  const [data, setData] = useState<PieDataItem[]>([]);

  useEffect(() => {
    const newData: PieDataItem[] = (pieData2 as PieData)[year];
    setData(newData);
    if (newData && newData.length > 0) {
      const winner = newData.reduce((prev, current) =>
        prev.value > current.value ? prev : current
      );
      onWinnerChange(`${winner.name}`);
    }
  }, [year, onWinnerChange]);

  return (
    <Container>
      {data.map((entry, index) => (
        <Column key={index}>
          {" "}
          <TextEntry>
            {entry.name} {entry.value}권
          </TextEntry>
          <CharacterImage src={characterImages[entry.name]} alt={entry.name} />
        </Column>
      ))}
    </Container>
  );
};

export default WhoWin;
