// InquiryForm.tsx
import React, { useState } from "react";
import * as ServiceStyle from './InquiryFormStyle'; // 변경된 경로
import Navbar2 from "../Navbar/Navbar2";

const InquiryForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('제출된 질문:', question);
    // 여기에 제출된 질문을 처리하는 로직을 추가할 수 있습니다.
  };

  return (
    <>
      <Navbar2 />
      <ServiceStyle.Container>
        <h2>1:1 문의 접수</h2>
        <form onSubmit={handleSubmit}>
          <ServiceStyle.InputGroup>
            <ServiceStyle.InputLabel>제목</ServiceStyle.InputLabel>
            <ServiceStyle.InputField
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </ServiceStyle.InputGroup>
          <ServiceStyle.InputGroup>
            <ServiceStyle.InputLabel>작성자</ServiceStyle.InputLabel>
            <ServiceStyle.InputField
              type="text"
              placeholder="작성자를 입력하세요"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </ServiceStyle.InputGroup>
          <ServiceStyle.InputGroup>
            <ServiceStyle.InputLabel>문의 내용</ServiceStyle.InputLabel>
            <ServiceStyle.TextArea
              placeholder="문의 내용을 입력하세요"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </ServiceStyle.InputGroup>
          <ServiceStyle.SubmitButton type="submit">등록하기</ServiceStyle.SubmitButton>
        </form>
      </ServiceStyle.Container>
    </>
  );
};

export default InquiryForm;
