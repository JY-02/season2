import React, { useState, useRef, useEffect } from "react";
import * as C from "../../pages/StoryFlow/container";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatDCStyle";
import { useNavigate } from "react-router-dom";
import {
  initialMessages,
  notReadyMessage,
  startStoryMessage,
  story1Message,
  story2Message,
  initialChoices,
  finalChoices
} from "./DCchatMessages";

const ChatDC: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [messages, setMessages] = useState(initialMessages("예은"));
  const [userMessage, setUserMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [story1Index, setStory1Index] = useState(0);
  const [story2Index, setStory2Index] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentPage = "ChatDC";
  const navigate = useNavigate();

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedChoice]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
    if (choice === initialChoices[1]) {
      setMessages([
        ...messages,
        { text: initialChoices[1], isUser: true },
        notReadyMessage
      ]);
      setShowChat(false);
    } else if (choice === initialChoices[0] || choice === finalChoices[1]) {
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        startStoryMessage
      ]);
      addStoryMessages();
      setShowChat(true);
    } else if (choice === finalChoices[0]) {
      navigate("/MainHome");
    } else if (choice === "다음으로") {
      navigate("/DCRoading");
    }
  };

  const addStoryMessages = () => {
    if (
      story1Index < story1Message.length &&
      story2Index < story2Message.length
    ) {
      setMessages((messages) => [
        ...messages,
        { ...story1Message[story1Index], isUser: false },
        { ...story2Message[story2Index], isUser: false }
      ]);
      setStory1Index(story1Index + 1);
      setStory2Index(story2Index + 1);
    } else {
      // 스토리의 끝에 도달했을 때 메시지를 설정하고 "다음으로"를 활성화합니다.
      setMessages((messages) => [
        ...messages,
        { text: "이야기를 만들 준비가 다 되었어!", isUser: false }
      ]);
      setTimeout(() => {
        setSelectedChoice("다음으로"); // '다음으로' 선택을 활성화합니다.
      }, 500);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (userMessage.trim() !== "") {
      const newUserMessage = { text: userMessage.trim(), isUser: true };
      setMessages((messages) => [...messages, newUserMessage]);
      setUserMessage("");
      setTimeout(() => addStoryMessages(), 100);
    }
  };

  return (
    <Styles.DCBackgroundContainer>
      <C.Header currentPage={currentPage} />
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
              (selectedChoice === "" ||
                selectedChoice === "아니" ||
                selectedChoice === "다음으로") && (
                <Choices
                  choices={
                    selectedChoice === "다음으로"
                      ? ["다음으로"]
                      : selectedChoice === "아니"
                      ? finalChoices
                      : initialChoices
                  }
                  onSelect={handleChoiceSelect}
                />
              )}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
      {showChat && (
        <form onSubmit={handleSubmit}>
          <Styles.InputContainer>
            <Styles.Input
              type="text"
              placeholder="달콩이에게 보낼 메시지를 입력해주세요"
              value={userMessage}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <Styles.Button type="submit">전송</Styles.Button>
          </Styles.InputContainer>
        </form>
      )}
    </Styles.DCBackgroundContainer>
  );
};

export default ChatDC;
