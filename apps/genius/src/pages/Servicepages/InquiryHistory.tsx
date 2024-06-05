import React, { useState, useEffect } from 'react';
import * as ServiceStyle from './InquiryHistoryStyle';
import Navbar2 from "../Navbar/Navbar2";

const InquiryHistory = () => {
  // 나의 문의 내역 데이터
  const inquiries = [
    { id: 1, title: "제목 1", author: "작성자 1", question: "문의 내용 1" },
    { id: 2, title: "제목 2", author: "작성자 2", question: "문의 내용 2" },
    // 추가적인 나의 문의 내역 데이터
    { id: 3, title: "제목 3", author: "작성자 3", question: "문의 내용 3" },
  ];

  return (
    <>
      <Navbar2 />
      <ServiceStyle.Container>
        <h2>나의 문의 내역</h2>
        <ServiceStyle.InquiryList>
          {inquiries.map((inquiry) => (
            <ServiceStyle.InquiryItem key={inquiry.id}>
              <h3>제목: {inquiry.title}</h3>
              <p>작성자: {inquiry.author}</p>
              <p>문의 내용: {inquiry.question}</p>
            </ServiceStyle.InquiryItem>
          ))}
        </ServiceStyle.InquiryList>
      </ServiceStyle.Container>
    </>
  );
};

export default InquiryHistory;
