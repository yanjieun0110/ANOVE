import React from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import data from '../components/Data';
import { Link } from 'react-router-dom';

const EventWrap = styled.section `
  width: 100%;
  background-color: #F1EEED;
  padding-top: 80px; box-sizing: border-box;
`
const Title = styled.p `
  font-family:"Noto Serif KR", "Noto Serif", serif; 
  font-size:26px;
  color: #202945;
  font-weight: 600;
  margin: 50px auto;
`

let layoutStyle = {
  wrap: {
    width: '1084px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '165px'
  },
  box: {
    width: '348px',
    margin: '0 0 20px',
    padding: 0,
  },
  txt: {
    fontSize: '18px',
    color: '#202945',
    textAlign: 'left',
    textDecoration:'none',
    margin: '0'
  }
}

export default function Event() {
  const [events] = useState(data.event);

  return (
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
  )
}
