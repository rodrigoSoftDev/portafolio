import react from "react";
import "./Card.css";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const Image = ({ image }) => <InnerImageZoom src={image} zoomSrc={image} width="100%" fullscreenOnMobile />

export default Image;
