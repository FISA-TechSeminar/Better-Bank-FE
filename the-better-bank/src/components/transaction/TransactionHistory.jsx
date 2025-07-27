//TransactionHistory.jsx
import './TransactionHistory.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import spotifyIcon from '../../assets/spotify.png';
import appleIcon from '../../assets/apple.png';
import interestIcon from '../../assets/interest.png';
import coinIcon from '../../assets/coin.png';

import TransactionItem from './TransactionItem';


const parseDateArray = (arr) => {
  if (!arr || arr.length < 3) return new Date(); // fallback
  return new Date(arr[0], arr[1] - 1, arr[2]); // month는 0-based
};

export default function TransactionHistory() {
  const [transactionsByDate, setTransactionsByDate] = useState([]);
  const [balance, setBalance] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);

  const accountId = 4; // TODO: 실제 사용 시 동적으로 받기

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const txRes = await axios.get(
          `http://49.173.8.203:8080/transactionhistory/${accountId}?page=0&size=20`
        );
  
        console.log('거래내역 응답:', txRes.data);
  
        const txData = txRes.data.resultData.transactionHistories.content;
        const fetchedBalance = txRes.data.resultData.balance;
        setBalance(fetchedBalance);
  
        const grouped = txData.reduce((acc, curr) => {
          const date = new Date(curr.transactionDate[0], curr.transactionDate[1] - 1, curr.transactionDate[2])
            .toLocaleDateString('ko-KR', {
              month: 'long',
              day: 'numeric',
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
        console.error('API 연결 실패:', err);
      }
    };
  
    fetchTransactionData();
  }, []);
  

  const handleReceiveInterest = async () => {
    try {
      const res = await axios.post(
        `http://49.173.8.203:8080/accounts/${accountId}/interest`
      );
      alert(`${res.data.resultData.interestReceived}원 이자 수령 완료`);
      setBalance(res.data.resultData.newBalance);
      setInterestAmount(0); // 초기화
    } catch (err) {
      console.error('이자 수령 실패:', err);
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
            {interestAmount.toLocaleString()}원 지금 받기
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
                  item.transactionType === 'INTEREST'
                    ? interestIcon
                    : item.transactionName.toLowerCase().includes('apple')
                    ? appleIcon
                    : item.transactionName.toLowerCase().includes('spotify')
                    ? spotifyIcon
                    : interestIcon
                }
                name={item.transactionName}
                time={parseDateArray(item.transactionDate).toLocaleTimeString('ko-KR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                amount={`${
                  item.transactionType === 'DEPOSIT' ? '+' : '-'
                }${item.amount.toLocaleString()}원`}
                positive={item.transactionType === 'DEPOSIT'}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
