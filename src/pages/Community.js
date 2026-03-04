import React, { useState } from 'react'
import styled from 'styled-components'
import DataFAQ from '../components/DataFAQ'


export default function Community() {

  const [openId, setOpenId] = useState(null);
  const toggleBar = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const ComTitle = styled.p`
    width: 1084px;
    margin: 0 auto;
    padding: 150px 0 50px;
    font-size: 24px;
    font-weight: 600;
    display:flex;
    flex-direction:column;

    span {
      font-size: 16px;
      font-weight: 400;
    }
  `
  const Group = styled.ul`
    width: 1084px; height: 50px;
    background-color: #FAFAFA;
    border-top: 1px solid #E8E8E8;
    border-bottom: 1px solid #E8E8E8;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    
    li {
      line-height: 50px;
      color: #93989A;
      text-align: 'center'
    }
  `

  const List = styled.p`
    width: 1084px; height: 60px;
    border-bottom: 1px solid #E8E8E8;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    align-items: center;
  `

  let listStyle = {
    num: {
      display: 'block',
      width: '108px'
    },

    name: {
      display: 'block',
      width: '544px',
      color: '#55585A',
      textAlign: 'start'
    },

    wright: {
      display: 'block',
      width: '108px'
    },

    dated: {
      display: 'block',
      width: '216px',
      color: '#93989A',
      fontSize: '14px'
    },

    see: {
      display: 'block',
      width: '108px',
      color: '#93989A',
      fontSize: '14px'
    }
  }

  const Inner = styled.div`
    width: 1084px;
    margin: 0 auto;
    padding: 30px 0;
    border-bottom: '1px solid #E8E8E8';
    
    div:nth-last-child(1) {margin-bottom: 0;}
    div {
      margin-bottom: 20px;

      p {
        margin:0;
        color: #55585A;
      }
    }
  `




  return (
    <div>
      <ComTitle>
        FAQ <span>자주 하는 질문</span>
      </ComTitle>

      <Group>
        <li style={{ width: '108px' }}>번호</li>
        <li style={{ width: '544px' }}>제목</li>
        <li style={{ width: '108px' }}>작성자</li>
        <li style={{ width: '216px' }}>작성일</li>
        <li style={{ width: '108px' }}>조회</li>
      </Group>

      <div style={{ marginBottom: '200px' }}>
        {DataFAQ.map((item) => (
          <div key={item.id}>

            <List onClick={() => toggleBar(item.id)}>
              <span style={listStyle.num}>{item.id}</span>
              <span style={listStyle.name}>{item.title}</span>
              <span style={listStyle.wright}>{item.writer}</span>
              <span style={listStyle.dated}>{item.date}</span>
              <span style={listStyle.see}>{item.show}</span>
            </List>

            {openId === item.id && (
              <Inner>
                {item.inner01 && (
                  <div>
                    {item.inner01.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                )}

                {item.inner02 && (
                  <div>
                    {item.inner02.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                )}

                {item.inner03 && (
                  <div>
                    {item.inner03.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                )}
              </Inner>
            )}

          </div>
        ))}
      </div>





    </div>
  )
}