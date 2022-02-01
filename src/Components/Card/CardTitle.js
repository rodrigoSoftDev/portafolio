import react, { useState } from "react";
import "./Card.css";

const CardTitle = ({ isOpen, onClick, title, image }) => {
  return (
    <div className="cardTitle" onClick={onClick} style={{ borderBottom: isOpen ? "1px solid #dddddd" : "none" }}> 
        <div className="cardHeader"> {title} </div>
        <img className="downImg" src={image} />
    </div>  
  );
};

export default CardTitle;
