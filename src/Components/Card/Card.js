import react, { useState } from "react";
import { Collapse } from 'react-collapse';
import "./Card.css";
import CardTitle from "./CardTitle";
import { data } from "../../Data";
import List from "./List";
import Text from "./Text";
import Chronology from "./Chronology";


const Card = () => {
  const [showContent, setShowContent] = useState(null);

  const openContent = content => {
    if (showContent) {
      if (content === showContent) setShowContent(null);
      else setShowContent(content);
    } else setShowContent(content);
    if (content === "Idiomas") window.scrollTo(0,document.body.scrollHeight);
  };

  const currentCard = card => {
    if (card.type === "list") return <List list={data[card.toRender]}/>;
    else if (card.type === "chronology") return <Chronology chronology={data[card.toRender]}/>;
    else if (card.type === "text") return <Text text={data[card.toRender].text} />
    else return <div> in Process </div>
  };

  return (
    <>
      {data.cards.map(card => 
        <div className="cardContainer" style={{ marginBottom: card.toRender === "languaje"  && "30px" }}>
          <CardTitle image={card.pic} title={card.title} onClick={() => openContent(card.title)} />
          <Collapse isOpened={showContent === card.title}>
              <div className="cardContent">
                {currentCard(card)}
              </div>
          </Collapse>
        </div>  
      )}
    </>

  );
};

export default Card;
