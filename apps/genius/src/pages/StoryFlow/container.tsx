import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { LogoImage } from "./styles";
import logoImage from "../../assets/images/logo.png";
import Story1 from "../../assets/images/Story1.svg";
import Story2 from "../../assets/images/Story2.svg";
import Story3 from "../../assets/images/Story3.svg";
import Story4 from "../../assets/images/Story4.svg";
import Story5 from "../../assets/images/Story5.svg";
import Story6 from "../../assets/images/Story6.svg";
import Story7 from "../../assets/images/Story7.svg";

type HeaderElementsType = {
  text1: string;
  text2: string;
  size: number;
  color: string;
  action: () => void;
};

// DalKong Header 시작
const HeaderElementsData: HeaderElementsType[] = [
  {
    text1: "STEP 1",
    text2: "장르 선택",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(0);
      console.log("장르 선택");
    }
  },
  {
    text1: "STEP 2",
    text2: "정보 입력",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(1);
      console.log("정보 입력");
    }
  },
  {
    text1: "STEP 3",
    text2: "이야기 생성",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(2);
      console.log("이야기 생성");
    }
  },
  {
    text1: "STEP 4",
    text2: "이야기 확인",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(3);
      console.log("이야기 확인");
    }
  }
];

const HeaderElementText = ({
  text1,
  text2,
  size,
  color,
  highlight
}: {
  text1: string;
  text2: string;
  size: number;
  color: string;
  highlight: boolean;
}) => {
  return (
    <S.HeaderElement
      style={{
        backgroundColor: highlight ? "rgba(208, 87, 169, 0.25)" : "transparent",
        width: "100px",
        height: "70px",
        padding: "0 10px",
        borderRadius: "10px",
        margin: "0 5px"
      }}
    >
      <div>
        <p style={{ fontSize: size, color: color }}>{text1}</p>
        <p style={{ fontSize: size, color: color }}>{text2}</p>
      </div>
    </S.HeaderElement>
  );
};

// DalKong Header 여기 함수까지
export const Header = ({ currentPage }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  useEffect(() => {
    if (currentPage === "GenrePage") {
      setSelectedStepIndex(0);
    } else if (currentPage === "MakeBook") {
      setSelectedStepIndex(3);
    } else if (currentPage === "ChatDC") {
      setSelectedStepIndex(2);
    } else if (currentPage === "BasicInfo") {
      setSelectedStepIndex(1);
    } else if (currentPage === "DCRoading") {
      setSelectedStepIndex(2);
    } else if (currentPage === "LastPage2") {
      setSelectedStepIndex(3);
    } else if (currentPage === "MakeBook") {
      setSelectedStepIndex(3);
    } else if (currentPage === "StoryFlow") {
      setSelectedStepIndex(3);
    }
  }, [currentPage]);
  return (
    <S.Header>
      <LogoImage src={logoImage} alt="Logo" style={{ marginRight: "10px" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        {HeaderElementsData.map((data, index) => (
          <>
            <div key={index}>
              <HeaderElementText
                text1={data.text1}
                text2={data.text2}
                size={data.size}
                color={data.color}
                highlight={selectedStepIndex === index}
              />
            </div>
            {index < HeaderElementsData.length - 1 && (
              // 마지막 단계 이후가 아니라면 검정색 화살표 추가
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#9D9D9D",
                  width: "40px",
                  textAlign: "center"
                }}
              >
                {">"}
              </div>
            )}
          </>
        ))}
      </div>
    </S.Header>
  );
};

// 여기에서부터 AC Header
type HeaderElementsType2 = {
  text1: string;
  text2: string;
  size: number;
  color: string;
  action: () => void;
};

const HeaderElementsData2: HeaderElementsType2[] = [
  {
    text1: "STEP 1",
    text2: "장르 선택",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(0);
      console.log("장르 선택");
    }
  },
  {
    text1: "STEP 2",
    text2: "주제 선택",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(1);
      console.log("주제 선택");
    }
  },
  {
    text1: "STEP 3",
    text2: "이야기 생성",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(2);
      console.log("이야기 생성");
    }
  },
  {
    text1: "STEP 4",
    text2: "이야기 확인",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(3);
      console.log("이야기 확인");
    }
  }
];

const HeaderElementText2 = ({
  text1,
  text2,
  size,
  color,
  highlight
}: {
  text1: string;
  text2: string;
  size: number;
  color: string;
  highlight: boolean;
}) => {
  return (
    <S.HeaderElement
      style={{
        backgroundColor: highlight ? "rgba(171, 225, 209, 0.5)" : "transparent",
        width: "100px",
        height: "70px",
        padding: "0 10px",
        borderRadius: "10px",
        margin: "0 5px"
      }}
    >
      <div>
        <p style={{ fontSize: size, color: color }}>{text1}</p>
        <p style={{ fontSize: size, color: color }}>{text2}</p>
      </div>
    </S.HeaderElement>
  );
};

export const Header2 = ({ currentPage }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  useEffect(() => {
    if (currentPage === "Genre2") {
      setSelectedStepIndex(0);
    } else if (currentPage === "MakeBook2") {
      setSelectedStepIndex(3);
    } else if (currentPage === "ThemePage") {
      setSelectedStepIndex(1);
    } else if (currentPage === "ThemePageNext") {
      setSelectedStepIndex(1);
    } else if (currentPage === "SelectLevel") {
      setSelectedStepIndex(2);
    } else if (currentPage === "ConfirmLevel") {
      setSelectedStepIndex(2);
    } else if (currentPage === "ChatAC") {
      setSelectedStepIndex(2);
    } else if (currentPage === "ACRoading") {
      setSelectedStepIndex(2);
    } else if (currentPage === "StoryFlow2") {
      setSelectedStepIndex(3);
    } else if (currentPage === "LastPage") {
      setSelectedStepIndex(3);
    }
  }, [currentPage]);
  return (
    <S.Header2>
      <LogoImage src={logoImage} alt="Logo" style={{ marginRight: "10px" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        {HeaderElementsData2.map((data, index) => (
          <>
            <div key={index}>
              <HeaderElementText2
                text1={data.text1}
                text2={data.text2}
                size={data.size}
                color={data.color}
                highlight={selectedStepIndex === index}
              />
            </div>
            {index < HeaderElementsData2.length - 1 && (
              // 마지막 단계 이후가 아니라면 검정색 화살표 추가
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#9D9D9D",
                  width: "40px",
                  textAlign: "center"
                }}
              >
                {">"}
              </div>
            )}
          </>
        ))}
      </div>
    </S.Header2>
  );
};

export const Content1 = () => {
  return (
    <S.Content1>
      <S.Content1Title>
        <S.Content1TitleInner>
          <h1>1. 제목</h1>
          <S.Content1InputTitle>
            <h1 style={{ color: "black", fontSize: "2em" }}>
              바다 모험가들 [신비로운 해저 도시 탐험]
            </h1>
          </S.Content1InputTitle>
        </S.Content1TitleInner>
      </S.Content1Title>
      <S.Content1Subject>
        <S.Content1SubjectInner>
          <h1>2. 주제</h1>
          <S.Content1InputSubject>
            <h1 style={{ color: "black", fontSize: "2em" }}>
              인어공주가 어선 안에서 호기심 많은 남자아이를 만나 서로의 세계를
              알아가며 우정을 쌓는다.
            </h1>
          </S.Content1InputSubject>
        </S.Content1SubjectInner>
      </S.Content1Subject>
    </S.Content1>
  );
};

export const Content2 = () => {
  const images = [Story1, Story2, Story3, Story4, Story5, Story6, Story7];
  const texts = [
    "한때 바닷속에서 이야기가 시작되었습니다.\n밝고 명랑한 성격을 지닌 13살의 인어공주는\n물 밖 세상이 궁금하여 모험을 떠났어요.",
    "인어공주가 물 밖 세상에서 어선을 발견했어요.\n호기심 가득한 그녀는 어선 안으로 들어가 숨어 버리고 말았는데,\n어떤 모험이 그녀를 기다리고 있을까요?",
    "어선 안에서 인어공주는 비슷한 나이의 남자아이를 발견했어요.\n그 두 사람은 서로 궁금해하며 서로의 세계에 대해 이야기를 나누었어요.\n곧 인어공주는 물 속으로 돌아가야 한다는 사실을 알게 되고,\n둘 사이에 특별한 우정이 시작되었습니다.",
    "인어공주와 남자아이는 함께 어선을 떠나\n수영을 즐기며 서로의 세계를 탐험하는데요.\n남자아이는 인어공주를 따라 바닷속으로 내려가\n물 속 동물들과 친구가 되어 즐거운 여행을 떠날 거예요.",
    "이어 남자아이가 인어공주와 함께 수영을 즐겨서\n물속에서도 숨을 쉴 수 있게 되었어요.\n함께 우그웨이 거북이 할아버지를 만나 바닷속 세계를 탐험하는 도중,\n다양한 모험을 겪게 되었습니다.",
    "울긴 크거북이 할아버지와 함께 인어공주와 남자아이는\n해류를 타고 전 세계의 바다를 모험하는데요.\n그들은 아름다운 해저 도시들을 발견하고,\n위험한 상어 무리와의 경쟁을 통해 용기와 우정을 강화했습니다.\n그러나 한 곳에서 물속 마법이 속발했고,\n그들을 구하기 위해 더 많은 모험을 해야 했습니다.",
    "마지막으로 남자아이가 인어공주를 너무 좋아해\n바닷 속에서 살기로 결정했어요.\n인어공주와 남자아이는 결혼하여 전 세계 바다를 자유롭게 모험할 것이며,\n그 용감한 여정은 계속되었습니다."
  ];
  return (
    <S.Content2>
      {images.map((image, index) => (
        <S.Content2Element key={index}>
          <S.FixedImage src={image} alt={`Story ${index + 1}`} />
          <S.Content2ElementInner>
            <p>{texts[index]}</p>
          </S.Content2ElementInner>
        </S.Content2Element>
      ))}
    </S.Content2>
  );
};
