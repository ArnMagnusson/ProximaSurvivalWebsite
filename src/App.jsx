import React from "react";
import background from "./assets/background.jpg";
import GamePlayImage from "./assets/GamePlayImage.png";
import "./App.css";
import Trailer from "./Trailer";

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
      <Trailer />
    </div>
    </>
  );
};

export default App;