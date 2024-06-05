// Modal.tsx
import React from 'react';
import * as ModalStyle from './BookModalStyle';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    id: number;
    title: string;
    author: string;
    image: string;
    summary: string;
    genre: string;
    rating: number;
    registeredAt: string;
  };
}

const BookModal: React.FC<ModalProps> = ({ isOpen, onClose, book }) => {
  if (!isOpen) return null;

  return (
    <ModalStyle.Overlay onClick={onClose}>
      <ModalStyle.ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalStyle.CloseButton onClick={onClose}>X</ModalStyle.CloseButton>
        <ModalStyle.Content>
        <img src={`src/assets/images/${book.image}`} alt={book.title} />
          <hr />
          <h3>제목 : {book.title}</h3>
          <h4>지은이 : {book.author}</h4>
          <h4>장르 : {book.genre}</h4>
          <h4>줄거리 : {book.summary}</h4>
          <h4>별점 : {book.rating}</h4>
          <h4>등록일 : {book.registeredAt}</h4>
          <button>구매하기</button>
        </ModalStyle.Content>
      </ModalStyle.ModalContainer>
    </ModalStyle.Overlay>
  );
};

export default BookModal;
