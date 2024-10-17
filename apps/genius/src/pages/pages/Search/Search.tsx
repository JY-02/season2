import React, { useState, useEffect } from 'react';
import * as SearchStyle from './SearchStyle';
import Navbar from '../Navbar/Navbar';
import Modal from './BookModal';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterBy, setFilterBy] = useState<'title' | 'author'| ''>('');
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const [showNoResults, setShowNoResults] = useState<boolean>(false);
  const [showDefaultList, setShowDefaultList] = useState<boolean>(true);
  const [selectedBook, setSelectedBook] = useState<any | null>(null); // selectedBook 상태 추가

  // 클릭 시 모달 열기
  const openModal = (book: any) => {
    setSelectedBook(book);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedBook(null);
  };

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

  // 검색 함수
  const handleSearch = () => {
    const results = filterBooks();
    setSearchResults(results);
    setShowNoResults(results.length === 0);
    setShowDefaultList(false);
  };

  // 검색어를 받아 책 목록을 필터링하는 함수
  const filterBooks = () => {
    if (searchQuery) {
      if (filterBy === 'title') {
        return books.filter(book =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else if (filterBy === 'author') {
        return books.filter(book =>
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        // 선택되지 않은 경우 모든 동화를 보여줌
        return books.filter(book =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    } else {
      // 검색어가 없는 경우에는 모든 동화를 보여줌
      setShowDefaultList(true);
      return books;
    }
  };

  // 엔터 키를 눌렀을 때 검색 함수 호출
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchStyle.Container>
      <SearchStyle.Header>동화 검색</SearchStyle.Header>
      <Navbar />
      {/* 검색 입력 폼 */}
      <SearchStyle.SearchForm onSubmit={(e) => { e.preventDefault(); }}>
        <SearchStyle.FilterSelect value={filterBy} onChange={(e) => setFilterBy(e.target.value as 'title' | 'author')}>
          <option value="">선택</option>
          <option value="title">동화 제목</option>
          <option value="author">작가명</option>
        </SearchStyle.FilterSelect>
        <SearchStyle.SearchInput
          type="text"
          placeholder={`검색어를 입력하세요`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SearchStyle.SearchButton type="button" onClick={handleSearch}>검색</SearchStyle.SearchButton>
      </SearchStyle.SearchForm>

      {/* 검색 결과 목록 */}
      {(searchResults.length > 0 || showDefaultList) && (
        <SearchStyle.BookList>
          {(searchResults.length > 0 ? searchResults : books).map(book => (
            <SearchStyle.BookItem key={book.id}>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(book); }}>                
              <img src={`src/assets/images/${book.image}`} alt={book.title} />
              </a>
              <SearchStyle.BookTitle>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(book); }}>{book.title}</a>              
              </SearchStyle.BookTitle>
              <SearchStyle.BookAuthor>{book.author}</SearchStyle.BookAuthor>
            </SearchStyle.BookItem>
          ))}
        </SearchStyle.BookList>
      )}

      {showNoResults && (
        <SearchStyle.NoResultsText>일치하는 결과가 없습니다.</SearchStyle.NoResultsText>
      )}

      {/* 모달 */}
      <Modal isOpen={selectedBook !== null} onClose={closeModal} book={selectedBook} />
    </SearchStyle.Container>
  );
};

export default Search;

