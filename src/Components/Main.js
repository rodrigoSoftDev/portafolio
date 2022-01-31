import react from "react";
import { data } from "../Data";
import Card from "./Card/Card";
import "./Main.css";

const Main = () => {
  return (
    <div className="mainContainer">
        <div className="mainContainerInner">
            <div className="mainPortada">
                <img src="https://i.ibb.co/HrtJscS/Captura.jpg" className="mainProfile"/>
                <div className="mainInfoContainer">
                  <div className="mainInfoName"> {data.personalData.name}</div>
                  <div className="mainInfoPos"> {data.personalData.position}</div>
                </div>
            </div>
            <Card />
        </div>
    </div>
  );
};

export default Main;
