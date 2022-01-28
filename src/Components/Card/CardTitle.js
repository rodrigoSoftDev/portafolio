import react, { useState } from "react";
import "./Card.css";

const CardTitle = ({ onClick, title, image }) => {
  return (
    <div className="cardTitle" onClick={onClick}> 
        <div className="cardHeader"> {title} </div>
        <img className="cardImg" src={image} />
    </div>  
  );
};

export default CardTitle;
