import React, { useState } from 'react';
import * as StoreStyle from './StoreStyle';
import Navbar from '../Navbar/Navbar';
import Modal from './Modal';

interface Item {
  id: number;
  name: string;
  price: string;
}

const Store: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: '씨앗 5개', price: '3,000￦' },
    { id: 2, name: '장미 뱃지', price: '2,000￦' },
    { id: 3, name: '개나리 뱃지', price: '2,000￦' },
    { id: 4, name: '민들레 뱃지', price: '2,000￦' },
    { id: 1, name: '씨앗 15개', price: '6,000￦' },
    { id: 2, name: '철쭉 뱃지', price: '2,000￦' },
    { id: 3, name: '튤립 뱃지', price: '2,000￦' },
    { id: 4, name: '백합 뱃지', price: '2,000￦' },
    { id: 1, name: '씨앗 30개', price: '10,000￦' },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StoreStyle.Container>
      <Navbar />
      <StoreStyle.Title>씨앗 상점</StoreStyle.Title>
      <StoreStyle.BasketContainer>
        <StoreStyle.Basket onClick={handleOpenModal}>
          <StoreStyle.BasketImage src="/src/assets/images/basket.png" alt="장바구니" />
          장바구니
        </StoreStyle.Basket>
      </StoreStyle.BasketContainer>
      <StoreStyle.ItemGrid>
        {items.map((item) => (
          <StoreStyle.ItemBox key={item.id}>
            <StoreStyle.Image src={`src/assets/images/store${item.id}.svg`} alt={item.name} />
            <StoreStyle.Seeds>{item.name}</StoreStyle.Seeds>
            <StoreStyle.Price>{item.price}</StoreStyle.Price>
          </StoreStyle.ItemBox>
        ))}
      </StoreStyle.ItemGrid>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} items={items} />
    </StoreStyle.Container>
  );
};

export default Store;
