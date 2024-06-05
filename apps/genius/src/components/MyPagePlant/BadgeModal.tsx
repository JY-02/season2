// BadgeModal.tsx

import React, { useState } from "react";
import styled from "styled-components";
import * as S from "./Badge";

interface BadgeModalProps {
  badgeName: string;
  badgeImage: string;
  badgeContent: string;
  onClose: () => void;
  onSetRepresentativePlant: (badgeName: string, badgeImage: string) => void;
  locked: boolean; // 뱃지 잠금 여부를 받아오는 prop 추가
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 697px;
  height: 497px;
  background: #8dd1bd;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const BadgeTitle = styled.div`
  margin-top: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  text-align: center;
  color: #3f5650;
`;

const BadgeImage = styled.img<{ src: string }>`
  width: 150px;
  height: auto;
`;
const BadgeContent = styled.div`
  margin-top: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 39px;
  text-align: center;
  color: #3f5650;
`;
const DisabledButton = styled.button`
  margin-top: 35px;
  background-color: #ccc; /* 비활성화된 상태의 배경색 */
  color: #888; /* 비활성화된 상태의 텍스트색 */
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 25px;
`;
const Button = styled.button`
  margin-top: 35px;
  background-color: #3f5650;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 25px;
`;
const LockIcon = styled.span`
  font-size: 100px;
`;
const LockedOverlay = styled.div`
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
  margin-top: -198px;
`;
const BadgeModal: React.FC<BadgeModalProps> = ({
  badgeName,
  badgeImage,
  badgeContent,
  onClose,
  onSetRepresentativePlant,
  locked // 뱃지 잠금 여부 prop 추가
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOverlayClick = () => {
    setIsOpen(false);
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleSetRepresentativePlant = () => {
    onSetRepresentativePlant(badgeName, badgeImage);
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent onClick={handleModalClick}>
            <S.BadgeImageOverlay>
              <BadgeImage src={badgeImage} />
            </S.BadgeImageOverlay>

            {locked && (
              <LockedOverlay>
                <LockIcon>🔒</LockIcon>
              </LockedOverlay>
            )}
            <BadgeTitle>{badgeName}</BadgeTitle>
            <BadgeContent>{badgeContent}</BadgeContent>
            {locked ? (
              <DisabledButton disabled>
                나의 대표 식물로 설정하기
              </DisabledButton>
            ) : (
              <Button onClick={handleSetRepresentativePlant}>
                나의 대표 식물로 설정하기
              </Button>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default BadgeModal;
