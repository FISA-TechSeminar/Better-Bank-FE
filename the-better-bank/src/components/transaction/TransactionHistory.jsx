// ✅ TransactionHistory.jsx
import './TransactionHistory.css';
import spotifyIcon from '../../assets/spotify.png';
import appleIcon from '../../assets/apple.png';
import interestIcon from '../../assets/interest.png';
import coinIcon from '../../assets/coin.png';
import TransactionItem from './TransactionItem';

const mockData = [
    {
        date: '7월 24일',
        items: [
            { icon: interestIcon, name: '통장 이자', time: '16:31', amount: '+20원', positive: true },
            { icon: spotifyIcon, name: 'Spotify', time: '16:31', amount: '-18,000원', positive: false },
        ],
    },
    {
        date: '7월 23일',
        items: [
            { icon: interestIcon, name: '통장 이자', time: '16:31', amount: '+2,300원', positive: true },
            { icon: appleIcon, name: 'Apple Store', time: '16:31', amount: '-7,600원', positive: false },
            { icon: spotifyIcon, name: 'Spotify', time: '16:31', amount: '-18,000원', positive: false },
        ],
    },
    {
        date: '7월 22일',
        items: [
            { icon: interestIcon, name: '통장 이자', time: '16:31', amount: '+700원', positive: true },
            { icon: appleIcon, name: 'Apple Store', time: '16:31', amount: '-7,600원', positive: false },
            { icon: spotifyIcon, name: 'Spotify', time: '16:31', amount: '-18,000원', positive: false },
        ],
    },
];

export default function TransactionHistory() {
    return (
        <div className="transaction-container">
            <header className="transaction-header">
                <button className="icon-button">←</button>
                <h1 className="title">더조은은행 - 주계좌</h1>
                <button className="icon-button">⟳</button>
            </header>

            <div className="balance">
                <span className="balance-highlight">74,789원</span>
            </div>

            <div className="interest-banner">
                <img src={coinIcon} alt="동전 아이콘" className="coin-icon" />
                <div className="interest-text">
                    <div className="subtitle">어제까지 쌓인 이자</div>
                    <div className="action">2원 지금 받기</div>
                </div>
                <span className="arrow">›</span>
            </div>

            <div className="section-divider" />

            <div className="transaction-list">
                {mockData.map((section, i) => (
                    <div key={i}>
                        <div className="date">{section.date}</div>
                        {section.items.map((item, j) => (
                            <TransactionItem
                                key={j}
                                icon={item.icon}
                                name={item.name}
                                time={item.time}
                                amount={item.amount}
                                positive={item.positive}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
