import react from "react";
import "./Card.css";
import { data } from "../../Data";

const Skills = () => {
  return (
      <div className="">
          {data.skills.map(skill => (
            <div className="skillItem">
                <div className="skillName"> {skill.name} </div>
                <img src={skill.pic} className="cardImg"/>
            </div>
          ))}
    </div>

  );
};

export default Skills;
