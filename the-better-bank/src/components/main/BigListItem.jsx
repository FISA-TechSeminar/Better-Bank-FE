import React from "react";
import "./BigListItem.css";
import arrowBtn from "../../assets/arrowBtn.png";

const BigListItem = ({ icon, title, subtitle, onClick, showArrow }) => {
  return (
    <div className="big-list-item" onClick={onClick} role="button">
      <div className="icon-wrapper">
        <img src={icon} alt={title} className="list-icon" />
      </div>
      <div className="details">
        <span className="title big">{title}</span>
        <span className="subtitle big">{subtitle}</span>
      </div>
      {showArrow && (
        <div className="arrow-icon-wrapper">
          <img src={arrowBtn} alt="arrow" className="arrow-icon" />
        </div>
      )}
    </div>
  );
};

export default BigListItem;
