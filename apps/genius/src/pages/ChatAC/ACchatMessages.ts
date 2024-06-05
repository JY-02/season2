export const initialMessages = (name: string) => [
  {
    text: `안녕! 나는 ${name}의 동화 만들기를 도와줄 달콩이야.`,
    isUser: false
  },
  {
    text: `앞으로 내가 이야기를 짧게 만들면 ${name}이가 뒤에 이어질 이야기를 자유롭게 보내주면 돼!`,
    isUser: false
  },
  {
    text: `${name}아 동화 만들 준비가 되었니?`,
    isUser: false
  }
];

export const notReadyMessage = {
  text: "그럼 동화 만들 준비가 되었을 때 나를 다시 불러줘!",
  isUser: false
};

export const startStoryMessage = {
  text: "그럼 동화 만들기를 시작할게!",
  isUser: false
};
export const questions: { text: string; choices: string[] }[] = [
  {
    text: "주인공의 이름이 뭐야?",
    choices: ["올리버", "마야"]
  },
  {
    text: "주인공의 성격이 어때?",
    choices: ["용감하고 호기심이 많음", "조용하고 신중함"]
  },
  {
    text: "주인공이 살고 있는 장소는 어디야?",
    choices: ["마법의 숲", "번화한 도시"]
  },
  {
    text: "주인공은 어떤 문제에 직면해?",
    choices: ["실종된 마법사를 찾아야 함", "드래곤이 마을을 위협함"]
  },
  {
    text: "주인공이 문제를 해결하기 위해 먼저 무엇을 하니?",
    choices: [
      "지혜로운 구미호에게 도움을 요청함",
      "마법의 물건을 찾으러 여행을 떠남"
    ]
  },
  {
    text: "주인공의 여정에서 만나는 동료는 누구야?",
    choices: ["말하는 나무", "용감한 기사"]
  },
  {
    text: "이들이 함께 극복해야 할 도전은 뭐야?",
    choices: ["거대한 폭풍", "마법의 미로"]
  },
  {
    text: "이야기의 해결 방법은 뭐야?",
    choices: ["지혜와 용기를 모아 마법을 사용", "모두가 힘을 합쳐 문제를 해결"]
  },
  {
    text: "주인공이 얻는 교훈은 뭐야?",
    choices: [
      "친구와 함께라면 어떤 문제도 해결할 수 있음",
      "진정한 용기는 자신을 믿는 것에서 나옴"
    ]
  },
  {
    text: "이야기의 마지막 장면은 어떻게 끝나?",
    choices: ["온 마을이 축제를 벌이며 기뻐함", "주인공이 새로운 모험을 시작함"]
  }
  // 여기에 추가적인 질문들을 넣어주세요
];
export const initialChoices = ["응, 준비됐어", "아니"];
export const finalChoices = ["메인 홈으로 돌아가기", "동화 이어서 만들기"];
