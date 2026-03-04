import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export default function CartPopup({ setShowMessage }) {


  const Overlay = styled.div`
    position: fixed;
    top:0; left:0;
    width:100vw; height:100vh;
    background: rgba(255, 255, 255, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Message = styled.div`
    background: rgba(0,0,0,0.6);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    padding: 20px 30px;

    p {
      color: white;
      margin: 0 0 20px;
    }

    .btns {
      display: flex;
      gap: 20px;

      button {
        border-radius: 10px;
        width: 100px; height: 35px; 
        background-color: #fff;
        border:none;
        font-size: 14px;

        a {
        text-decoration:none; 
        color: black;
        font-size: 14px;
        }
      }
    }
  `;



  return (
    <Overlay onClick={() => setShowMessage(false)}>
      <Message>
        <p>상품이 장바구니에 상품이 담겼습니다.</p>
        <div className="btns">
          <button type='button' onClick={() => setShowMessage(false)}>쇼핑계속하기</button>
          <button type='button'><NavLink to={`/pages/Cart`}>장바구니로</NavLink></button>
        </div>
      </Message>
    </Overlay>
  );
}

