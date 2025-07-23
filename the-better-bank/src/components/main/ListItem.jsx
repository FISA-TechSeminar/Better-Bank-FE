import React from "react";
import "./ListItem.css";

const ListItem = ({ icon, title, subtitle, onClick }) => {
  return (
    <li className="list-item" onClick={onClick} role="button">
      <img src={icon} alt={title} className="list-icon" />
      <div className="details">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
    </li>
  );
};

export default ListItem;
