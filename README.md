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
/* 라우팅구조 */
```js
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
/ 
├── Home
├── Brand (/pages/Brand)
├── Shop (/pages/Shop)
│   ├── Best (/pages/Shop/best)
│   ├── Hair (/pages/Shop/hair)
│   ├── Style (/pages/Shop/style)
│   └── Set (/pages/Shop/set)
│
├── Shop Detail (/pages/Shop/detail/:id)
│
├── Event (/pages/Event)
│   └── Event Detail (/pages/Event/detail/:id)
│
├── Community (/pages/Community)
│   └── Membership (/pages/Community/Membership)
│
├── Login (/pages/Login)
├── Join (/pages/Join)
└── Cart (/pages/Cart)
##

/* Shop layout Oulet */
```js
<Outlet context={{ sort }} />

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

