import React from "react";

import ListItem from "./components/ListItem";

import "./App.css";

const App = () => {
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
        <div className="card-chip" />
        <div className="card-number">4562 1122 4595 7852</div>
        <div className="card-info">
          <span>AR Jonson</span>
          <span>Expiry Date 24/2000</span>
          <span>CVV 6986</span>
        </div>
        <div className="card-brand">Mastercard</div>
      </div>

      <div className="balance-section">
        <div className="balance-icon">🍎</div>
        <div>
          <h3 className="balance">74,789원</h3>
          <span className="bank-label">더조은은행</span>
        </div>
      </div>

      <div className="accounts-section">
        <div className="section-header">
          <h3>계좌</h3>
          <button className="sell-all">Sell All</button>
        </div>
        <ul className="transaction-list">
          <ListItem
            icon="./theBetterBankLogo.png"
            title="Apple Store"
            subtitle="Entertainment"
            amount="- $5,99"
            isPositive={false}
          />
          <li>
            <span>🍎</span>
            <div className="details">
              <span className="title">Apple Store</span>
              <span className="subtitle">Entertainment</span>
            </div>
            <span className="amount">- $5,99</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
