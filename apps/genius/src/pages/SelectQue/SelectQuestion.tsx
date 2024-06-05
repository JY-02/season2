import React, { useState } from 'react';
import * as Styles from "./SelectQuestionStyle.ts";

const SelectQuestion: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const showConfirmation = (option: string) => {
    setSelectedOption(option);

    // 문구 변경
    document.getElementById('question')!.innerText = '좋았어 다음으로 넘어갈까?';

    // 확인 메시지 표시
    document.getElementById('confirmationMessage')!.innerText = '선택한 개수: ' + option;

    // 버튼 표시
    document.getElementById('confirmationButtons')!.innerHTML = `
      <button class="confirmationButton" onclick="nextStep()">응. 그럴래!</button>
      <button class="confirmationButton" onclick="resetSelection()">아니. 다시 선택할래</button>
    `;

    // 선택한 버튼 이외의 버튼 비활성화
    document.querySelectorAll('.optionButton:not(.selected)').forEach(btn => {
      btn.classList.add('disabled');
    });
  };

  const nextStep = () => {
    // 여기에 다음으로 진행하는 동작 추가
    alert('다음으로 진행합니다.');
  };

  const resetSelection = () => {
    // 선택 해제 및 활성화
    document.querySelectorAll('.optionButton').forEach(btn => {
      btn.classList.remove('selected', 'disabled');
    });

    // 초기 문구로 변경
    document.getElementById('question')!.innerText = '선택지 개수를 몇개로 할까요?';

    // 초기화 메시지 및 버튼 숨김
    document.getElementById('confirmationMessage')!.innerText = '';
    document.getElementById('confirmationButtons')!.innerHTML = '';
  };

  return (
    <div>
      <div id="question">선택지 개수를 몇개로 할까요?</div>
      <div id="buttonContainer">
        <button
          className={`optionButton ${selectedOption === '1개' ? 'selected' : ''}`}
          onClick={() => showConfirmation('1개')}
        >
          1개
        </button>
        <button
          className={`optionButton ${selectedOption === '2개' ? 'selected' : ''}`}
          onClick={() => showConfirmation('2개')}
        >
          2개
        </button>
        <button
          className={`optionButton ${selectedOption === '3개' ? 'selected' : ''}`}
          onClick={() => showConfirmation('3개')}
        >
          3개
        </button>
      </div>

      <div id="confirmationMessage"></div>
      <div id="confirmationButtons"></div>
    </div>
  );
};

export default SelectQuestion;
