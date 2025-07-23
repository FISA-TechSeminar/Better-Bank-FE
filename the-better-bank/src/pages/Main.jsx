import React from "react";
import profile from "../assets/profile.png";
import searchBtn from "../assets/searchBtn.png";
import tmpCard from "../assets/img_card.png";
import mainLogo from "../assets/logo4.png";
import wooriLogo from "../assets/wooriLogo.png";
import hanaLogo from "../assets/hanaBank.png";

import ListItem from "../components/main/ListItem";
import "./Main.css";

const Main = () => {
  return (
    <div className="app">
      <div className="user-section">
        <div className="user-info">
          <img src={profile} alt="profile" className="avatar" />
          <div className="user-text">
            <span className="bank-name">Welcome 더조은은행</span>
            <h2 className="username">민지</h2>
          </div>
        </div>
        <button className="search-btn">
          <img src={searchBtn} alt="search" />
        </button>
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
            icon={hanaLogo}
            title="9,273,283원"
            subtitle="하나은행 적금 통장"
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
