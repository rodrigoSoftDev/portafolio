import react, { useState } from "react";
import { Collapse } from 'react-collapse';
import "./Card.css";
import CardTitle from "./CardTitle";
import { data } from "../../Data";
import SkillBar from 'react-skillbars';
import Skills from "./Skills";


const Card = () => {
  const [showContent, setShowContent] = useState(null);

  const openContent = content => {
    if (showContent) {
      if (content === showContent) setShowContent(null);
      else setShowContent(content);
    } else setShowContent(content);
  };

  return (
    <>
      {data.cards.map(card => 
        <div className="cardContainer">
          <CardTitle image={card.pic} title={card.title} onClick={() => openContent(card.title)} />
          <Collapse isOpened={showContent === card.title}>
              <div className="cardContent">
                {card.type === "skills" 
                  ? <Skills />
                  : <div> in Process </div>
                }
              </div>
          </Collapse>
        </div>  
      )}
    </>

  );
};

export default Card;
