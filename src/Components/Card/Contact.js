import react from "react";
import "./Card.css";
import { data } from "../../Data";

const Contact = () => {
  return (
    <div>
      {data.contact.map(item => (
        <div className="skillItem">
            <div className="contactName"> {item.info} </div>
            <img src={item.pic} className="cardImg"/>
        </div>
      ))}
    </div>
  );
};

export default Contact;
