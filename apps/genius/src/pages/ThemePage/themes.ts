// themes.ts
export interface Theme {
  id: string;
  title: string;
  subjectImage: string;
}

export const themes: Theme[] = [
  {
    id: "1",
    title: "동물 친구들의 모험",
    subjectImage: "/subject_image01.png"
  },
  { id: "2", title: "우주 여행 이야기", subjectImage: "/subject_image02.png" },
  { id: "3", title: "요정과 마법 세계", subjectImage: "/subject_image03.png" },
  { id: "4", title: "달의 소녀 이야기", subjectImage: "/subject_image04.png" },
  { id: "5", title: "길 잃은 토마스", subjectImage: "/subject_image05.png" },
  {
    id: "6",
    title: "생쥐 가족의 나들이",
    subjectImage: "/subject_image06.png"
  },
  {
    id: "7",
    title: "신비의 고래 이야기",
    subjectImage: "/subject_image07.png"
  },
  { id: "8", title: "두꺼비 음악대", subjectImage: "/subject_image08.png" },
  { id: "9", title: "튤립 위의 공주", subjectImage: "/subject_image09.png" }
];
