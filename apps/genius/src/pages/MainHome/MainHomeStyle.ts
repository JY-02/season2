import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('./src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative; /* Add relative positioning */
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  &::before {
    content: "";
    position: absolute; /* Make the overlay cover the entire container */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(200, 230, 230, 0.2); /* White background with 50% opacity */
    z-index: 0; /* Ensure the overlay is behind the content */
  }
`;


export const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 120px;
  padding: 200px 0;
  animation: ${fadeIn} 1s ease forwards;

  & > * {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }

  & > *:nth-child(1) {
    animation-delay: 0.5s; /* 타이틀이 먼저 나타나도록 설정 */
  }

  & > *:nth-child(2) {
    animation-delay: 1s; /* 디스크립션이 타이틀 다음에 나타나도록 설정 */
  }

  & > *:nth-child(3) {
    animation-delay: 2s; /* 버튼이 가장 마지막에 나타나도록 설정 */
  }
`;

export const MainTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 25px;
  color: #fff;
  animation: ${fadeIn} 1s ease forwards;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);


  .highlight {
    color: #688078;
  }
`;

export const MainDescription = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  line-height: 2.0;
  margin-bottom: 30px;
  color: #fff;
  white-space: pre-line;
  animation: ${fadeIn} 1s ease forwards;
`;


export const AnimationContainer = styled.div`
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CreateStoryButton = styled.button`
  background-color: #fff;
  color: #8DD1BD;
  padding: 18px 28px;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
  animation: ${fadeIn} 3.5s ease forwards; /* 버튼이 가장 마지막에 나타나도록 설정 */

  &:hover {
    background-color: #45a049;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

export const SecondSection = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  margin-top: 30vh;
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%;

  &.visible {
    opacity: 1;
  }

  img {
    max-width: 50%;
    margin-left: 80px;
    margin-right: 40px;
  }

  p {
    width: 100%;
    font-size: 2.1em;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    line-height: 1.9;
    padding: 25px 200px;
    margin: 0;

    .highlight {
    color: gold;
  }

  .highlight2 {
    color: pink;
  }
    
  }
`;

export const ThirdSection = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  margin-top: 40vh;
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%;

  &.visible {
    opacity: 1;
  }

  img {
    max-width: 50%;
    margin-right: 100px;
    margin-left: 10px;
  }

  p {
    width: 100%;
    font-size: 2.1em;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    line-height: 1.9;
    padding: 25px 200px;
    margin: 0;
    margin-right: -100px;
    
    .highlight {
    color: #FBBEA9;
  }

  .highlight2 {
    color: #80D172;
  }

  }
`;

export const FourthSection = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  margin-top: 40vh;
  margin-bottom: 200px;
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%;

  &.visible {
    opacity: 1;
  }

  img {
    max-width: 50%;
    margin-left: 50px;
    margin-right: 10px;
  }

  p {
    width: 100%;
    font-size: 2.1em;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    line-height: 1.9;
    padding: 25px 200px;
    margin: 0;
    

    .highlight {
    color: #4B88D5;
  }

  .highlight2 {
    color: #54A6B8;
  }
  }
`;