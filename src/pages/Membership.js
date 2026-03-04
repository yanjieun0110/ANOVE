import React from 'react'
import styled from 'styled-components'


export default function Membership() {
  const Wrap = styled.section`
    width: 1084px;
    margin: 80px auto 200px;
  `

  return (
    <Wrap>
      <img src={process.env.PUBLIC_URL + "/img/memeber_01.jpg"} alt="멤버십01" />
      <img src={process.env.PUBLIC_URL + "/img/memeber_002.jpeg"} alt="멤버십02" />
      <img src={process.env.PUBLIC_URL + "/img/memeber_03.jpg"} alt="멤버십03" />
    </Wrap>
  )
}
