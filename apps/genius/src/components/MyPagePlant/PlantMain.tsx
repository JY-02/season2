import React, { useState, useEffect } from "react";
import * as Styles from "./PlantMainStyle";
import BadgeGrid from "./BadgeGrid";
import BadgeModal from "./BadgeModal";
import * as S from "./Badge";
import { badges } from "./badges";

const PlantMain: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [selectedBadgeImage, setSelectedBadgeImage] = useState<string>("");
  const [selectedBadgeContent, setSelectedBadgeContent] = useState<string>("");
  const [representativePlant, setRepresentativePlant] = useState<{
    name: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    if (representativePlant) {
      localStorage.setItem(
        "representativePlant",
        JSON.stringify(representativePlant)
      );
    } else {
      localStorage.removeItem("representativePlant");
    }
  }, [representativePlant]);

  const handleBadgeClick = (name: string, content: string, image: string) => {
    setSelectedBadge(name);
    setSelectedBadgeContent(content);
    setSelectedBadgeImage(image);
  };

  const handleCloseModal = () => {
    setSelectedBadge(null);
    setSelectedBadgeImage("");
    setSelectedBadgeContent("");
  };

  const handleSetRepresentativePlant = (name: string, image: string) => {
    setRepresentativePlant({ name, image });
  };
  return (
    <Styles.MyPagePlantContainer>
      <Styles.Title>나의 식물</Styles.Title>
      <Styles.OneBadge>
        <Styles.OneBadgeTitle>나의 대표 식물</Styles.OneBadgeTitle>
        {representativePlant ? (
          <>
            {" "}
            <S.BadgeImageOverlay>
              {" "}
              <S.BadgeImage
                src={representativePlant.image}
                alt={representativePlant.name}
              />
            </S.BadgeImageOverlay>
            <S.BadgeName>{representativePlant.name}</S.BadgeName>
          </>
        ) : (
          <>
            <Styles.NonBadge>
              {" "}
              <Styles.NonBadgeName>?</Styles.NonBadgeName>
            </Styles.NonBadge>

            <S.BadgeName>아직 설정한 뱃지가 없어요</S.BadgeName>
          </>
        )}
      </Styles.OneBadge>
      <Styles.Separator />
      <BadgeGrid badges={badges} onBadgeClick={handleBadgeClick} />
      {selectedBadge && (
        <BadgeModal
          badgeName={selectedBadge}
          badgeImage={selectedBadgeImage}
          badgeContent={selectedBadgeContent}
          onClose={handleCloseModal}
          onSetRepresentativePlant={handleSetRepresentativePlant}
          locked={
            badges.find((badge) => badge.name === selectedBadge)?.locked ||
            false
          }
        />
      )}
    </Styles.MyPagePlantContainer>
  );
};

export default PlantMain;
