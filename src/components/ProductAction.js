import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store';
import styled from 'styled-components';

const ProAction = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 30%; left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
`;

export default function ProductAction({ item, setShowMessage }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setLiked(!liked);
  };

  const handleAddCart = () => {
    dispatch(addItem({ ...item, count: 1 }));

    setShowMessage(true);
  };

  return (
    <div>
      <ProAction className='pro_action'>
        <div className="HartBtn" onClick={handleHeartClick} style={{cursor:'pointer'}}>
          <img
            src={process.env.PUBLIC_URL + (liked ? '/img/full_hart_icon.png' : '/img/hart_icon.png')}
            alt="찜버튼"
          />
        </div>
        <div className="CartBtn" onClick={handleAddCart} style={{cursor:'pointer'}}>
          <img src={process.env.PUBLIC_URL + '/img/cart_icon.png'} alt="장바구니" />
        </div>
      </ProAction>
    </div>
  );
}