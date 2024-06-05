// BadgeGrid.tsx

import React from "react";
import styled from "styled-components";
import Badge from "./Badge";

interface BadgeGridProps {
  badges: {
    name: string;
    image: string;
    locked: boolean;
    content: string; // 추가된 content 속성
  }[];
  onBadgeClick: (name: string, content: string, image: string) => void; // content와 image도 함께 전달
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
`;

const BadgeGrid: React.FC<BadgeGridProps> = ({ badges, onBadgeClick }) => {
  const handleBadgeClick = (name: string, content: string, image: string) => {
    onBadgeClick(name, content, image); // content와 image도 함께 전달
  };

  return (
    <GridContainer>
      {badges.map((badge, index) => (
        <Badge
          key={index}
          name={badge.name}
          image={badge.image}
          locked={badge.locked}
          onClick={() =>
            handleBadgeClick(badge.name, badge.content, badge.image)
          } // content와 image도 함께 전달
        />
      ))}
    </GridContainer>
  );
};

export default BadgeGrid;
