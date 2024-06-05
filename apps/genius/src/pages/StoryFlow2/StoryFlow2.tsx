import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./StoryFlow2";
import * as C from "../../pages/StoryFlow/container";

const StoryFlow2 = () => {
  const navigate = useNavigate();
  const currentPage = "StoryFlow2";
  const handleButtonClick = (type: string) => {
    console.log(` ${type}`);
    if (type === "nextpage") {
      navigate("/MakeBook2");
    } else if (type === "beforepage") {
      navigate("/ChatAC");
    }
  };
  return (
    <S.Container>
      <C.Header2 currentPage={currentPage} />
      <S.Contents>
        <S.ButtonWrapper>
          <S.NextButton onClick={() => handleButtonClick("nextpage")} />
          <S.BeforeButton onClick={() => handleButtonClick("beforepage")} />
        </S.ButtonWrapper>
        <C.Content1 />
        <C.Content2 />
      </S.Contents>
    </S.Container>
  );
};

export default StoryFlow2;
