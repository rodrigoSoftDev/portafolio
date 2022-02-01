import react from "react";
import "./Header.css";
import { englishData } from "../Data";
import englishLanguaje from "../Assets/englishLanguaje.png"
import spanish from "../Assets/spanish.png"
import facebook from "../Assets/facebook.png"
import instagram from "../Assets/instagram.png"
import twitter from "../Assets/twitter.png"
import linkedIn from "../Assets/linkedIn.png"

const Header = ({ setLanguaje, currentLanguaje }) => {
  const opacityES = currentLanguaje === "ES" ? { opacity: "1" } : { opacity: "0.7" } 
  const opacityEN = currentLanguaje === "EN" ? { opacity: "1" }  : { opacity: "0.7" } 
  return (
    <div className="headerContainer">
        <div className="presentationContainer">
            <img src={spanish} className="languaje" style={opacityES} onClick={() => setLanguaje("ES")}/>
            <img src={englishLanguaje} style={opacityEN} className="languaje" onClick={() => setLanguaje("EN")}/>
        </div> 
        <div className="socialContainer">
            <img src={facebook} onClick={() => window.open(englishData.social.facebook, '_blank')} className="social" />
            <img src={instagram}  onClick={() => window.open(englishData.social.instagram, '_blank')} className="social"/>
            <img src={twitter} onClick={() => window.open(englishData.social.twitter, '_blank')} className="social"/>
            <img src={linkedIn} onClick={() => window.open(englishData.social.linkedIn, '_blank')} className="social"/>
      </div>
    </div>
  );
};

export default Header;
