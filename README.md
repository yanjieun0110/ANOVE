## 📌 Project Overview
어노브 공식 사이트를 모티브로 제작한 React 기반 개인 프로젝트입니다. 메뉴 구조를 단순화하여 사용자 흐름을 개선했으며, 컴포넌트 재사용성과 상태 관리를 고려해 SPA 구조로 구현했습니다.

## ⏱️ Development Period
코딩기간 : 26/02/02 ~ 26/02/20 (19일)

## 🛠️ Tech Stack
1. HTML
2. CSS
3. JavaScript
4. React
5. Node.js
6. Styled-components / CSS Modules
7. React Bootstrap
8. React Router DOM
9. Redux

**************************************************************
## /* 라우팅구조 */
```js
import './App.css';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollTop from './components/ScrollTop';

import Brand from './pages/Brand';
import Shop from './pages/Shop';
import ShopBest from './pages/ShopBest';
import ShopHair from './pages/ShopHair';
import ShopStyle from './pages/ShopStyle';
import ShopSet from './pages/ShopSet';
import Event from './pages/Event';
import EventDetail from './components/EventDetail';
import Community from './pages/Community';
import Membership from './pages/Membership';
import Login from './pages/Login';
import Join from './pages/Join';

import Home from './components/Home';
import Detail from './components/Detail';
import Cart from './pages/Cart';

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/pages/Brand' element={<Brand />} />
  <Route path='/pages/Shop' element={<Shop />}>
  <Route path='best' element={<ShopBest />} />
    <Route path='hair' element={<ShopHair />} />
    <Route path='style' element={<ShopStyle />} />
    <Route path='set' element={<ShopSet />} />
  </Route>

  <Route path='/pages/Shop/detail/:id' element={<Detail />} />
  <Route path='/pages/Event' element={<Event />} />
  <Route path='/pages/Event/detail/:id' element={<EventDetail />} />
  <Route path='/pages/Community' element={<Community />} />
  <Route path='/pages/Community/Membership' element={<Membership />} />
  <Route path='/pages/Login' element={<Login />} />
  <Route path='/pages/Cart' element={<Cart />} />
  <Route path='/pages/Join' element={<Join />} />
</Routes>
```
##

## /* Styled-components / CSS Modules */
→ Header와 Footer는 전역 CSS(`App.css`)로 처리하고, 페이지별 스타일링은 `Styled-components`와 `CSS Modules`를 활용해 모듈화했습니다.

```css
const ProWrap = styled.section`
    position: relative;
    &:hover .pro_action {
      opacity: 1;
      pointer-events: auto;
    }
  `;

  let layoutStyle = {
    wrap: {
      width: '1084px',
      margin: '0 auto 165px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    box: {
      width: '348px',
      margin: '0 0 20px',
      padding: 0,
    },
    title: {
      color: '#202945',
      fontSize: '18px',
      fontWeight: 600,
      margin: '10px 0',
    },
    sub: {
      color: '#A5A4A5',
      fontSize: '14px',
      margin: 0
    },
    price: {
      color: '#202945',
      fontWeight: 600,
      margin: '10px 0 0'
    },
    DelPri: {
      color: '#A5A4A5',
      fontSize: '14px',
      margin: 0
    }
  }
```

## /* Shop Oulet & sort */
→ Shop 페이지에서 상품 리스트를 렌더링하고,
React Router의 Outlet context를 활용하여 정렬 상태(sort)를 하위 페이지(best, hair, style, set)에 전달했습니다.
이로 인해 하위 페이지들이 동일한 정렬 로직을 공유할 수 있도록 구현했습니다.

```js
// shop.js
<Outlet context={{ sort }} />

// ...pages
<Container style={layoutStyle.wrap}>
  <Row style={{ gap: '20px' }}>
    {sortedData.map(item => (
      <Col md={4} key={item.id} style={layoutStyle.box} >
        <ProWrap>
          <Link to={`/pages/Shop/detail/${item.id}`} style={{ textDecoration: 'none' }}>
            <img src={item.img} alt={item.title} />
            <p style={layoutStyle.title}>{item.title}</p>
            <p style={layoutStyle.sub}>{item.sub01}</p>
            {item.sub02 && <p style={layoutStyle.sub}>{item.sub02}</p>}
            <p style={layoutStyle.price}>{item.price01}</p>
            <del style={layoutStyle.DelPri}>{item.price03}</del>
          </Link>

          <ProductAction item={item} setShowMessage={setShowMessage} />
        </ProWrap>
      </Col>
    ))}
  </Row>

  {showMessage && <CartPopup setShowMessage={setShowMessage} />}
</Container>
```

## /* 찜하기 & 장바구니 버튼 구현 */
→ 상품 카드에 찜하기와 장바구니 버튼을 구현했습니다.
- useState를 사용하여 찜 상태를 관리하고 클릭 시 아이콘이 토글되도록 처리했습니다.
- 장바구니 버튼 클릭 시 Redux dispatch를 이용해 상품 데이터를 전역 상태에 추가하고,
  상품이 추가되면 장바구니 안내 팝업이 표시되도록 구현했습니다.

```js
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

  const handleHeartClick = () => setLiked(!liked);

  const handleAddCart = () => {
    dispatch(addItem({ ...item, count: 1 }));
    setShowMessage(true);
  };

  return (
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
  );
}
```

## /* 장바구니 전역 관리 */
→ Redux Toolkit을 사용하여 장바구니 상태를 전역으로 관리했습니다.
- 동일 상품이 장바구니에 존재하면 수량 증가, 없으면 새로 추가
- 상품 수량 증가/감소, 직접 수량 변경
- 상품 개별 삭제 및 선택 상품 일괄 삭제

```js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index > -1) state[index].count++;
      else state.push(action.payload);
    },
    addCount(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state[index].count++;
    },
    subCount(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state[index].count = Math.max(state[index].count - 1, 1);
    },
    deleteItem(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
    deleteItems(state, action) {
      return state.filter(item => !action.payload.includes(item.id));
    },
    changeCount(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index > -1) state[index].count = action.payload.count;
    }
  }
});

export const { addItem, addCount, subCount, deleteItem, deleteItems, changeCount } = cart.actions;

export default configureStore({
  reducer: { cart: cart.reducer }
});
```
## /* event layout */
```js
// evnet
<EventWrap>
  <Title>EVENT</Title>

  <Container style={layoutStyle.wrap}>
    <Row style={{gap: '20px'}}>
      {
       events.map((event, index) => {
        return (
          <Col key={index} style={layoutStyle.box}>
            <Link to={`/pages/Event/detail/${index}`} style={{textDecoration: 'none'}}>
              <img src={event.img} alt="상품이미지" />
              <p style={layoutStyle.txt}>{event.title}</p>
              <p style={layoutStyle.txt}>{event.sub}</p>
            </Link>
          </Col>
        )
       })
      }
    </Row>
  </Container>
</EventWrap>
```

## /* eventDetail:id 파라미터 */
→ React를 활용하여 이벤트 상세 페이지를 구현했습니다.
URL 파라미터(`id`)를 기반으로 이벤트 데이터를 조회하고, 제목과 서브 타이틀을 상단에 표시하며, 상세 이미지 배열을 map으로 반복 렌더링하여 화면에 출력하도록 구현했습니다.

```js
<div style={{ width: "1084px", margin: "150px auto" }}>
  <Title>{event.title + event.sub}</Title>

  {event.detail.map((src, index) => (
    <img key={index} src={src} alt="event detail" />
  ))}
</div>
```
