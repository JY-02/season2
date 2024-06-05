import React from 'react';
import * as ModalStyle from './ModalStyle';

interface Item {
  id: number;
  name: string;
  price: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, items }) => {
  return (
    <>
      {isOpen && (
        <ModalStyle.ModalOverlay onClick={onClose}>
          <ModalStyle.ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalStyle.CloseButton onClick={onClose}>X</ModalStyle.CloseButton>
            <h2>장바구니</h2>
            <ModalStyle.ItemGrid>
              {items.map((item) => (
                <ModalStyle.ItemBox key={item.id}>
                  <ModalStyle.Checkbox />
                  <ModalStyle.Image src={`src/assets/images/store${item.id}.svg`} alt={item.name} />
                  <ModalStyle.Seeds>{item.name}</ModalStyle.Seeds>
                  <ModalStyle.PriceWithLine>{item.price}</ModalStyle.PriceWithLine>
                </ModalStyle.ItemBox>
              ))}
            </ModalStyle.ItemGrid>
            <ModalStyle.CheckoutButton>구매하기</ModalStyle.CheckoutButton>
          </ModalStyle.ModalContent>
        </ModalStyle.ModalOverlay>
      )}
    </>
  );
};

export default Modal;
