import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import * as C from "./container";

const StoryFlowView = () => {
  const navigate = useNavigate();
  const currentPage = "StoryFlow";
  const handleButtonClick = (type: string) => {
    console.log(` ${type}`);
    if (type === "nextpage") {
      navigate("/MakeBook");
    } else if (type === "beforepage") {
      navigate("/ChatDC");
    }
  };
  return (
    <S.Container>
      <C.Header currentPage={currentPage} />
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

export default StoryFlowView;
