import styled from "styled-components";
import AlkongBG from "../../assets/images/AlkongBG.svg";

export const BackgroundContainer = styled.div`
  background: url(${AlkongBG});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ShapeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 100px;
`;
export const Regenarate = styled.button`
  position: relative;
  bottom: 100px;
  left: 750px;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background: #e3d3d3;
`;
export const RegenarateImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const OkBtn = styled.button`
  justify-content: center;

  width: 328px;
  height: 54px;

  background: rgba(217, 217, 217, 0.5);
  border-radius: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 0px;
  text-align: center;

  color: rgba(255, 255, 255, 0.76);
`;
export const NoBtn = styled.button`
  justify-content: center;

  width: 328px;
  height: 54px;
  background: rgba(217, 217, 217, 0.5);
  border-radius: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 0px;
  text-align: center;

  color: rgba(255, 255, 255, 0.76);
  margin-left: 130px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 20px 0;
`;
export const JustPadding1 = styled.div`
  height: 120px;
`;
export const JustPadding2 = styled.div`
  height: 94px;
`;
