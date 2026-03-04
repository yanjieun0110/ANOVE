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
import Community from './pages/Community';
import Membership from './pages/Membership';
import Login from './pages/Login';
import Join from './pages/Join';

import Home from './components/Home';
import Detail from './components/Detail';
import Cart from './pages/Cart';



function App() {
  const cart = useSelector(state => state.cart);
  const totalCartCount = cart.reduce((sum, item) => sum + item.count, 0);

  const [showSearch, setShowSearch] = useState(false);
  const handleSearchClick = () => {
    setShowSearch(true);
    document.body.style.overflow = 'hidden';
  }
  const handleCloseClick = () => {
    setShowSearch(false);
    document.body.style.overflow = 'auto';
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="App">
      <ScrollTop />

      <header className={`header ${scroll ? 'scroll' : ''}`} id='header'>
        <div className="header_inner">
          <NavLink className="logo" to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/navy_logo.png"} alt="로고이미지" />
          </NavLink>

          <nav className='gnb'>
            <NavLink className='gnb_list' to='/pages/Brand'>BRAND</NavLink>
            <NavLink className='gnb_list' to='/pages/Shop/best'>SHOP</NavLink>
            <NavLink className='gnb_list' to='/pages/Event'>EVENT</NavLink>
            <NavLink className='gnb_list' to='/pages/Community'>COMMUNITY</NavLink>

            <div className="lnb_outer">
              <div className="lnb">
                <ul className='lnb_brand'>
                  <li><NavLink className='lnb_list' to='/pages/Brand'>BRAND</NavLink></li>
                </ul>

                <ul className='lnb_shop'>
                  <li><NavLink className='lnb_list' to='/pages/Shop/best'>베스트</NavLink></li>
                  <li><NavLink className='lnb_list' to='/pages/Shop/hair'>헤어케어</NavLink></li>
                  <li><NavLink className='lnb_list' to='/pages/Shop/style'>스타일링</NavLink></li>
                  <li><NavLink className='lnb_list' to='/pages/Shop/set'>세트&굿즈</NavLink></li>
                </ul>

                <ul className='lnb_event'>
                  <li><NavLink className='lnb_list' to='/pages/Event'>EVENT</NavLink></li>
                </ul>

                <ul className='lnb_community'>
                  <li><NavLink className='lnb_list' to='/pages/Community'>공지사항</NavLink></li>
                  <li><NavLink className='lnb_list' to='/pages/Community/Membership'>회원혜택</NavLink></li>
                </ul>

                <ul className='lnb_utility'>
                  <li><NavLink className='lnb_list' to='/pages/Login'>로그인</NavLink></li>
                  <li><NavLink className='lnb_list' to='/pages/Join'>회원가입</NavLink></li>
                  <li><NavLink className='lnb_list' to='/pages/Cart'>장바구니</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="utility">
            <div className="u_cart">
              <NavLink to="/pages/Cart"><img src={process.env.PUBLIC_URL + "/img/cart.png"} alt="카트 이미지" />
                {totalCartCount > 0 && (
                  <span className="cart_count">{totalCartCount}</span>
                )}
              </NavLink></div>
            <div className="u_my"><NavLink to='/pages/Login'><img src={process.env.PUBLIC_URL + "/img/my.png"} alt="마이 이미지" /></NavLink></div>
            <div className="u_search" onClick={handleSearchClick}><img src={process.env.PUBLIC_URL + "/img/sch.png"} alt="검색 이미지" /></div>
          </div>
        </div>

        {showSearch && (
          <nav className="search_wrap">
            <div className="x_btn" onClick={handleCloseClick}>
              <img src={process.env.PUBLIC_URL + "/img/btn_close.png"} alt="닫기 이미지" />
            </div>

            <div className="search_box">
              <p>Search</p>
              <div className="search_inner">
                <input type="search" />
                <button className="search_icon" type='button'>
                  <img src={process.env.PUBLIC_URL + "/img/sch.png"} alt="검색 이미지" />
                </button>
              </div>
              <div className="hash">
                <NavLink to='/pages/ShopHair'>#트리트먼트</NavLink>
                <NavLink to='/pages/ShopHair'>#헤어팩</NavLink>
                <NavLink to='/pages/ShopHair'>#단백질샴푸</NavLink>
                <NavLink to='/pages/ShopHair'>#오일에센스</NavLink>
              </div>
            </div>
          </nav>
        )}

      </header>



      <main className='wrap'>
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
          <Route path='/pages/Community' element={<Community />} />
          <Route path='/pages/Community/Membership' element={<Membership />} />
          <Route path='/pages/Login' element={<Login />} />
          <Route path='/pages/Cart' element={<Cart />} />
          <Route path='/pages/Join' element={<Join />} />
        </Routes>
      </main>

      <footer className='footer'>
        <div className="f_inner">
          <NavLink className="f_logo" to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/navy_logo.png"}
              alt="로고이미지"
            />
          </NavLink>

          <ul className='f_gnb'>
            <li><NavLink className='f_list' to='/'>홈</NavLink></li>
            <li><NavLink className='f_list' to='/'>이용약관</NavLink></li>
            <li><NavLink className='f_list f_list03' to='/'>개인정보처리방침</NavLink></li>
            <li><NavLink className='f_list' to='/'>이용안내</NavLink></li>
          </ul>

          <div className="f_txt">
            <p>상호명 주식회사 와이어트 대표자권규석 | 사업자등록번호120-86-08810 | 통신판매업신고번호제 2021-서울강남-02122 호 <NavLink className='txt_link' to='/'>[사업자정보확인]</NavLink></p>
            <p>| <span>고객센터1670-5875 (09:00 - 17:00LUNCH 12:00 - 13:00토,일, 공휴일 휴무)</span> | 주소06097 세별빌딩 9층 서울특별시 강남구 봉은사로 427</p>
            <p>이메일 un@wyattcorp.com(대표메일) | global_sales@wyattcorp.com(수출 문의)</p>
            <p>| global_mkt@wyattcorp.com(해외 마케팅 문의) | us.support@wyattcorp.com(US Support)</p>
            <p className='txt_link'>계좌 정보613-000786-01-032 기업은행 (주)와이어트</p>
          </div>

          <p className='f_notice'>※ UNOVE에서 제공하는 모든 컨텐츠는 저작권법에 보호받는 저작물로서, 무단으로 복제, 배포하는 경우에는 저작권법에 의하여 처벌을 받을 수 있습니다.</p>

          <ul className='f_sns'>
            <li><a href="https://www.facebook.com/your_profile" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/img/facebook.png'} alt="페이스북" /></a></li>
            <li><a href="https://www.instagram.com/your_profile" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/img/insta.png'} alt="인스타그램" /></a></li>
          </ul>

          <div className="pay_img">
            <img src={process.env.PUBLIC_URL + '/img/inipay.png'} alt="이니페이" />
          </div>

          <p className='f_copy'>&copy; 2023 UNOVE</p>
        </div>
      </footer>

      <button className='chat_btn'></button>
      <button className='top_btn' onClick={scrollToTop}>TOP</button>


    </div>
  );
}

export default App;
