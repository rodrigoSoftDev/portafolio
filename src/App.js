import react, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import { englishData, spanishData } from './Data';

const App = () => {
  const [languaje, setLanguaje] = useState("ES");

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Header setLanguaje={setLanguaje} currentLanguaje={languaje}/>
      <Main data={languaje === "ES" ?  spanishData : englishData}/>
      <Footer />
    </div>
  );
};

export default App;
