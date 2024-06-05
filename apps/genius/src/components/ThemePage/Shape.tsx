// Shape.tsx
import React, { useState, useEffect } from "react";
import * as S from "./ShapeStyle";
import * as N from "./ShapeNextStyle";

interface ShapeProps {
  title: string;
  subjectImage: string;
  onImageContainerClick: () => void;
  delay: number;
}

const Shape: React.FC<ShapeProps> = ({
  title,
  subjectImage,
  onImageContainerClick,
  delay
}) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <N.Container>
      <N.Glass>
        <N.Title>{title}</N.Title>
        <S.SproutContainer show={!showButton} />
        <S.ImageContainer
          style={{ backgroundImage: `url(${subjectImage})` }}
          onClick={onImageContainerClick}
          show={showButton}
        />
      </N.Glass>
      <N.Shadow />
    </N.Container>
  );
};

export default Shape;
