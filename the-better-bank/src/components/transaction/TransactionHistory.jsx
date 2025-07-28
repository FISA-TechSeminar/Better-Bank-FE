//TransactionHistory.jsx
import "./TransactionHistory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 

import spotifyIcon from "../../assets/spotify.png";
import appleIcon from "../../assets/apple.png";
import interestIcon from "../../assets/interest.png";
import coinIcon from "../../assets/coin.png";

import TransactionItem from "./TransactionItem";

const parseDateArray = (arr) => {
  if (!arr || arr.length < 3) return new Date(); // fallback
  return new Date(arr[0], arr[1] - 1, arr[2]); // month는 0-based
};

export default function TransactionHistory() {
  const navigate = useNavigate();
  const { accountId: paramAccountId } = useParams(); // URL 파라미터에서 accountId를 가져와 이름을 paramAccountId로 변경

  const [transactionsByDate, setTransactionsByDate] = useState([]);
  const [balance, setBalance] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);
  const [lastInterestDate, setLastInterestDate] = useState(""); // 선택사항


  useEffect(() => {
    const currentAccountId = parseInt(paramAccountId, 10);
    if (isNaN(currentAccountId)) return;
  
    const fetchInterestAmount = async () => {
      try {
        const res = await axios.get(
          `http://192.168.0.100:8080/accounts/${currentAccountId}/interest`
        );
        console.log("이자 정보 응답:", res.data); 

        if (
          res.data.statusCode === 200 || 
          res.data.statusCode === "ACCEPTED"
        ) {
          const { interestAmount, lastInterestDate } = res.data.resultData;
          setInterestAmount(Number(interestAmount));
          setLastInterestDate(lastInterestDate);
        }
      } catch (err) {
        console.error("이자 정보 조회 에러:", err);
      }
    };
  
    const fetchTransactionData = async () => {
      try {
        console.log(`거래내역을 가져오는 계좌 ID: ${currentAccountId}`);
        const txRes = await axios.get(
          `${Server_IP}/transactionhistory/${currentAccountId}?page=0&size=20` // currentAccountId 사용
        );
  
        const txData = txRes.data.resultData.transactionHistories.content;
        const fetchedBalance = txRes.data.resultData.balance;
        setBalance(fetchedBalance);
  
        const grouped = txData.reduce((acc, curr) => {
          const date = new Date(
            curr.transactionDate[0],
            curr.transactionDate[1] - 1,
            curr.transactionDate[2]
          ).toLocaleDateString("ko-KR", {
            month: "long",
            day: "numeric",
          });
  
          if (!acc[date]) acc[date] = [];
          acc[date].push(curr);
          return acc;
        }, {});
  
        const formatted = Object.entries(grouped).map(([date, items]) => ({
          date,
          items,
        }));
  
        setTransactionsByDate(formatted);
      } catch (err) {
        console.error("API 연결 실패:", err);
      }
    };
  
    fetchInterestAmount();
    fetchTransactionData();
  }, [paramAccountId]);
  
  // const handleReceiveInterest = async () => {
  //   try {
  //     // 페이지 이동
  //     navigate("/interest-received");
  //   } catch (err) {
  //     console.error("이자 수령 실패:", err);
  //   }
  // };
  const handleReceiveInterest = async () => {
    try {
      const currentAccountId = parseInt(paramAccountId, 10); // accountId
  
      const res = await axios.get(
        `http://192.168.0.100:8080/accounts/${currentAccountId}/receiveinterest`
      );
  
      const status = res.data.statusCode?.toString().toUpperCase();
  
      if (status === "200" || status === "ACCEPTED") {
        navigate("/interest-received");
      } else {
        alert("이자 수령 실패: " + res.data.resultMsg);
      }
    } catch (err) {
      console.error("이자 수령 실패:", err);
      alert("이자 수령 중 오류 발생");
    }
  };
  
  
  return (
    <div className="transaction-container">
      <header className="transaction-header">
        <button className="icon-button">←</button>
        <h1 className="title">더조은은행 - 주계좌</h1>
        <button className="icon-button">⟳</button>
      </header>

      <div className="balance">
        <span className="balance-highlight">{balance.toLocaleString()}원</span>
      </div>

      <div className="interest-banner" onClick={handleReceiveInterest}>
        <img src={coinIcon} alt="동전 아이콘" className="coin-icon" />
        <div className="interest-text">
          <div className="subtitle">어제까지 쌓인 이자</div>
          <div className="action">
            {Number(interestAmount || 0).toLocaleString()}원 지금 받기
          </div>
        </div>
        <span className="arrow">›</span>
      </div>

      <div className="section-divider" />

      <div className="transaction-list">
        {transactionsByDate.map((section, i) => (
          <div key={i}>
            <div className="date">{section.date}</div>
            {section.items.map((item, j) => (
              <TransactionItem
                key={j}
                icon={
                  item.transactionType === "INTEREST"
                    ? interestIcon
                    : item.transactionName.toLowerCase().includes("apple")
                    ? appleIcon
                    : item.transactionName.toLowerCase().includes("spotify")
                    ? spotifyIcon
                    : interestIcon
                }
                name={item.transactionName}
                time={parseDateArray(item.transactionDate).toLocaleTimeString(
                  "ko-KR",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
                amount={`${
                  item.transactionType === "DEPOSIT" ? "+" : "-"
                }${item.amount.toLocaleString()}원`}
                positive={item.transactionType === "DEPOSIT"}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
