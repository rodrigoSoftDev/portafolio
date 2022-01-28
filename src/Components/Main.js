import react from "react";
import Card from "./Card/Card";
import "./Main.css";

const styles = {
    profile: {
        borderRadius: "50%",
        height: "130px",
        width: "130px",
        boxShadow: "rgb(0 0 0 / 30%) 0px 0px 0px 6px",
    },
};

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
