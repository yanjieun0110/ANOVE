import React from 'react'
import { useParams } from "react-router-dom";
import data from "./Data";
import styled from 'styled-components';

export default function EventDetail() {
  const { id } = useParams();
  const event = data.event[Number(id)];

  const Title = styled.h3 `
    color: #202945;
    margin-bottom: 30px;
  `

  return (
    <div style={{ width: "1084px", margin: "150px auto" }}>
      <Title>{event.title + event.sub}</Title>

      {event.detail.map((src, index) => (
        <img key={index} src={src} alt="event detail" />
      ))}
    </div>
  );
}
