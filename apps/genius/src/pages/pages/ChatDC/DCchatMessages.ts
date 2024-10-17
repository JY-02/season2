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

export const initialChoices = ["응, 준비됐어", "아니"];
export const finalChoices = ["메인 홈으로 돌아가기", "동화 이어서 만들기"];

export const notReadyMessage = {
  text: "그럼 동화 만들 준비가 되었을 때 나를 다시 불러줘!",
  isUser: false
};

export const startStoryMessage = {
  text: "그럼 내가 먼저 동화를 만들어볼게",
  isUser: false
};

export const story1Message = [
  {
    text: "바닷속에 살고 있는 인어공주는 밝고 명랑한 성격의 소유자로, 13살입니다. 어느 날 그녀는 물 바깥 세상이 궁금하여 탐험을 떠납니다.",
    isUser: false
  },
  {
    text: "인어공주는 물 밖 세상에서 어선을 발견했어. 호기심 가득한 그녀는 어선 안으로 들어가 숨어 버리고 말았어. ",
    isUser: false
  },
  {
    text: "어선 안에서 인어공주는 비슷한 나이의 남자아이를 발견했어. 그 두 사람은 서로 궁금해하며 서로의 세계에 대해 이야기를 나눴어. 곧 인어공주는 물 속으로 돌아가야 한다는 사실을 알고 둘 사이에 특별한 우정이 시작되었어.",
    isUser: false
  },
  {
    text: "인어공주와 남자아이는 함께 어선을 떠나 수영을 즐기며 서로의 세계를 탐험합니다. 남자아이는 인어공주를 따라 바닷속으로 내려가 물 속 동물들과 친구가 되어 즐거운 여행을 떠나는데... ",
    isUser: false
  },
  {
    text: "인어공주와 남자아이는 우그웨이 거북이 할아버지를 만나게 되었어. 할아버지는 남자아이가 물속에서도 숨을 쉴 수 있도록 마법을 부리며 둘의 모험을 도와주었어. 함께 우그웨이 거북이 할아버지와 함께 신비로운 바닷속 세계를 탐험하게 되었지요.",
    isUser: false
  },
  {
    text: "인어공주와 남자아이는 우그웨이 거북이 할아버지와 함께 바닷속 해류를 타고 전 세계의 바다 곳곳을 모험했어. 그들은 아름다운 신비로운 해저 도시들을 발견하고, 위험한 상어 무리와의 경쟁을 통해 용기와 우정을 키웠어. 하지만 그 중 한 곳에서 물속 마법이 속발했고, 그들을 구하기 위해 더 많은 모험이 기다리고 있었어.",
    isUser: false
  }
];

export const story2Message = [
  {
    text: " 인어공주가 물 밖 세상에서 무엇을 발견했을까요?",
    isUser: false
  },
  {
    text: "인어공주가 어선 안에서 무엇을 발견하는지 어떤 모험을 겪게 될까요?",
    isUser: false
  },
  {
    text: "인어공주와 남자아이는 어떻게 함께 어선을 떠나 재미있는 모험을 하게 될까요?",
    isUser: false
  },
  {
    text: "인어공주와 남자아이가 바닷속 여행 중 만나게 될 동물 친구는 누구일까요? 어떤 모험을 함께 하게 될 것인가요?",
    isUser: false
  },
  {
    text: " 우그웨이 거북이 할아버지와 함께 인어공주와 남자아이는 어떤 모험을 하게 될까요?",
    isUser: false
  },
  {
    text: "인어공주와 남자아이는 마법 속에서 어떤 모험을 겪게 될까요?",
    isUser: false
  }
];
