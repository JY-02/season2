// SearchStyle.ts
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  padding: 20px 0;
  margin-left: 10px;
  text-align: left;
  font-size: 40px;
  font-weight: 600;
  transform: translateX(-800px);
  color: #000;
  margin-top: 150px; /* 상단 여백 추가 */
`;

export const SearchForm = styled.form`
  margin: 20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
`;

export const FilterSelect = styled.select`
  padding: 25px 10px;
  font-size: 1.3em;
  padding-left: 10px;
  font-weight: medium;
  border: none;
  cursor: pointer;
  background-color: #fff;
  margin-right: 10px;

  &:focus {
    outline: 0;
  }
`;

export const SearchInput = styled.input`
  padding: 25px 230px;
  padding-left: 23px;
  font-size: 1.3em;
  border: none;
  cursor: text;
  background-color: #fff;
  margin-right: 0px;

  &:focus {
    outline: 0;
  }
`;

export const SearchButton = styled.button`
  padding: 23px 25px;
  font-size: 1.3em;
  border-radius: 0;
  cursor: pointer;
  border: none;
  background-color: #8DD1BD;
  color: #fff;

  &:focus {
    outline: 0;
  }

`;

export const BookList = styled.div`
   display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4열로 설정 */
  grid-gap: 40px; /* 각 아이템 사이의 간격 */
  justify-content: center;
  margin-top: 40px; /* 책 목록과의 간격 조정 */
  margin-bottom: 100px;

  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
`;

export const BookItem = styled.div`
  width: 200px;
  text-align: center;
  margin: 40px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 방향으로 가운데 정렬합니다. */
  &:hover {
    opacity: 0.9;
  }
`;

export const BookTitle = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 1.2em;
  color: #000;
  text-align: center;

  a:hover {
    color: #000;
    text-decoration: underline;
  }
`;

export const BookAuthor = styled.div`
  width: 100%;
  font-size: 1em;
  color: #666;
  text-align: center;
  margin-top: 5px;
  cursor: pointer;

`;

export const NoResultsText = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 150px;
  text-align: center;
  font-size: 1.3em;
  
`;