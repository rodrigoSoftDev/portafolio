import react from "react";
import Card from "./Card/Card";
import "./Main.css";

const Main = ({ data }) => {
  return (
    <div className="mainContainer">
        <div className="mainPortada">
            <img src="https://i.ibb.co/HrtJscS/Captura.jpg" className="mainProfile"/>
            <div className="mainInfoContainer">
              <div className="mainInfoName"> {data.personalData.name}</div>
              <div className="mainInfoPos"> {data.personalData.position}</div>
            </div>
        </div>
        <Card  data={data}/>
    </div>
  );
};

export default Main;
