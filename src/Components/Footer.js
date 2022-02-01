import react from "react";
import "./Footer.css";
import sendEmail from "../Assets/sendEmail.png"

const Footer = () => {
  return (
    <div className="footerContainer">
      Portafolio personal by Rodrigo Garcia © 2022
      <img src={sendEmail} width={25} onClick={() => window.open('mailto:rodrigogarciaunq@gmail.com?subject=job')}/>
    </div>
  );
};

export default Footer;
