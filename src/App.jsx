import React from "react";
import background from "./assets/background.jpg";
import GamePlayImage from "./assets/GamePlayImage.png";
import "./App.css";
import HeroSlideshow from "./HeroSlideshow";

const App = () => {
  return (
    <>
      <section className="gameplay-hero">
        <div>
          <HeroSlideshow timer={7000} />
        </div>
        <div className="container">
          <h1>Proxima Survival</h1>
        </div>
      </section>
    <div className="page-background" id="center">
      {/* <main className="container">
        
      </main> */}
    </div>
    </>
  );
};

export default App;