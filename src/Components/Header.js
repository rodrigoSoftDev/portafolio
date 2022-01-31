import react from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
        <div className="presentationContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/323/323365.png" className="languaje"/>
            <img src="https://cdn-icons-png.flaticon.com/512/323/323329.png" className="languaje"/>
        </div> 
        <div className="socialContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" className="social" />
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="social"/>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174876.png" className="social"/>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="social"/>
      </div>
    </div>
  );
};

export default Header;
