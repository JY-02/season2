import styled from "styled-components";
import sprout from "../../assets/images/sprout.png";
import flower from "../../assets/images/Flower.png";

export const Container = styled.div`
  position: relative;
`;

export const Glass = styled.div`
  width: 350px;
  height: 420px;
  border: 10px solid #ffffff;
  border-radius: 400px 400px 0px 0px;
  background: rgba(255, 255, 255, 0.34);
`;

export const Shadow = styled.div`
  position: absolute;
  bottom: -65.81px;
  width: 370px;
  height: 65.81px;
  background: linear-gradient(180deg, #abe1d1 0%, rgba(171, 225, 209, 0) 100%);
`;
export const SproutContainer = styled.div`
  background: url(${sprout});
  background-repeat: no-repeat;
  background-size: cover;
  width: 170px;
  height: 220px;
  position: relative;
  top: 40px;
  left: 80px;
`;

export const FlowerContainer = styled.div`
  background: url(${flower});
  background-repeat: no-repeat;
  background-size: cover;
  width: 270px;
  height: 305px;
  position: relative;
  bottom: 25px;
  left: 32px;
`;

export const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  margin-top: 80px;
  margin-bottom: 40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
