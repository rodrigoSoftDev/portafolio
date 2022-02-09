import react, { useState } from "react";
import { Collapse } from 'react-collapse';
import "./Card.css";
import CardTitle from "./CardTitle";
import List from "./List";
import Text from "./Text";
import Chronology from "./Chronology";
import Image from "./Image";
import read from "../../Assets/read.png";
import noRead from "../../Assets/noread.png";

const Card = ({ data }) => {
  const [showContent, setShowContent] = useState(null);

  const openContent = card => {
    if (showContent) {
      if (card.title === showContent) setShowContent(null);
      else setShowContent(card.title);
    } else setShowContent(card.title);
    card.read = true;
  };

  const currentCard = card => {
    if (card.type === "list") return <List list={data[card.toRender]}/>;
    else if (card.type === "chronology") return <Chronology chronology={data[card.toRender]}/>;
    else if (card.type === "text") return <Text text={data[card.toRender].text} />
    else if (card.type === "image") return <Image image={data[card.toRender].pic} />
    else return <div> in Process </div>
  };

  const isOpen = card => showContent === card.title;

  return (
    <>
      {data.cards.map(card => 
        <div className="readCard">
          <img src={card.read ? read : noRead} className="tickImg" />
          <div className="cardContainer">
            <CardTitle isOpen={isOpen(card)} image={card.pic} title={card.title} onClick={() => openContent(card)} />
            <Collapse isOpened={isOpen(card)}>
                <div className="cardContent">
                  {currentCard(card)}
                </div>
            </Collapse>
          </div>  
        </div>
      )}
    </>
  );
};

export default Card;
