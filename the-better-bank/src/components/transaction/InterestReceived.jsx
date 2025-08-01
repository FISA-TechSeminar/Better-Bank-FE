import React from 'react';
import './InterestReceived.css';
import gifImage from '../../assets/Wallet.gif'; 

export default function InterestReceived() {
  return (
    <div className="interest-received-container">
      {/* GIF 애니메이션 */}
      <img src={gifImage} alt="이자 수령 애니메이션" className="gif" />

      {/* 텍스트 */}
      <div className="text">
        <div className="main-text">돈이 담긴 통장 도착!</div>
      </div>

      {/* 닫기 버튼 */}
      <button className="close-button" onClick={() => window.history.back()}>
        닫기
      </button>
    </div>
  );
}

