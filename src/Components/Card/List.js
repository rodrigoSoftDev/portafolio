import react from "react";
import "./Card.css";

const List = ({ list }) => (
  <div>
    {list.map(skill => (
      <div className="listItem">
          <div className="listName"> {skill.info} </div>
          <img src={skill.pic} className="cardImg"/>
      </div>
    ))}
  </div>
);


export default List;
