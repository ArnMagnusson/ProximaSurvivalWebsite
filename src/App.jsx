import React from "react";
import background from "./assets/background.jpg";
import GamePlayImage from "./assets/GamePlayImage.png";
import "./App.css";
import InfoBox from "./Components/Infobox";


const App = () => {
  return (
    <>
      <section className="gameplay-hero">
        <img src={GamePlayImage} alt="Proxima survival gameplay" className="gameplay-image"/>
        <div className="container">
          <h1>Proxima Survival</h1>
        </div>
      </section>
  
    <div className="page-background" id="center">
      {/* <main className="container">
        
       
      </main> */}
       <InfoBox
       title="hej"
       textbox1="123"
       textbox2="123"
       />
       
       <InfoBox
       title="goddag"
       textbox1="jeg"
       textbox2="hallo"
       />
       
    </div>
    </>
  );
};




export default App;