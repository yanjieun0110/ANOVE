import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Login() {
  const Login = styled.section `
    margin: 200px auto;

    .main_title {
      font-size: 24px;
      color: #202945;
      margin-bottom: 50px;
    }

    .input_wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;

      .input_box {
        display:flex;
        flex-direction: column;
        gap:10px;
      }

      button {
        width: 120px; height: 80px; 
        border-radius: 5px;
        background-color: #202945;
        color: #fff;
        border:none;

        &:hover { background-color: #3b3f54; }
      }
    }
  `

  const Row = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    label {
      width: 60px;
      text-align: left;
      display:block;
      color: #202945;
    }

    input {
      width: 250px; height: 35px;
      border: 1px solid #CCC;
      border-radius: 5px;
      padding: 2px 5px;
      box-sizing: border-box;
      font-size: 14px;
    }
  `

  const Add = styled.div `
    width: 455px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    justify-content: end;

    button, button a {
      font-size: 13px;
      border:none;
      background-color: transparent;
      color: #202945;
      text-decoration: none;

      &:hover {color:black}
    }
  `



  return (
    <Login>
      <p className="main_title">로그인</p>
      <form action="" method='post'>
        <section className='input_wrap'>
          <div className="input_box">
            <Row>
              <label htmlFor="username">아이디</label>
              <input type="text" id='username' name='username' required placeholder='아이디' />
            </Row>

            <Row>
              <label htmlFor="password">비밀번호</label>
              <input type="password" id='password' name='password' required placeholder='비밀번호' />
            </Row>
          </div>

          <button type='button'>로그인</button>
        </section>

        <Add>
          <button type='button'><NavLink to='/pages/Join'>회원가입</NavLink></button>
        </Add>
      </form>

    </Login>
  )
}
