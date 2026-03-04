import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { addCount, subCount, deleteItem, deleteItems, changeCount } from '../components/store';



export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [totalChecked, setTotalChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleTotalCheck = (e) => {
    const checked = e.target.checked;
    setTotalChecked(checked);
    if (checked) {
      setCheckedItems(cart.map(item => item.id));
    } else {
      setCheckedItems([]);
    }
  };

  const handleCheck = (id) => {
    let newCheckedItems;
    if (checkedItems.includes(id)) {
      newCheckedItems = checkedItems.filter(itemId => itemId !== id);
    } else {
      newCheckedItems = [...checkedItems, id];
    }
    setCheckedItems(newCheckedItems);

    if (newCheckedItems.length === cart.length) {
      setTotalChecked(true);
    } else {
      setTotalChecked(false);
    }
  };

  const handleInputChange = (id, value) => {
    const newCount = parseInt(value);
    if (!isNaN(newCount) && newCount >= 1) {
      dispatch(changeCount({ id: id, count: newCount }));
    }
  };

  const MyCart = styled.section`
    width: 1084px;
    margin: 0 auto;
    margin-top: 100px;

    .table-border-top-bottom {
      margin-top: 10px;
      td,th {
        height: 50px;
        vertical-align: middle;
        border-top: 1px solid #E8E8E8;
        border-bottom: 1px solid #E8E8E8;
        border-left: none;
        border-right: none;
      }

      th {
        color: #93989A;
        background-color: #FAFAFA;
        font-weight: 400;
      }
    }

    /* 칸 비율 */
    th:nth-child(1) { width: 5%; }  /* 체크박스 */
    th:nth-child(2) { width: 10%; } /* 이미지 */
    th:nth-child(3) { width: 31%; } /* 상품정보 */
    th:nth-child(4) { width: 10%; } /* 판매가 */
    th:nth-child(5) { width: 10%; } /* 수량 */
    th:nth-child(6) { width: 8%; } /* 배송구분 */
    th:nth-child(7) { width: 8%; } /* 배송비 */
    th:nth-child(8) { width: 10%; } /* 합계 */
    th:nth-child(9) { width: 8%; } /* 선택 */
  `

  const TopBtns = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
      width: 90px; height: 30px;
      font-size: 14px;
      border:none;
      border-radius: 3px;

      &.del_btn {
        background-color: #7D7D7D;
        color: #fff;
      }

      &.print_btn {
        border: 1px solid #ccc;
        background-color: #fff;
        color: #000;
      }
    }
  `

  const CountBox = styled.div`
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

    display:flex;
    align-items: center;

    input {
      width: 25px; height: 25px;
      border: 1px solid #CCC;
      font-size:14px;
      line-height:25px;
      border-radius: 5px;
      margin:0;
      margin-right: 5px;
      text-align: center;
    }

    .count_btn {
      display:flex;
      flex-direction: column;

      button {
        width: 25px; height: 15px;
        line-height: 10px;
        border: 1px solid #CCC;
        font-size: 10px;
        background-color: #fff;
      }
    }
  `
  const Check = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:14px;

    input {
      width: 15px; height: 15px;
    }
  `

  const Delete = styled.button`
    width: 45px; height: 30px;
    font-size:14px;
    background-color: #7D7D7D;
    color: #fff;
    border:none;
    border-radius: 5px;
    padding-top: 2px;
  `

  return (
    <MyCart>
      <h2>장바구니</h2>
      <TopBtns>
        <button className='del_btn' type='button' onClick={() => {
          if (checkedItems.length > 0) {
            dispatch(deleteItems(checkedItems));
            setCheckedItems([]);
            setTotalChecked(false);
          }
        }}>선택삭제</button>
      </TopBtns>
      <Table className="table-border-top-bottom">
        <thead>
          <tr>
            <th><Check>전체<input type="checkbox" checked={totalChecked}
              onChange={handleTotalCheck} /></Check></th>
            <th>이미지</th>
            <th>상품정보</th>
            <th>판매가</th>
            <th>수량</th>
            <th>배송구분</th>
            <th>배송비</th>
            <th>합계</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <td><input type="checkbox" checked={checkedItems.includes(item.id)}
                onChange={() => handleCheck(item.id)} style={{ width: '17px', height: '17px' }} /></td>
              <td><img src={item.img} alt={item.title} style={{ width: '80px' }} /></td>
              <td style={{ color: '#202945', fontSize: '14px', fontWeight: '600' }}>{item.title}</td>
              <td style={{ color: '#202945', fontWeight: '600', fontSize: '14px' }}>{item.price01}</td>
              <td>
                <CountBox>
                  <input type="number" value={item.count} onChange={(e) => handleInputChange(item.id, e.target.value)} />

                  <div className='count_btn'>
                    <button type='button' onClick={() => dispatch(addCount(item.id))}>▲</button>
                    <button type='button' onClick={() => dispatch(subCount(item.id))}>▼</button>
                  </div>
                </CountBox>
              </td>
              <td style={{ color: '#7D7D7D', fontSize: '14px' }}>기본배송</td>
              <td style={{ fontSize: '14px' }}>무료</td>
              <td style={{ color: '#202945', fontWeight: '600' }}>{(item.price02 * item.count).toLocaleString()}원</td>
              <td><Delete type='button' onClick={() => dispatch(deleteItem(item.id))}>삭제</Delete></td>
            </tr>
          ))}

          <tr className=''>
            <td colSpan={6}>총금액</td>
            <td colSpan={3}>
              {cart.reduce((sum, item) => sum + item.price02 * item.count, 0).toLocaleString()}원
            </td>
          </tr>
        </tbody>
      </Table>
    </MyCart>
  );
}