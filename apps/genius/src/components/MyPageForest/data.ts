// data.ts
export const pieData1 = {
  2022: [
    { name: "공포동화", value: 30 },
    { name: "판타지동화", value: 40 },
    { name: "전래동화", value: 20 },
    { name: "학습동화", value: 10 }
  ],
  2023: [
    { name: "공포동화", value: 25 },
    { name: "판타지동화", value: 43 },
    { name: "전래동화", value: 22 },
    { name: "학습동화", value: 10 }
  ],
  2024: [
    { name: "공포동화", value: 28 },
    { name: "판타지동화", value: 0 },
    { name: "전래동화", value: 24 },
    { name: "학습동화", value: 8 }
  ]
};

export const pieData2 = {
  2022: [
    { name: "알콩이", value: 50 },
    { name: "달콩이", value: 60 }
  ],
  2023: [
    { name: "알콩이", value: 55 },
    { name: "달콩이", value: 65 }
  ],
  2024: [
    { name: "알콩이", value: 62 },
    { name: "달콩이", value: 58 }
  ]
};

export interface BarDataItem {
  name: string;
  uv: number;
}

interface BarData {
  [key: string]: BarDataItem[];
}

export const barData: BarData = {
  "2022": [
    { name: "1월", uv: 10 },
    { name: "2월", uv: 5 },
    { name: "3월", uv: 6 },
    { name: "4월", uv: 7 },
    { name: "5월", uv: 1 },
    { name: "6월", uv: 12 },
    { name: "7월", uv: 2 },
    { name: "8월", uv: 13 },
    { name: "9월", uv: 2 },
    { name: "10월", uv: 23 },
    { name: "11월", uv: 24 },
    { name: "12월", uv: 3 }
  ],
  "2023": [
    { name: "1월", uv: 2 },
    { name: "2월", uv: 4 },
    { name: "3월", uv: 12 },
    { name: "4월", uv: 3 },
    { name: "5월", uv: 1 },
    { name: "6월", uv: 4 },
    { name: "7월", uv: 14 },
    { name: "8월", uv: 5 },
    { name: "9월", uv: 2 },
    { name: "10월", uv: 3 },
    { name: "11월", uv: 4 },
    { name: "12월", uv: 5 }
  ],
  "2024": [
    { name: "1월", uv: 12 },
    { name: "2월", uv: 12 },
    { name: "3월", uv: 1 },
    { name: "4월", uv: 3 },
    { name: "5월", uv: 2 },
    { name: "6월", uv: 10 },
    { name: "7월", uv: 15 },
    { name: "8월", uv: 4 },
    { name: "9월", uv: 23 },
    { name: "10월", uv: 3 },
    { name: "11월", uv: 34 },
    { name: "12월", uv: 4 }
  ]
  // 기타 데이터...
};
