import React from "react";
import ComputerImage from "./assets/Computer.png";
import "./Trailer.css";

const Trailer = () => {
  return (
    <section className="trailer-Section">
      <div className="lore-Box">text idk</div>
      <div className="computer-Box">
        <img src={ComputerImage} alt="1990's desktop computer" />
      </div>
    </section>
  );
};

export default Trailer;