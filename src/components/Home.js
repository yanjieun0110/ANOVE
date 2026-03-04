import styled, { keyframes } from 'styled-components';
import { NavLink, Link } from "react-router-dom";

import data from './Data';
import ProductAction from '../components/ProductAction'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const SliderWrapper = styled.div`
    width: 100vw; height: 100vh;
    position:relative;
    margin-bottom: 165px;

    .slick-slide img {
      width: 100%; height: 100vh;
      object-fit: cover;
    }

    .slick-dots {
      width:100%;
      position: absolute;
      bottom: 30px; left: 0;
      display: flex !important;
      justify-content: center;
      gap: 10px;

      li button:before {
        font-size: 0;
      }

      li div {
        color: #F5F5F5;
      }
      li.slick-active div {
        opacity: 1;
        background: #fff;
      }
    }
  `;

  const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    opacity: 0.7;
  `;

  const Second = styled.section`
    width: 1084px;
    background-color: white;
    margin: 0 auto 165px;
    display: flex;
    gap:20px;
    align-items: center;

    .second_text {
      width:346px;
    }

    .event_banner01 {
      width: 716px;
    }
  `
  const ShopLink = styled(NavLink)`
    color: #202945;
    font-size: 14px;
    transition: color 0.3s;

    &:hover {
      color: #E0B8B1;
    }
  `

  const Title = styled.p`
    color: #202945;
    font-weight:600;
    font-family: "Noto Serif KR", "Noto Serif", serif;
    font-size: 26px;
    margin-bottom: 10px;
  `


  const slick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => <Dot />,
  };



  const bests = data.best;
  let layoutStyle = {
    wrap: {
      width: '1084px',
      margin: '0 auto 165px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    box: {
      width: '348px',
      margin: 0
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
      margin: '10px 0'
    },
    DelPri: {
      color: '#A5A4A5',
      fontSize: '14px',
      margin: 0
    }
  }


  const VideoWrap = styled.section`
    background-color: #202945;
    width:100%; height:550px;
    display:flex;
    align-items: center;

    .video_inner {
      width: 1084px;
      display:flex;
      justify-contents: space-between;
      align-items: center;
      margin:0 auto;
    }
  `

  const VideoTitle = styled.li`
    font-family: "Noto Serif KR", "Noto Serif", serif;
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
  `

  const logos = [
    "/img/slide_logo.png",
    "/img/slide_logo.png"
  ];
  const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-2160px); }
  `
  const LogoWrap = styled.section`
    width: 100%;
    overflow: hidden;
    background-color: #202945;
    padding-bottom: 20px; box-sizing: border-box;
    margin-bottom: 165px;
  `
  const LogoInner = styled.div`
    display: flex;
    gap: 150px;
    animation: ${scroll} 20s linear infinite;
  `
  const LogoItem = styled.img`
    width:2010px;
    flex-shrink: 0;
  `

  const ProWrap = styled.section`
    position:relative;
    &:hover .pro_action {
      opacity: 1;
      pointer-events: auto;
    }
  `



  return (
    <div>
      <SliderWrapper className="visual_slider">
        <Slider {...slick}>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/visual02.png"} alt="배너2" />
          </div>

          <div>
            <img src={process.env.PUBLIC_URL + "/img/visual01.png"} alt="배너1" />
          </div>

          <div>
            <img src={process.env.PUBLIC_URL + "/img/visual03.png"} alt="배너3" />
          </div>

          <div>
            <img src={process.env.PUBLIC_URL + "/img/visual04.png"} alt="배너4" />
          </div>

          <div>
            <img src={process.env.PUBLIC_URL + "/img/visual05.png"} alt="배너5" />
          </div>

          <div>
            <img src={process.env.PUBLIC_URL + "/img/visual06.png"} alt="배너6" />
          </div>
        </Slider>
      </SliderWrapper>

      <Second>
        <ul className="second_text" >
          <li style={{ color: '#202945', fontSize: '22px', marginBottom: '10px' }}>부드러움의 신세계</li>
          <li style={{ color: '#202945', fontWeight: '600', fontSize: '28px', marginBottom: '20px' }}>어노브</li>
          <li style={{ color: '#A5A4A5', marginBottom: '30px' }}>비현실적 부드러움과 우아하고 감각적인 향 <p>어노브로 완성하는 나만의 분위기를 만나보세요.</p></li>
          <li><ShopLink to='/Shop'>SHOP 바로 가기</ShopLink></li>
        </ul>

        <div className="event_banner01">
          <img src={process.env.PUBLIC_URL + '/img/event_banner01.jpg'} alt="이벤트이미지" />
        </div>
      </Second>

      <Title>BEST</Title>
      <p style={{ color: '#202945', marginBottom: '20px' }}>어노브의 베스트 상품을 확인해보세요.</p>


      <Container className="wrap" style={layoutStyle.wrap}>
        <Row className="best_product">
          {bests.map((item, index) => (
            <Col className="best_box" key={index} md={4}>
              <ProWrap>
                <Link to={`/pages/Shop/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                  <img src={item.img} alt={item.title} style={layoutStyle.img} />
                  <p style={layoutStyle.title}>{item.title}</p>
                  <p style={layoutStyle.sub}>{item.sub01}</p>
                  {item.sub02 && <p style={layoutStyle.sub}>{item.sub02}</p>}
                  <p style={layoutStyle.price}>{item.price01}</p>
                  <del style={layoutStyle.DelPri}>{item.price03}</del>
                </Link>

                <ProductAction item={item} />
              </ProWrap>
            </Col>
          ))}
        </Row>
      </Container>

      <VideoWrap>
        <div className="video_inner">
          <iframe width="624" height="500" src="https://www.youtube.com/embed/4ZnuIxF5h08" title="[UNOVE]  Full ver. Unleash Your Bold Elegance 캠페인 ㅣ with 세븐틴 민규 &amp; 배우 노윤서 ㅣ 어노브 브랜드 필름" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <ul>
            <VideoTitle>Brand Story</VideoTitle>
            <li style={{ color: 'white', textAlign: 'start' }}>부드러운 머릿결과 우아하고 감각적인 향</li>
            <li style={{ color: 'white', textAlign: 'start' }}>어노브로 완성하는 나만의 분위기, 지금 만나보세요.</li>
            <li style={{ marginTop: '50px', textAlign: 'start' }}><NavLink to='/Brand' style={{ color: 'white', textDecoration: 'none' }}>{"보러가기 >"}</NavLink></li>
          </ul>
        </div>
      </VideoWrap>

      <LogoWrap>
        <LogoInner>
          {[...logos, ...logos].map((logo, idx) => (
            <LogoItem key={idx} src={logo} alt="logo" />
          ))}
        </LogoInner>
      </LogoWrap>


    </div>
  )
};
