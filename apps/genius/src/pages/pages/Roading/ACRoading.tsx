import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위해 추가
import * as C from "../../pages/StoryFlow/container";
import * as S from "./RoadingStyle";

const ACRoading: React.FC = () => {
  const [name] = useState("혜진");
  const messages = [
    `${name}이가 작성한 이야기를\n바탕으로 동화를 만들어볼게`,
    "잠깐만 기다려\n동화책이 만들어지고 있어\n......"
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  const navigate = useNavigate(); // 페이지 이동 함수 사용

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    // 일정 시간 후에 페이지 이동
    const timer = setTimeout(() => {
      navigate("/storyflow2"); // 4초 후에 storyflow2 페이지로 이동
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer); // 컴포넌트 unmount 시 타이머 제거
    };
  }, [messages.length, navigate]);

  const currentPage = "ACRoading";

  return (
    <S.AContainer>
      <C.Header2 currentPage={currentPage} />
      <S.Label>{messages[messageIndex]}</S.Label> <S.DC />
    </S.AContainer>
  );
};

export default ACRoading;
