import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { barData } from "./data";
import * as S from "./ForestMainStyle";

// 데이터 항목에 대한 타입 정의
interface BarDataItem {
  name: string;
  uv: number;
}

// 전체 데이터 객체에 대한 타입 정의
interface BarData {
  [key: string]: BarDataItem[];
}

// props에 대한 타입 정의
interface TaleGraphProps {
  year: string;
}

const TaleGraph: React.FC<TaleGraphProps> = ({ year }) => {
  const data: BarDataItem[] = (barData as BarData)[year];

  return (
    <div>
      <BarChart width={1400} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 " />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend payload={[]} />
        <Bar dataKey="uv" fill="#E7578C" barSize={80} />
      </BarChart>
      <S.Text4>월별 동화책 제작 개수</S.Text4>
    </div>
  );
};

export default TaleGraph;
