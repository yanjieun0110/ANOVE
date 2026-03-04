import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Join() {
  const [totalTerms, setTotalTerms] = useState(false)
  const [TermsItems, setTermsItems] = useState([])
  const [showPopup, setShowPopup] = useState(false)

  const termsIds = ['terms01', 'terms02', 'terms03', 'terms04', 'terms05']

  const handleTotalTerms = (e) => {
    const checked = e.target.checked
    setTotalTerms(checked)
    if (checked) {
      setTermsItems([...termsIds])
    } else {
      setTermsItems([])
    }
  }

  const handleTerms = (id) => {
    let newTermsItems
    if (TermsItems.includes(id)) {
      newTermsItems = TermsItems.filter(itemId => itemId !== id)
    } else {
      newTermsItems = [...TermsItems, id]
    }
    setTermsItems(newTermsItems)
    setTotalTerms(newTermsItems.length === termsIds.length)
  }

  const handleJoin = () => {
    setShowPopup(true)
  }


  let Txt = {
    main: {
      margin: '0 auto 20px',
      fontSize: '24px',
      padding: 0
    },

    sub: {
      fontSize: '14px',
      padding: 0
    },

    red: {
      marginLeft: '10px',
      color: 'red',
      fontSize: '12px',
      padding: 0
    }
  }

  const Outside = styled.section `
    width:1084px;
    margin: 150px auto 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
  `

  const Wrap = styled.div `
  width:100%;  height: 50px;
  display:flex;
  border-top: 1px solid #F1EEED;
  box-sizing: border-box;


    p {
      width: 200px; height:100%;
      display:block;
      line-height:50px;
      background-color: #f6f6f6;

      .asterisk {color: red;}
    }
    
    .right {
      padding-left: 20px;
      box-sizing: border-box;
      line-height:50px;
      font-size: 14px;
      color: #666;

      input {
        width:300px; height: 30px;
        margin-right: 20px;
        padding: 3px 5px; box-sizing: border-box;
      }
    }
  `

  const TermsWrap = styled.section `
    width: 100%;
    background-color: #fbfbfb;
    padding: 30px; box-sizing: border-box;
    text-align: left;

    input {margin-right: 10px;}

    .total_terms {
      font-size: 18px;
      margin-bottom: 20px;
    }

    ul {
      padding: 15px;
      margin-bottom: 15px;
      border: 1px solid #F1EEED;
      box-sizing: border-box;

      li {
        label {margin-top: 10px;}

        .asterisk {
          margin-left: 5px;
          color: red;
        }
      }
    }
  `

  const JoinBtn = styled.button `
    width: 180px; height: 50px;
    background-color: #202945;
    color: #fff;
    border:none;
    margin: 70px auto 0;

    &:hover { background-color: #3b3f54; }
  `

  const Popup = styled.div`
    position: fixed;
    top:0; left:0; right:0; bottom:0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .popup_content {
      background: #fff;
      padding: 40px;
      border-radius: 10px;
      text-align: center;
      width: 400px;

      p { font-size: 18px; margin-bottom: 30px; }

      button {
        margin: 0 10px;
        padding: 10px 20px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        font-size: 16px;

        a {text-decoration:none;}
      }

      .login {
        background: #202945;
        a {color:#fff;}
        }
      .home {
        background: #f1f1f1;
        a {color:#202945;}
      }
    }
  `


  return (
    <Outside>
      <p className="main_title" style={Txt.main}>회원가입</p>
      <p className="sub_title" style={Txt.sub}>기본정보<span style={Txt.red}>* 필수입력사항</span></p>

      <Wrap>
        <p>아이디 <span className='asterisk'>*</span></p>
        <span className='right'>
        <input type="text" placeholder='아이디를 입력하세요' />
        (영문소문자/숫자, 4-16자)
        </span>
      </Wrap>

      <Wrap>
        <p>비밀번호 <span className='asterisk'>*</span></p>
        <span className='right'>
        <input type="text" placeholder='비밀번호를 입력하세요' />
        (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
        </span>
      </Wrap>

      <Wrap>
        <p>비밀번호 확인 <span className='asterisk'>*</span></p>
        <span className='right'>
        <input type="text" placeholder='비밀번호를 재입력하세요' />
        </span>
      </Wrap>

      <Wrap>
        <p>성함 <span className='asterisk'>*</span></p>
        <span className='right'>
        <input type="text" placeholder='성함을 입력하세요' />
        </span>
      </Wrap>

      <Wrap>
        <p>전화번호 <span className='asterisk'>*</span></p>
        <span className='right'>
        <input type="email" placeholder='전화번호를 입력하세요' />
        (전화번호 -, 공백 없이 입력)
        </span>
      </Wrap>

      <Wrap style={{marginBottom:'100px', borderBottom:'1px solid #F1EEED'}}>
        <p>이메일 <span className='asterisk'></span></p>
        <span className='right'>
        <input type="email" placeholder='이메일을 입력하세요' />
        </span>
      </Wrap>


      <TermsWrap>
        <label htmlFor="total_terms" className='total_terms'><input type="checkbox" id='total_terms' checked={totalTerms} onChange={handleTotalTerms} />이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>

        <ul className='terms01'>
          <li className="number_title">1. 이용약관 동의<span className='asterisk'>*</span></li>
          <li>Greenish 서비스 이용약관에 동의합니다.(회원가입, 주문, 결제, 배송, 환불, 면책 등 권리·의무 규정 포함)</li>
          <li><label htmlFor="terms01"><input type="checkbox" id='terms01' checked={TermsItems.includes('terms01')} onChange={() => handleTerms('terms01')} />약관에 동의합니다(필수약관)</label></li>
        </ul>

        <ul className='terms02'>
          <li className="number_title">2. 개인정보 수집 및 이용 동의<span className='asterisk'>*</span></li>
          <li>회원관리, 주문/결제 처리, 배송, 고객 상담 등 서비스 제공을 위해 개인정보를 수집·이용하는 것에 동의합니다.</li>
          <li><label htmlFor="terms02"><input type="checkbox" id='terms02' checked={TermsItems.includes('terms02')} onChange={() => handleTerms('terms02')} />약관에 동의합니다(필수약관)</label></li>
        </ul>

        <ul className='terms03'>
          <li className="number_title">3. 개인정보 제3자 제공 동의<span className='asterisk'>*</span></li>
          <li>배송, 결제, 물류 등 서비스 제공을 위해 필요한 범위 내에서 개인정보를 제3자에게 제공하는 것에 동의합니다.</li>
          <li><label htmlFor="terms03"><input type="checkbox" id='terms03' checked={TermsItems.includes('terms03')} onChange={() => handleTerms('terms03')} />약관에 동의합니다(필수약관)</label></li>
        </ul>

        <ul className='terms04'>
          <li className="number_title">4. 마케팅 수신 동의 (이메일/SMS)</li>
          <li>신상품, 할인 쿠폰, 이벤트 정보 수신에 동의합니다.</li>
          <li><label htmlFor="terms04"><input type="checkbox" id='terms04' checked={TermsItems.includes('terms04')} onChange={() => handleTerms('terms04')} />약관에 동의합니다</label></li>
        </ul>

        <ul className='terms05'>
          <li className="number_title">5. 맞춤형 광고 및 관심정보 활용 동의</li>
          <li>이용자의 관심사 기반 맞춤형 서비스 및 광고 활용에 동의합니다.</li>
          <li><label htmlFor="terms05"><input type="checkbox" id='terms05' checked={TermsItems.includes('terms05')} onChange={() => handleTerms('terms05')} />약관에 동의합니다</label></li>
        </ul>

      </TermsWrap>


      <JoinBtn onClick={handleJoin}>회원가입</JoinBtn>

      {showPopup && (
        <Popup>
          <div className="popup_content">
            <p>회원가입이 완료되었습니다.</p>
            <button className="login"><NavLink to='/pages/Login'>로그인하기</NavLink></button>
            <button className="home"><NavLink to='/'>홈으로 이동</NavLink></button>
          </div>
        </Popup>
      )}
      
    </Outside>
  )
}
