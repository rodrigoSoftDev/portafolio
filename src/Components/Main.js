import react from "react";
import Card from "./Card/Card";
import "./Main.css";

const Main = () => {
  return (
    <div className="mainContainer">
        <div className="mainContainerInner">
            <div className="mainPortada">
                <img src="https://i.ibb.co/HrtJscS/Captura.jpg" className="mainProfile"/>
            </div>
            <Card />
        </div>
    </div>
  );
};

export default Main;
