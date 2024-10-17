// BasicInfoStyle.tsx
import styled from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.svg";
import Stone from "../../assets/images/stone.png";

export const Container = styled.div`
  background-image: url(${DalkongBG});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
  margin-top: 180px;
`;
export const OkBtn = styled.button`
  justify-content: center;

  width: 328px;
  height: 54px;
  background: rgba(255, 255, 255, 0.5);

  border-radius: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 0px;
  text-align: center;

  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const NoBtn = styled.button`
  justify-content: center;

  width: 328px;
  height: 54px;
  background: rgba(255, 255, 255, 0.5);

  border-radius: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 0px;
  text-align: center;

  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-left: 130px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 70px;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const Label = styled.label`
  margin-bottom: 55px;
  width: 290px;
  height: 420px;
  background: linear-gradient(
    89.6deg,
    rgba(255, 255, 255, 0.5) 0.64%,
    rgba(255, 255, 255, 0) 138.48%
  );
  border: 7px solid #ffffff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  /* Rectangle 21 */

  width: 250px;
  height: 60.9px;
  background: #d97d96;
  border-radius: 20px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  border-width: 0;
  &:focus {
    outline: none;
  }
  font-family: "Inter";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  text-align: center;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
    font-weight: 500;
  }
`;

export const Option = styled.option`
  font-family: "Inter";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
`;

export const Select = styled.select`
  width: 250px;
  height: 60.9px;
  background: #d97d96;
  border-radius: 20px;
  border: none;
  padding: 5px;
  color: white;
  outline: none;
  appearance: none;
  cursor: pointer;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }

  font-size: 24px;
`;
export const AgeInput = styled.input`
  width: 80px;
  background: transparent;
  border: none;
  border-width: 0;
  &:focus {
    outline: none;
  }
  font-size: 24px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  &::placeholder {
    color: #dbdbdb;
    font-weight: 300;
  }
  /* 숫자 오르내리는 꺽새 숨기기 */
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const AgeContainer = styled.div`
  width: 250px;
  height: 60.9px;
  background: #d97d96;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  border-width: 0;

  text-align: center;
  justify-content: center;

  display: flex;
`;

export const TextArea = styled.textarea`
  width: 230px;
  height: 60.9px;
  background: #d97d96;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 20px;
  margin-bottom: -45px;
  font-size: 24px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border-width: 0;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ffffff;
    font-weight: 500;
  }
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1); /* For Firefox */
  &::-webkit-scrollbar {
    width: 8px; /* Width of vertical scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* Color of thumb */
    border-radius: 4px; /* Roundness of thumb */
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1); /* Color of track */
  }
`;

export const Number = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 44px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 25px;
`;

export const Img = styled.div`
  background: url(${Stone});
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 40px;
  width: 130px;
  height: 160px;
`;
