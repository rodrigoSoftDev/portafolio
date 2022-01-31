import react from "react";
import "./Card.css";

const Chronology = ({ chronology }) => (
    <div>
        {chronology.map(item => (
        <div className="chronologyItem">
            <div className="chronologyTitle"> {item.title} </div>
            <div className="chronologyYear"> {item.year} </div>
            <div className="chronologyName"> {item.name} </div>
        </div>
        ))}
    </div>
);

export default Chronology;
