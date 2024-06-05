// PopularBook.tsx
import React, { useState, useEffect } from 'react';
import * as PopularBookStyle from './PopularBookStyle';
import Navbar from '../Navbar/Navbar';
import Modal from './BookModal';

const PopularBook: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('전체');
  const [selectedFilter, setSelectedFilter] = useState<string>('별점 높은순');
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [filteredBooks, setFilteredBooks] = useState<any[]>([]); // 필터된 책 목록을 저장할 상태 추가

  // 동화 목록 데이터 받아오기 등의 로직 생략
  const books = [
    { id: 1, title: '내 이름은 김신데렐라', author: '김혜진', image: 'book4.png', genre: '판타지동화', rating: 4.5, registeredAt: '2024-05-19' },
    { id: 2, title: '나도 편식할거야', author: '박예은', image: 'book2.png', genre: '학습동화', rating: 3.8, registeredAt: '2024-05-18' },
    { id: 3, title: '나도 예민할거야', author: '최윤서', image: 'book3.png', genre: '학습동화', rating: 4.2, registeredAt: '2024-05-17' },
    { id: 4, title: 'To the Sea', author: '김진수', image: 'book1.png', genre: '판타지동화', rating: 4.0, registeredAt: '2024-05-16' },
    { id: 5, title: '버럭 똥수와 분홍개구리', author: '이준엽', image: 'book5.png', genre: '수학동화', rating: 4.8, registeredAt: '2024-05-15' },
    { id: 6, title: '터줏대감', author: '김세모', image: 'book6.png', genre: '전래동화', rating: 4.3, registeredAt: '2024-05-14' },
    { id: 7, title: '주니어 생각의 탄생', author: '이네모', image: 'book7.png', genre: '과학동화', rating: 3.9, registeredAt: '2024-05-13' },
    { id: 8, title: '목화값은 누가 물어야하나?', author: '박동글', image: 'book8.png', genre: '학습동화', rating: 4.1, registeredAt: '2024-05-12' },
  ];
  
  
    

  // 책 목록 필터링 함수
  const filterBooks = () => {
    let filtered = [...books]; // 책 목록을 복사하여 사용합니다.
    if (selectedMenu !== '전체') {
      filtered = filtered.filter(book => book.genre === selectedMenu); // 선택된 메뉴에 따라 필터링합니다.
    }
    // 선택된 필터에 따라 정렬합니다.
    if (selectedFilter === '별점 높은순') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedFilter === '최신 등록순') {
      filtered.sort((a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime());
    }
    setFilteredBooks(filtered); // 필터된 목록을 상태에 저장합니다.
  };

  // 페이지 로드 시 책 목록 필터링
  useEffect(() => {
    filterBooks();
  }, [selectedMenu, selectedFilter]); // 선택된 메뉴나 필터가 변경될 때마다 필터링 함수를 호출합니다.

  // 클릭 시 모달 열기
  const openModal = (book: any) => {
    setSelectedBook(book);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <PopularBookStyle.Container>
      <PopularBookStyle.Header>인기 동화</PopularBookStyle.Header>
      <Navbar />
      {/* 상단 메뉴 */}
      <PopularBookStyle.MenuContainer>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('전체')} selected={selectedMenu === '전체'}>전체</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('과학동화')} selected={selectedMenu === '과학동화'}>과학동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('전래동화')} selected={selectedMenu === '전래동화'}>전래동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('학습동화')} selected={selectedMenu === '학습동화'}>학습동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('수학동화')} selected={selectedMenu === '수학동화'}>수학동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('판타지동화')} selected={selectedMenu === '판타지동화'}>판타지동화</PopularBookStyle.MenuButton>
      </PopularBookStyle.MenuContainer>

      {/* 필터링 박스 */}
      <PopularBookStyle.FilterContainer>
        <PopularBookStyle.FilterSelect value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
          <option value="별점 높은순">별점 높은순</option>
          <option value="최신 등록순">최신 등록순</option>
        </PopularBookStyle.FilterSelect>
      </PopularBookStyle.FilterContainer>

      {/* 책 목록 */}
      <PopularBookStyle.BookList>
        {filteredBooks.map(book => (
          <PopularBookStyle.BookItem key={book.id}>
            <div onClick={() => openModal(book)}> {/* 클릭 시 모달 열기 */}
              <img src={`src/assets/images/${book.image}`} alt={book.title} />
              <PopularBookStyle.BookTitle>{book.title}</PopularBookStyle.BookTitle>
              <PopularBookStyle.BookAuthor>{book.author}</PopularBookStyle.BookAuthor>
            </div>
          </PopularBookStyle.BookItem>
        ))}
      </PopularBookStyle.BookList>

      {/* 모달 */}
      <Modal isOpen={selectedBook !== null} onClose={closeModal} book={selectedBook} />
    </PopularBookStyle.Container>
  );
};

export default PopularBook;
