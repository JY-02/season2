import React from "react";
import { Link } from "react-router-dom"; // Link 추가
import * as ServiceStyle from './ServiceStyle';
import Navbar from "../Navbar/Navbar";

// 공지사항 데이터
const notices = [
  { id: 1, title: "코로나19 관련 동화책 배송 서비스 안내"},
  { id: 2, title: "동화 제작 서비스 이용 안내" },
  // 추가적인 공지사항 데이터
  { id: 3, title: "새로운 기능 출시"},
];

// 자주 묻는 질문 데이터
const faqs = [
  { id: 1, question: "로그인이 되지 않아요." },
  { id: 2, question: "서비스 상담 시간은 언제인가요?" },
  // 추가적인 자주 묻는 질문 데이터
  { id: 3, question: "결제 방법은 무엇이 있나요?"},
];

const Service = () => {
  return (
    <>
      <Navbar />
      <ServiceStyle.Container>
        <ServiceStyle.SearchForm>
          <input type="text" placeholder="질문을 검색해보세요" />
          <button type="submit">검색</button>
        </ServiceStyle.SearchForm>
        <ServiceStyle.ButtonGroup>
          {/* 1:1 문의 접수 페이지로 이동하는 링크 추가 */}
          <Link to="/InquiryForm">
            <button>1:1 문의 접수</button>
          </Link>
          {/* 나의 문의 내역 페이지로 이동하는 링크 (추가적인 버튼) */}
          <Link to="/InquiryHistory">
          <button>나의 문의 내역</button>
          </Link>
        </ServiceStyle.ButtonGroup>
        <ServiceStyle.Section>
          <h2>공지사항<span><a href="#">더보기 &gt;</a></span></h2>
          <ul>
            {notices.map((notice) => (
              <li key={notice.id}>
                <h3>{notice.title}</h3>
              </li>
            ))}
          </ul>
        </ServiceStyle.Section>
        <ServiceStyle.Section>
          <h2>자주 묻는 질문<span><a href="#">더보기 &gt;</a></span></h2>
          <ul>
            {faqs.map((faq) => (
              <li key={faq.id}>
                <h3>{faq.question}</h3>
              </li>
            ))}
          </ul>
        </ServiceStyle.Section>
      </ServiceStyle.Container>
    </>
  );
};

export default Service;
