// Badge.tsx

import React from "react";
import styled from "styled-components";

export interface BadgeProps {
  name: string;
  image: string;
  locked: boolean;
  onClick: () => void;
}

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
export const BadgeImage = styled.img<{ src: string }>`
  width: 150px;
`;
export const BadgeImageOverlay = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BadgeName = styled.span`
  margin-top: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 39px;
  text-align: center;

  color: #3f5650;
`;

export const LockIcon = styled.span`
  font-size: 100px;
  position: absolute;
  top: 50px;
`;
export const LockedOverlay = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background-color: rgba(0, 0, 0, 0.5); // 검정색 반투명 원
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: white;
`;

const Badge: React.FC<BadgeProps> = ({ name, image, locked, onClick }) => {
  return (
    <BadgeContainer onClick={onClick}>
      <BadgeImageOverlay>
        <BadgeImage src={image} alt={name} />
      </BadgeImageOverlay>
      {locked && (
        <LockedOverlay>
          <LockIcon>🔒</LockIcon>
        </LockedOverlay>
      )}
      <BadgeName>{name}</BadgeName>
    </BadgeContainer>
  );
};

export default Badge;
