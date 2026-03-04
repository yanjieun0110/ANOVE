import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './Data';
import styled from 'styled-components';

export default function Detail() {
  const { id } = useParams();
  const allProducts = [
    ...data.best,
    ...data.shop_best,
    ...data.shop_hair,
    ...data.shop_style,
    ...data.shop_set
  ];

  const [count, setCount] = React.useState(1);

  const plus = () => {
    if (count >= 5) {
      alert("최대 주문수량은 5개입니다.");
      return;
    }
    setCount(prev => prev + 1);
  };

  const minus = () => {
    if (count <= 1) {
      alert("최소 주문수량은 1개입니다.");
      return;
    }
    setCount(prev => prev - 1);
  };

  const [activeTab, setActiveTab] = useState('상품상세정보');

  const TopDetail = styled.section`
    width:1084px;
    margin: 130px auto;
    display: flex;
    align-items: start;
    justify-content: space-between;

    .detail_img {
      width: 440px;
      margin-right: 50px;
    }

    p {
      margin:0;
      text-align: start;
    }

    .detail_info {
      flex-grow:1;

      .buttons {
        width: 100%; height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          width: 280px; height: 100%;
          border-radius: 5px;

          &.buy_btn {
            background-color: #202945;
            color: #fff;

            &:hover {background-color: #3b3f54;}
          }

          &.cart_btn {
            border: 1px solid #d1d1d1;
            background-color: #fff;
             
            &:hover {background-color: #f3f3f3;}
          }
        }
      }
    }
  `

  let topTxt = {
    title: {
      fontSize: '18px',
      color: '#202945',
      fontWeight: 600,
      margin: 0
    },
    sub: {
      fontSize: '14px',
      color: '#808080',
      marginTop: '5px'
    }
  }
  const InfoRow = styled.p`
    font-size: 14px;
    margin-bottom: 10px !important;

    span {
      font-size: 14px;
      margin-right: 10px;
    }

    del {
      font-size: 14px;
    }
  `

  const SelBox = styled.div`
    width: 100%; height: 60px;
    padding: 0 30px;
    background-color: #EEE;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin: 10px 0;
    
    .name {
      font-size: 14px;
    }
    .counter_box {
      display:flex;
      align-items: center;

      button {
        width:25px; height: 25px;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #CCC;
      }
      .count {
        padding: 0 10px;
      }

    }
  `
  const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: end;
    font-size: 20px;
    margin: 10px 0;

    span {
      color: #808080;
      margin-right: 10px;
      font-size: 16px
    }
  `

  const product = allProducts.find(item => item.id === id);
  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  const totalPrice = (product.price02 * count).toLocaleString();

  const TabContainer = styled.section`
    width: 1084px;
    margin: 80px auto 50px;
    display: flex;
    justify-content: center;
  `
  const TabButton = styled.button`
    color: ${(props) => (props.active ? "#202945" : "rgba(32, 41, 69, 0.4)")};
    cursor: pointer;
    margin-right: 15px;
    border: none;
    background-color: #fff;
    font-size: 18px;

    &:after {
      content: '|';
      color: rgba(32, 41, 69, 0.4);
      margin-left: 15px;
    }
    &:last-child:after {
      content: '';
    }
  `

  const TabContent = styled.section`
    width: 1084px;
    padding: 10px 50px;
    margin: 0 auto 200px;
  `

  const BuyInfo = styled.div`
    text-align: left;
    margin-bottom: 40px;

    > p {
      color: #999;
      font-size: 18px;
    }
    .p_box {
      margin-bottom: 20px;
      p {
        margin:0;
        padding-bottom: 5px;
        font-size: 14px; 
      }
    }
  `


  return (
    <div>
      <TopDetail>
        <div className="detail_img">
          <img src={product.img} alt={product.title} />
        </div>

        <div className="detail_info">
          <p style={topTxt.title}>{product.title}</p>
          <p style={topTxt.sub}>{product.sub01}</p>
          {product.sub02 && <p>{product.sub02}</p>}
          <hr />

          {product.price03 && <InfoRow><span>판매가:</span> <del>{product.price03}</del></InfoRow>}
          <InfoRow><span>소비자가:</span> {product.price01}</InfoRow>
          <InfoRow><span>리뷰:</span>{product.review}개</InfoRow>
          <InfoRow><span>배송비:</span>2,500원 (실결제금액 2만원 이상 시, 무료배송)</InfoRow>

          {product.option && product.option.map((opt, idx) => (
            <div key={idx} style={{textAlign:'left'}}>
              <label>{opt.type}:</label>

              <select style={{ margin:'0 0 20px 10px', fontSize: '14px', padding:'2px 15px 3px'}}>
                {opt.items.map((item, i) => (
                  <option style={{ fontSize:'14px'}} key={i} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>

            </div>
          ))}
          <SelBox>
            <p className="name">{product.title}</p>

            <div className="counter_box">
              <button type='button' className="minus_btn" onClick={minus}>-</button>
              <span className="count">{count}</span>
              <button type='button' className="plus_btn" onClick={plus}>+</button>
            </div>

            <p className="price">{totalPrice}원</p>
          </SelBox>

          <Total><span>총 상품금액(수량)</span> {totalPrice}원 ({count}개)</Total>
          <div className="buttons">
            <button type='button' className="buy_btn">바로 구매하기</button>
            <button type='button' className="cart_btn">장바구니</button>
          </div>
        </div>
      </TopDetail>

      <hr />

      <TabContainer>
        {['상품상세정보', '상품구매안내'].map(tab => (
          <TabButton
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </TabContainer>

      <TabContent>
        {activeTab === '상품상세정보' && <div>
          {product.detail && product.detail.map((src, index) => (
            <img key={index} src={src} alt={`${product.title} 상세 이미지 ${index + 1}`} />
          ))}
        </div>}
        {activeTab === '상품구매안내' && <div>
          <BuyInfo>
            <p>상품결제정보</p>
            <hr />
            <div className="p_box">
              <p>- 1인 최대 주문가능수량을 초과한 주문건 및 재판매 목적으로 구매가 의심되는 경우 사전 안내 없이 취소될 수 있습니다.</p>
              <p>- 대량 구매를 원하시는 경우 고객센터로 문의 부탁드립니다.</p>
              <p>- 고액결제의 경우 안전을 위해 카드사에서 확인 전화를 드릴 수도 있습니다. 확인 과정에서 도난 카드의 사용이나 타인 명의의 주문 등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.</p>
              <p>- 무통장 입금의 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹을 이용하거나 가까운 은행에서 직접 입금하시면 됩니다.</p>
              <p>- 주문 시 입력한 입금자명과 실제 입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 합니다. 7일 이내 입금되지 않은 주문은 자동취소됩니다.</p>
            </div>
          </BuyInfo>

          <BuyInfo>
            <p>배송정보</p>
            <hr />
            <div className="p_box">
              <p>배송 방법 : 택배</p>
              <p>배송 지역 : 전국지역</p>
              <p>배송 비용 : 2,500원</p>
              <p>배송 기간 : 2일 ~ 3일</p>
            </div>
            <div className="p_box">
              <p>배송 안내 :</p>
              <p>- 산간벽지나 도서 지방은 별도의 추가금액을 지불하셔야 하는 경우가 있을 수 있습니다.</p>
              <p>- 오후 3시 이전까지 결제 완료되면 당일 발송 처리됩니다.(무통장 입금은 오후 2시 30분까지 입금 확인되면 당일 발송 처리)</p>
              <p>- 결제 완료일로부터 3일 이내 제품을 받아보실 수 있습니다.</p>
              <p>*다만 도서산간지역의 경우 기상악화, 택배사 사정, 상품 재고 상황에 따라 배송이 다소 지연될 수 있습니다.</p>
            </div>
          </BuyInfo>

          <BuyInfo>
            <p>교환 및 반품정보</p>
            <hr />
            <div className="p_box">
              <p>교환 및 반품 주소</p>
              <p>- [17602] 경기도 안성시 미양면 미양로 114 동서로지스(와이어트 물류센터)</p>
            </div>
            <div className="p_box">
              <p>교환 및 반품 안내</p>
              <p>- 어노브는 고객님의 편의를 위해 무료 교환 및 무료 반품 서비스를 시행하고 있습니다,</p>
              <p>- 공식 사이트에서 구매 후 15일 이내 고객센터에 문의하시면 무료 교환 및 반품이 가능합니다. 15일이 지난 후에는 불가한 점 양해 부탁드립니다.</p>
            </div>
          </BuyInfo>

          <BuyInfo>
            <p>서비스문의</p>
            <hr />
            <div className="p_box">
              <p>- 사이트 이용에 궁금하신 점이 있으시면 FAQ를 확인해주세요.</p>
              <p>- FAQ에 없는 문의사항이 있으실 경우 고객센터로 연락 주시거나 게시판에 문의 남겨주세요.</p>
            </div>
          </BuyInfo>
        </div>}
      </TabContent>
    </div>

  )
}
