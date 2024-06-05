export interface Badge {
  name: string;
  image: string;
  locked: boolean;
  content: string;
}

export const badges: Badge[] = [
  {
    name: "소중한 꽃 피우기",
    image: "/badge1.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "알콩이와 친해지기",
    image: "/badge2.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "달콩이와 친해지기",
    image: "/badge3.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 출석왕",
    image: "/badge4.png",
    locked: true,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 독서왕",
    image: "/badge5.png",
    locked: true,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 인싸",
    image: "/badge6.png",
    locked: true,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "나를 표현하기",
    image: "/badge7.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  },
  {
    name: "당신은 훌륭한 작가",
    image: "/badge8.png",
    locked: false,
    content: "처음으로 씨앗을 통해 동화를 만들었을 때 얻을 수 있어요 :)"
  }
];
