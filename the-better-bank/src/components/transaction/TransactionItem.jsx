// src/components/Transaction/TransactionItem.jsx
export default function TransactionItem({ icon, name, time, amount, positive }) {
    return (
      <div className="transaction-item">
        <div className="icon-wrapper">
          <img src={icon} alt={name} className="icon-img" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="time">{time}</div>
        </div>
        <div className={`amount ${positive ? 'positive' : 'negative'}`}>{amount}</div>
      </div>
    );
  }
  