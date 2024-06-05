import styled from "styled-components";

export const Separator = styled.hr`
  border: 0;
  margin: 30px 0;

  /* Line 27 */

  border: 2px solid #98b9af;
`;

export const MyPagePlantContainer = styled.div`
  position: relative;
  width: 60vw;
`;
export const Title = styled.div`
  width: 70vw;

  background: rgba(255, 255, 255, 0.62);

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;

  color: #42655b;
  display: flex;
  margin-top: -140px;
  margin-left: -120px;
`;
export const OneBadge = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const OneBadgeTitle = styled.div`
  margin: 30px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;

  color: #42655b;
`;
export const BadgeImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 125px;
`;
export const NonBadge = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;

  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NonBadgeName = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 200px;
  color: #6e6e6e;
`;
