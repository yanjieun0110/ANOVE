import React from 'react'
import styled from 'styled-components'


export default function Brand() {

  const First = styled.section `
    margin-top: 80px;
    background-color: #202945;

    .f_img, .brand_txt01 {
      width: 532px;
      margin: 0 auto;
      padding: 200px 0 100px;
    }
    
    p, h3 {
      color: #FFFFFF;
    }
  `

  const VideoWrap = styled.div `
    width: 100%; height: 100vh;
    margin: 200px auto 0;

    iframe {
      width: 100%;  height: 100%;
      display: block;
    }
  `

  const Brand01 = styled.div `
    padding-bottom: 100px;
    .img_wrap {
      width: 1084px;
      margin: 0 auto;
      display: flex;

      > div {
        width: 50%;
      }
    }

    .main_txt {
      margin: 50px 0 30px;
      > p {
        font-size: 24px;
        color: #FFFFFF;
        padding: 3px;
        margin:0;
      }
    }

    .sub_txt {
      padding-bottom: 30px;
      >p {
        font-size: 14px;
        color: #FFFFFF;
        padding: 3px;
        margin:0;
      }
    }
  `

  const Second = styled.section `
    background-color: #FFFFFF;
    width: 1084px; height: 100vh;
    margin: 200px auto;
    position: relative;

    .b_img03 {
      width: 350px;
    }
    .b_txt03 {
      position: absolute;
      top:0; left: 330px;
      display: flex;
      flex-direction: column;
      align-items: start;

      p {
        margin: 0;
        font-family: "Noto Serif KR", "Noto Serif", serif;
        font-weight: 600;
        font-size: 40px;
        color: #202945;
      }
    }

    .b_txt04 {
      margin-top:80px;
      display: flex;
      flex-direction: column;
      align-items: start;

      p {
        margin: 0;
        padding: 2px 0;
        color: #202945;
      }
    }
    .b_txt05 {
      position: absolute;
      bottom: 130px; right: 70px;
      writing-mode: vertical-lr;
      font-size: 26px;
      font-family: "Noto Serif KR", "Noto Serif", serif;
      font-weight: 600;
    }

    
    .b_img04 {
      width: 250px;
      position: absolute;
      top: 200px; right: 20px;
    }

    .b_img05 {
      width: 250px;
      position: absolute;
      bottom: 90px; right: 180px;
    }
  `

  const Third = styled.section `
    width: 100%;
    background-color: #202945;
    position: relative;

    .b_txt06 {
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);

      > p {
        color: #fff;
        font-family: "Noto Serif KR", "Noto Serif", serif;
        font-weight: 600;
        font-size: 50px;
        margin: -20px;
      }
    }

    .b_img06 {
      width: 887px;
      margin: 0 auto;
      padding-top: 200px;
    }

    .sub_06 {
      padding: 100px 0;
      > p {
        color: #fff;
        margin:0;
        font-size: 14px;
        padding-bottom: 5px;
      }
    }
  `
  
  const Fourth = styled.section `
    width:100%; height: 100vh;
    background-image: url('/img/b07_bg.jpg');
    background-size: cover;
  `
  const FInner = styled.div `
    width: 1084px; height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .b_img07 {
      width: 624px;
    }
    
    p {
      margin-right: 50px;
      color: #202945;
      font-family: "Noto Serif KR", "Noto Serif", serif;
      font-weight: 600;
      font-size: 30px;
      writing-mode: vertical-lr;
    }
  `
  const TwoImg = styled.div `
    display: flex;
    width: 1084px;
    margin: 0 auto;

    > div {
      width:50%;
      position: relative;

      p {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%);
        color: #fff;
        font-family: "Noto Serif KR", "Noto Serif", serif;
        font-weight: 600;
        font-size: 40px;
      }
    }
  `

  const Fifth = styled.section `
    width:100%;
    background-color: #fff;
    padding: 200px 0 100px;

    .title {
      width: 1084px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;

      p {
        color: #202945;
        font-family: "Noto Serif KR", "Noto Serif", serif;
        font-weight: 600;
        font-size: 50px;
        margin: 0;
      }
      span {
        font-size: 13px;
        color: #202945;
        margin:0;
      }
    }

    .b_txt08 {
      margin: 50px 0;

      p {
        margin:0;
        padding-bottom: 5px;
        color: #202945;
      }
    }
  `

  const Last = styled.section`
    width:100%;
    position: relative;

    .logo {
      width: 400px;
      position: absolute;
      bottom: 18%; left: 50%;
      transform: translateX(-50%);
    }
    .slogan {
      width: 1000px;
      position: absolute;
      bottom: 100px; left: 50%;
      transform: translateX(-50%);
    }
  `


  return (
    <div>
      <First>
        <div className="f_img">
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="로고" />
        </div>

        <p>비현실적인 부드러움과 감각적인 향의 조화로</p>
       <p>대담한 우아함을 완성해 주는</p>
       <h3>아이코닉 퍼스널 케어, 어노브</h3>

       <VideoWrap>
          <iframe src="https://www.youtube.com/embed/4ZnuIxF5h08?autoplay=1&mute=1&playsinline=1" title="[UNOVE]Full ver" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </VideoWrap>

        <div className="brand_txt01">
          <img src={process.env.PUBLIC_URL + '/img/brand_txt_01.png'} alt="브랜드텍스트01" />
          <img src={process.env.PUBLIC_URL + '/img/brand_txt_02.png'} alt="브랜드텍스트02" />
        </div>

        <Brand01>
          <section className="img_wrap">
            <div className="d_img01">
              <img src={process.env.PUBLIC_URL + '/img/b01.jpg'} alt="브랜드01" />
            </div>
            <div className="d_img02">
              <img src={process.env.PUBLIC_URL + '/img/b02.jpg'} alt="브랜드02" />
            </div>
          </section>

          <div className="main_txt">
            <p>어노브로 완성하는</p>
            <p>대담한 우아함</p>
          </div>

          <div className="sub_txt">
            <p>건강한 아름다움은 겉만 반질거리지 않습니다.</p>
            <p>코어부터 탄탄하고, 안에서부터 우아하게 빛나죠.</p>
            <p>어노브의 대담한 우아함도 그렇습니다.</p>
          </div>

          <div className="sub_txt">
            <p>우리는 단단한 내면과 건강하고</p>
            <p>아름다운 일상에서부터 뿜어져 나오는 자신감이</p>
            <p>개개인 고유의 우아함을 완성해 준다고 믿습니다.</p>
          </div>
        </Brand01>
      </First>

      <Second>
        <div className="b_img03">
          <img src={process.env.PUBLIC_URL + '/img/b03.jpg'} alt="브랜드03" />
        </div>

        <div className='b_txt03'>
          <p>Feel the surreal</p>
          <p>softness</p>
        </div>

        <div className="b_txt04">
          <p>어노브는 본질에 집중하며</p>
          <p>높은 품질과 뛰어난 효과의 제품으로</p>
          <p style={{marginBottom:'30px'}}>확실한 변화를 선사하고,</p>

          <p>나 자신에게 온전히 집중하고 돌보며</p>
          <p>가꾸는 특별한 즐거움을 제공합니다.</p>
        </div>

        <div className="b_img04">
          <img src={process.env.PUBLIC_URL + '/img/b04.jpg'} alt="브랜드04" />
        </div>

        <div className="b_img05">
          <img src={process.env.PUBLIC_URL + '/img/b05.jpg'} alt="브랜드05" />
        </div>

        <p className="b_txt05">elegant scent</p>
      </Second>

      <Third>
        <div className="b_txt06">
          <p>Iconic</p>
          <p>Personal Brand</p>
        </div>

        <div className="b_img06">
          <img src={process.env.PUBLIC_URL + '/img/b06.jpg'} alt="브랜드06" />
        </div>

        <div className="sub_06">
          <p>UNOVE focuses on essence,</p>
          <p>delivering definite transformation through high quality,</p>
          <p>exceptional products that enable a unique joy in nurturing</p>
          <p>and cherishing oneself wholeheartedly.</p>
        </div>
      </Third>

      <Fourth>
        <FInner>
          <p>Elegant. Softness. Bold.</p>

          <div className="b_img07">
            <img src={process.env.PUBLIC_URL + '/img/b07.jpg'} alt="브랜드07" />
          </div>
        </FInner>
      </Fourth>

      <Fifth>
        <div className="title">
          <p>Our Value</p>
          <span>Feel the surreal softness with an elegant scent</span>
          <span>that will make your day special.</span>
        </div>

        <TwoImg>
          <div className="b_img08">
            <img src={process.env.PUBLIC_URL + '/img/b08.jpg'} alt="브랜드08" />

            <p>Softness</p>
          </div>
          <div className="b_img09">
            <img src={process.env.PUBLIC_URL + '/img/b09.jpg'} alt="브랜드09" />

            <p>Elegant</p>
          </div>
        </TwoImg>

        <div className="b_txt08">
          <p>높은 디테일의 섬세함으로 아름답고 품위 있는 경험을 선사하며,</p>
          <p>비현실적 부드러움과 감각적인 향으로</p>
          <p>당신의 일상을 더 즐겁게 만들어 줍니다.</p>
        </div>

        <TwoImg>
          <div className="b_img10">
            <img src={process.env.PUBLIC_URL + '/img/b10.jpg'} alt="브랜드10" />

            <p>Effective</p>
          </div>
          <div className="b_img11">
            <img src={process.env.PUBLIC_URL + '/img/b11.jpg'} alt="브랜드11" />

            <p>Bold</p>
          </div>
        </TwoImg>

        <div className="b_txt08">
          <p>과학 기반의 고기능성 제품으로</p>
          <p>쉽고 간편하면서도 효과적인 케어를 제공하며</p>
          <p>독창적인 제품으로 차별화 된 경험을 선사합니다.</p>
        </div>
      </Fifth>

      <Last>
        <img src={process.env.PUBLIC_URL + '/img/b12.png'} alt="브랜드12" />

        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/img/logo_navy.png'} alt="로고" />
        </div>
        
        <div className="slogan">
          <img src={process.env.PUBLIC_URL + '/img/slogan_navy.png'} alt="슬로건" />
        </div>
      </Last>





      

      
      
    </div>
  )
}
