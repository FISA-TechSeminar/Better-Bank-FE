import React from "react";
import mainLogo from "../assets/theBetterBankLogo.png";
import wooriLogo from "../assets/wooriLogo.png";
import tmpCard from "../assets/img_card.png";

import ListItem from "../components/main/ListItem";
import "./Main.css";

const Main = () => {
  return (
    <div className="app">
      <header className="header">
        <span className="time">9:41</span>
        <div className="right-icons">
          <span className="search-icon">🔍</span>
        </div>
      </header>

      <div className="user-section">
        <img src="https://i.pravatar.cc/100" alt="user" className="avatar" />
        <div className="welcome-text">
          <span className="bank-name">Welcome 더조은은행</span>
          <h2 className="username">민지</h2>
        </div>
      </div>

      <h3 className="section-title">주계좌</h3>
      <div className="card">
        <img src={tmpCard} alt="card" className="card-image" />
      </div>

      <ul className="main-account">
        <ListItem
          icon={mainLogo}
          title="194,283원"
          subtitle="더조은은행 주계좌"
          amount=""
          isPositive={false}
        />
      </ul>
      <div className="divider" />
      <div className="accounts-section">
        <div className="section-header">
          <h3>계좌</h3>
          <button className="sell-all">details</button>
        </div>
        <ul className="account-list">
          <ListItem
            icon={mainLogo}
            title="1,573,935원"
            subtitle="더조은은행 주계좌"
            amount=""
            isPositive={false}
          />
          <ListItem
            icon={mainLogo}
            title="194,283원"
            subtitle="더조은은행 K패스"
            amount=""
            isPositive={false}
          />
          <ListItem
            icon={wooriLogo}
            title="273,283원"
            subtitle="우리은행 체크카드 통장"
            amount=""
            isPositive={false}
          />
        </ul>
      </div>
    </div>
  );
};

export default Main;
