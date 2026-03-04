import React, { useState } from 'react';

import { NavLink, useLocation, Outlet } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import data from '../components/Data';
import styled from 'styled-components';

export default function Shop() {
  const [sort, setSort] = useState('new');
  const location = useLocation();

  const tab = location.pathname.split('/').pop();
  const itemCount = data[`shop_${tab}`]?.length || 0;

  const Tab = styled.nav`
    margin: 130px auto 25px;
    display: flex;
    gap: 20px;
    justify-content: center;
    width: 1084px;
    
    a {
      text-decoration: none;
    }
  `

  const Options = styled.div`
    width: 1084px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 10px;

    p {
      font-size: 14px;

      span {
        margin-left: 5px;
      }
    }

    ul {
      display: flex;
      gap:10px;

      li {
        cursor: pointer;
        font-size: 14px;
      }
    }
  `
  const LinkStyle = ({ isActive }) => ({
    color: isActive ? '#202945' : '#A5A4A5',
    fontWeight: isActive ? 600 : 400,
    textDecoration: 'none'
  });


  return (
    <div>
      <Tab>
        <NavLink to="best" style={LinkStyle}>베스트</NavLink>
        <NavLink to="hair" style={LinkStyle}>헤어케어</NavLink>
        <NavLink to="style" style={LinkStyle}>스타일링</NavLink>
        <NavLink to="set" style={LinkStyle}>세트&굿즈</NavLink>
      </Tab>

      <Options className="shop-options">
        <p>{itemCount}<span>ITEM</span></p>

        <ul>
          {['new', 'name', 'low', 'high'].map((sortKey, idx) => (
            <li
              key={idx}
              value={sortKey}
              onClick={() => setSort(sortKey)}
              style={{ fontWeight: sort === sortKey ? 600 : 400}}
            >
              {sortKey === 'new' ? '신상품' :
                sortKey === 'name' ? '상품명' :
                  sortKey === 'low' ? '낮은가격' :
                    '높은가격'}
            </li>
          ))}
        </ul>
      </Options>

      <Outlet context={{ sort }} />

    </div>
  )
}
