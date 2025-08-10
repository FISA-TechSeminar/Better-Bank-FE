# Better-Bank-FE
금융 기술 세미나에서 3‑Tier 아키텍처의 병목 구간을 찾아 고트래픽 부하 테스트를 하기 위해 만든 React 웹앱의 프런트엔드입니다.
테스트 범위를 명확히 하기 위해 계좌 목록 조회, 계좌 상세 내역 조회(트랜잭션), 매일 이자 받기 3가지 기능만 제공합니다.
<br>
## 3‑Tier 아키텍처
- Presentation: 본 프로젝트 (React) – 사용자 입력/표시
- Application: 백엔드 API – 비즈니스 로직/권한/검증
- Database: RDBMS – 계좌/거래 데이터 영속화

➡️  계층 분리로 보안/유지보수/확장성 확보 → 금융 도메인 표준 구조

--- 
<br>
## 핵심 기능
•	💳 계좌 목록 조회: /members/:memberId/accounts  
•	📄 계좌 상세 내역 조회: /transaction/:accountId  
•	💰 매일 이자 받기: /interest/receive (FE 버튼/화면만, API 연동 포인트 제공)  
•	📱 BigListItem / ListItem 컴포넌트로 재사용 가능한 리스트 셀 UI 제공  

| Main | Transaction |
| ---- | ----------- |
|   <img width="250" alt="image (1)" src="https://github.com/user-attachments/assets/a5211181-33fd-407e-9c02-07fa120e9f4a" />|<img width="250" alt="image (1)" src="https://github.com/user-attachments/assets/16d145de-362a-4e89-85c5-d64c789497ef" />|
<br>
## 기술 스택 👩🏻‍💻
- React 18
- React Router (페이지 전환: 메인 ↔ 트랜잭션)
-	Axios (API 호출)
- CSS (모듈형 파일, Pretendard 웹폰트)
- (개발 환경) Node.js ≥ 18, npm / yarn

백엔드/DB는 별도 프로젝트 [Better-Bank-BE](https://github.com/FISA-TechSeminar/Better-Bank-BE) 여기서 확인하실 수 있습니다. 개발 중엔 CORS/프록시를 이용합니다
<br>
## 폴더 구조 📁
```bash
the-better-bank/
└─ src/
   ├─ assets/
   │  ├─ searchBtn.png
   │  ├─ spotify.png
   │  ├─ theBetterBankLogo.png
   │  └─ Wallet.gif
   ├─ components/
   │  ├─ main/
   │  │  ├─ BigListItem.jsx
   │  │  ├─ BigListItem.css
   │  │  ├─ ListItem.jsx
   │  │  └─ ListItem.css
   │  └─ transaction/
   │     ├─ InterestReceived.jsx
   │     ├─ InterestReceived.css
   │     ├─ TransactionHistory.jsx
   │     ├─ TransactionHistory.css
   │     └─ transaction.js
   ├─ pages/
   │  ├─ Main.jsx
   │  ├─ Main.css
   │  └─ Transaction.jsx
   ├─ App.js
   ├─ App.css
   ├─ index.js
   └─ index.css
```
<br>
 
> 이번 프로젝트를 통해 눈에 보이는 화면 구현보다 그 뒤의 구조와 흐름이 더 중요하다는 것을 깨달았습니다.
계좌 조회·거래 내역·이자 수령 기능을 구현하며 UI와 API 사이의 설계와 최적화를 깊이 고민했습니다.
프론트엔드에서도 성능·안정성을 위해 더 넓은 관점에서 설계해야 함을 배웠습니다.

<br>

💬 문의·협업·피드백은 PR/이슈/디스커션으로 언제든 환영합니다!
