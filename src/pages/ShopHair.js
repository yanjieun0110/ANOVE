import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Link, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

import data from '../components/Data';
import ProductAction from '../components/ProductAction'
import CartPopup from '../components/CartPopup' 



export default function ShopHair() {
  const { sort } = useOutletContext();

  const [showMessage, setShowMessage] = useState(false);

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


  const sortedData = [...data.shop_hair].sort((a, b) => {
    if (sort === 'new') return b.date - a.date;
    if (sort === 'low') return a.price02 - b.price02;
    if (sort === 'high') return b.price02 - a.price02;
    if (sort === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div>
      <Container style={layoutStyle.wrap}>
        <Row style={{ gap: '20px' }}>
          {sortedData.map(item => (
            <Col md={4} key={item.id} style={layoutStyle.box} >
              <ProWrap>
                <Link to={`/pages/Shop/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                  <img src={item.img} alt={item.title} style={layoutStyle.img} />
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
    </div>
  )
}
