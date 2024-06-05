import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Header = styled.div`
  padding: 20px 0; 
  text-align: left;
  font-size: 40px;
  font-weight: 600;
  color: #000;
  position: absolute;
  top: 15%;
  left: 15%;
  transform: translateX(-50%);
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 260px;
  margin-bottom: 20px;
`;

export const MenuButton = styled.button<{ selected: boolean }>`
  background-color: ${props => (props.selected ? '#D1BA8D' : '#8DD1BD')};
  color: ${props => (props.selected ? '#fff' : '#fff')};
  padding: 20px 80px;
  font-size: 1.3em;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  

  &:hover {
    background-color: #D1BA8D;
    color: #fff;
    border-color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

export const FilterContainer = styled.div`
  margin: 10px 20px;
  margin-left: -30px;
  display: flex;
  justify-content: right;
  width: 80%;
`
;

export const FilterSelect = styled.select`
  padding: 10px 30px;
  font-size: 1.2em; 
  color: #000;
  font-weight: medium;
  border-color: #D9D9D9;
  cursor: pointer;
  background-color: #D9D9D9;
  
  &:focus {
    outline: 0;
  }
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4열로 설정 */
  grid-gap: 40px; /* 각 아이템 사이의 간격 */
  justify-content: center;
  overflow-x: hidden;
  padding: 0 20px;
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
  cursor: pointer;

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
