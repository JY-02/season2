import styled from "styled-components";
import alcong_bg from "../../assets/images/AlkongBG.svg";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";

interface MessageProps {
  isUser: boolean;
}

export const ACBackgroundContainer = styled.div`
  background-image: url(${alcong_bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px); /* Subtract the height of the input area */
  overflow-y: auto;

  width: 1800px;
  max-height: 700px;

  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1); /* For Firefox */
  &::-webkit-scrollbar {
    width: 8px; /* Width of vertical scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* Color of thumb */
    border-radius: 4px; /* Roundness of thumb */
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1); /* Color of track */
  }
`;

export const MessageContainer = styled.div<MessageProps>`
  display: flex;
  ${({ isUser }) =>
    isUser ? "flex-direction: row-reverse;" : "flex-direction: row;"}

  margin-bottom: 20px;
`;

export const UserImage = styled.div<MessageProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: ${({ isUser }) =>
    isUser ? `url(${user2})` : `url(${user1})`};
  background-size: cover;
`;

export const Message = styled.div<{ isUser: boolean }>`
  background-color: ${({ isUser }) => (isUser ? "#F9EB54" : "#B5E4F8")};
  color: #333;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  margin-left: ${({ isUser }) => (isUser ? "auto" : "10px")};
  margin-right: ${({ isUser }) => (isUser ? "10px" : "auto")};
  max-width: 90%;
  word-break: break-all;
  width: fit-content;
  height: fit-content;
  font-size: 30px;
`;
