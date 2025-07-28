import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import profile from "../assets/profile.png";
import searchBtn from "../assets/searchBtn.png";
import tmpCard from "../assets/img_card.png";
import mainLogo from "../assets/logo5.png";

import ListItem from "../components/main/ListItem";
import BigListItem from "../components/main/BigListItem";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const memberId = 4;
  const [username, setUsername] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://49.173.8.203:8080/member/${memberId}`)
      .then((res) => {
        console.log("GET 성공:", res.data.resultData);
        setUsername(res.data.resultData.memberName);
      })
      .catch((err) => {
        console.error("GET 실패: - 유저 정보 불러오기 실패", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://49.173.8.203:8080/members/${memberId}/accounts`)
      .then((res) => {
        setAccounts(res.data.resultData);
        console.log("GET 성공:", res.data.resultData);
      })
      .catch((err) => {
        console.error("GET 실패: 계좌 목록 가져오기 실패", err);
      });
  }, []);

  const handleAccountClick = (accountId, accountName) => {
    console.log(`${accountName} 클릭됨, ID: ${accountId}`);
    navigate(`/transactions/${accountId}`);
  };

  return (
    <div className="app">
      <div className="user-section">
        <div className="user-info">
          <img src={profile} alt="profile" className="avatar" />
          <div className="user-text">
            <span className="bank-name">Welcome 더조은은행</span>
            <h2 className="username">{username}</h2>
          </div>
        </div>
        <button className="search-btn">
          <img src={searchBtn} alt="search" />
        </button>
      </div>
      {/* <div className="background-image-wrapper">
        <img src={bgCard} alt="배경" className="background-image" />
      </div> */}

      <h3 className="section-title">주계좌</h3>
      <div className="card">
        <img src={tmpCard} alt="card" className="card-image" />
      </div>
      <ul className="main-account">
        {accounts[0] && (
          <BigListItem
            icon={mainLogo}
            title={`${accounts[0].balance.toLocaleString()}원`}
            subtitle={accounts[0].name}
            showArrow={true}
            onClick={() => handleAccountClick(accounts[0].id, accounts[0].name)}
          />
        )}
      </ul>
      <div className="divider" />
      <div className="accounts-section">
        <div className="section-header">
          <h3>계좌</h3>
          <button className="more-view">더보기</button>
        </div>
        <ul className="account-list">
          {accounts.map((account) => (
            <ListItem
              key={account.id}
              icon={mainLogo}
              title={`${account.balance.toLocaleString()}원`}
              subtitle={account.name}
              onClick={() => handleAccountClick(account.id, account.name)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
