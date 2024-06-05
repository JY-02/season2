// ShapeStyle.ts
import styled from "styled-components";
import sprout from "../../assets/images/sprout.png";

export const SproutContainer = styled.div<{ show: boolean }>`
  background: url(${sprout});
  background-repeat: no-repeat;
  background-size: cover;
  width: 170px;
  height: 220px;
  position: relative;
  top: 40px;
  left: 80px;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const ImageContainer = styled.button<{ show: boolean }>`
  width: 340px;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  bottom: 220px;
  left: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  border: none;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
