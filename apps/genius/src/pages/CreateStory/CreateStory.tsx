import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styles from './CreateStoryStyle';
import Navbar2 from '../Navbar/Navbar2';

const CreateStory: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const updateGreeting = () => {
    const nicknameInput = document.getElementById('nicknameInput') as HTMLInputElement;
    setNickname(nicknameInput.value);
  };

  const showGreeting = () => {
    const trimmedNickname = nickname.trim();
    if (trimmedNickname === '') {
      alert('이름을 입력하세요!');
    } else {
      alert(`안녕하세요 ${trimmedNickname} 작가님! 환영합니다.`);
      navigate('/Tutorial'); 
    }
  };

  const handleInputContainerTransitionEnd = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <Navbar2 /> 
      <Styles.Container className={`content-container ${loaded ? 'loaded' : ''}`}>
        <Styles.InputContainer
          className={`input-container ${loaded ? 'loaded' : ''}`}
          onTransitionEnd={handleInputContainerTransitionEnd}
        >
          <p>
            안녕하세요 <Styles.GreetingText>{nickname || '__________'}</Styles.GreetingText> 작가님!
          </p>
          <p style={{ marginBottom: 0 }}>
            동화를 만들 작가님의 이름을 입력해주세요.
          </p>
          <Styles.NicknameInput
            type="text"
            id="nicknameInput"
            placeholder="이름을 입력하세요"
            onInput={updateGreeting}
          />
          <div>
            <Styles.SubmitBtn id="submitBtn" onClick={showGreeting}>
              제출하기
            </Styles.SubmitBtn>
          </div>
        </Styles.InputContainer>
      </Styles.Container>
    </div>
  );
};

export default CreateStory;
