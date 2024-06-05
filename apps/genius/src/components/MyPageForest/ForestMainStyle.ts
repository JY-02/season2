import styled from "styled-components";
import MyForestFlower from "../../assets/images/MyForestFlower.png";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TopPane = styled.div`
  /* Rectangle 161 */

  box-sizing: border-box;

  width: 1400px;
  height: 450px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 69px;
  gap: 135px;
`;
export const BottomPane = styled.div`
  /* Rectangle 161 */

  box-sizing: border-box;

  width: 1500px;
  height: 450px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
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
`;
export const FlowerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const FlowerImage = styled.div`
  background: url(${MyForestFlower});
  background-repeat: no-repeat;
  background-size: cover;
  width: 330px;
  height: 330px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PieChart2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Text1 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #000000;
`;
export const Text2 = styled.div`
  /* 10 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  text-align: center;

  color: #fc87b1;
`;
export const Text4 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  text-align: center;

  color: #42655b;
`;

export const YearSelectorContainer = styled.div`
  width: 70vw;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;

  color: #42655b;
  display: flex;
  margin-left: 100px;
`;
