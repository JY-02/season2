import React from "react";
import styled from "styled-components";

interface YearSelectorProps {
  year: string;
  setYear: (year: string) => void;
}

// Styled-components로 스타일링된 select 요소
const StyledSelect = styled.select`
  background: transparent;
  border: none; // 테두리 제거
  width: 100%; // 너비 설정
  padding: 8px 16px; // 패딩
  font-size: 32px; // 글자 크기
  cursor: pointer; // 커서 스타일
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  text-align: center;

  color: #42655b;
  // 옵션 태그 스타일링
  option {
    background: white; // 옵션 배경 색상
    color: black; // 옵션 글자 색상
  }
`;

const Container = styled.div`
  padding: 10px;
`;

const YearSelector: React.FC<YearSelectorProps> = ({ year, setYear }) => {
  return (
    <Container>
      <StyledSelect value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="2022">2022년</option>
        <option value="2023">2023년</option>
        <option value="2024">2024년</option>
      </StyledSelect>
    </Container>
  );
};

export default YearSelector;
