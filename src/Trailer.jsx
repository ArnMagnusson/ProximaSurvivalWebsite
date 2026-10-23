import React from "react";
import ComputerImage from "./assets/Computer.png";
import LoreBox from "./assets/LoreBox.png";
import "./Trailer.css";

const Trailer = () => {
  return (
    <section className="trailer-Section">
      <div className="lore-Box">
        <img src={LoreBox} alt="Text box with a green border" />
        <h2>Proxima: Humanity's future</h2>
        <h3>
          The brilliant minds of X-Corp, are asking for<br />
          YOUR help with humanity's largest ever<br />
          planetary colonization project.<br />
          <br />
          The alien planet Proxima is already teeming<br />
          with life,  resources, and untold potential.<br />
          Making it the perfect place for humanity,<br />
          to make it's new home.<br />
          <br />
          Join thausands of other pioneers, and <br />
          sign up for your very own journey!<br />
        </h3>
      </div>
      <div className="computer-Box">
        <img src={ComputerImage} alt="1990's desktop computer" />
        <iframe src="https://www.youtube.com/embed/ClKk1QPLoRg" ></iframe>
      </div>
    </section>
  );
};

export default Trailer;