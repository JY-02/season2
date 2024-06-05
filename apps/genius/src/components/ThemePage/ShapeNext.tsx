import React from "react";
import * as Styles from "./ShapeNextStyle";

interface ShapeNextProps {
  isFlower: boolean;
  title: string;
}

const ShapeNext: React.FC<ShapeNextProps> = ({ isFlower, title }) => {
  return (
    <div>
      <Styles.Container>
        <Styles.Glass>
          <Styles.Title>{title}</Styles.Title>
          {isFlower ? <Styles.FlowerContainer /> : <Styles.SproutContainer />}
        </Styles.Glass>
        <Styles.Shadow />
      </Styles.Container>
    </div>
  );
};

export default ShapeNext;
