import React from "react";
import "./ListItem.css";

const ListItem = ({ icon, title, subtitle, amount, isPositive }) => {
  return (
    <li className="list-item">
      <div className="icon-wrapper">
        <img src={icon} alt={title} className="list-icon" />
      </div>
      <div className="details">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
      <span className={`amount ${isPositive ? "positive" : ""}`}>{amount}</span>
    </li>
  );
};

export default ListItem;
