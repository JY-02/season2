import React, { useState, useRef, useEffect } from "react";
import * as C from "../../pages/StoryFlow/container";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatACStyle";
import { useNavigate } from "react-router-dom";
import {
  initialMessages,
  notReadyMessage,
  startStoryMessage,
  questions,
  initialChoices,
  finalChoices
} from "./ACchatMessages";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatAC: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages("예은"));
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const currentPage = "ChatAC";

  useEffect(() => {
    if (questionIndex !== -1) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: questions[questionIndex].text, isUser: false }
      ]);
    }
  }, [questionIndex]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleChoiceSelect = (choice: string) => {
    if (choice === initialChoices[1]) {
      // '아니'
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        notReadyMessage
      ]);
      setSelectedChoice("finalOptions");
    } else if (choice === initialChoices[0] || choice === finalChoices[1]) {
      // '응, 준비됐어' or '동화 이어서 만들기'
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        startStoryMessage
      ]);
      setQuestionIndex(0);
      setSelectedChoice("");
    } else if (choice === finalChoices[0]) {
      // '메인 홈으로 돌아가기'
      navigate("/MainHome");
    } else if (questionIndex !== -1) {
      setMessages([...messages, { text: choice, isUser: true }]);
      const nextQuestionIndex = questionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setQuestionIndex(nextQuestionIndex);
      } else {
        // 마지막 선택지 후 처리
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "이야기를 위한 선택지를 다 골랐어!", isUser: false }
        ]);
        setSelectedChoice("nextStep");
      }
    }
  };

  return (
    <Styles.ACBackgroundContainer>
      <C.Header2 currentPage={currentPage} />
      <Styles.MessagesList>
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <Styles.MessageContainer isUser={message.isUser}>
              <Styles.UserImage isUser={message.isUser} />
              <Styles.Message isUser={message.isUser}>
                {message.text}
              </Styles.Message>
            </Styles.MessageContainer>
            {!message.isUser &&
              index === messages.length - 1 &&
              (selectedChoice === "nextStep" ? (
                <Choices
                  choices={["다음으로"]}
                  onSelect={() => navigate("/ACRoading")}
                />
              ) : selectedChoice === "finalOptions" ? (
                <Choices choices={finalChoices} onSelect={handleChoiceSelect} />
              ) : (
                <Choices
                  choices={
                    questionIndex >= 0 && questionIndex < questions.length
                      ? questions[questionIndex].choices
                      : initialChoices
                  }
                  onSelect={handleChoiceSelect}
                />
              ))}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
    </Styles.ACBackgroundContainer>
  );
};

export default ChatAC;
