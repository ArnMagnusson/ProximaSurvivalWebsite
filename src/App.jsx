import "./App.css";
import Trailer from "./Trailer";
import InfoBox from "./Components/Infobox";
import NavBar from "./NavBar";
import RotateGear from "./RotateGear";
import HeroSlideshow from "./HeroSlideshow";


const App = () => {
  return (
    <>
      <div id="navbar">
        <NavBar />
      </div>
      <section className="gameplay-hero">
        <div>
          <HeroSlideshow timer={7000} />
        </div>
        <div className="container">
          <h1>Proxima Survival</h1>
        </div>
      </section>
  
    <div className="page-background" id="center">
      <RotateGear id="gear1" />
     <RotateGear id="gear2" RotationSpeed={-0.2} />
      <RotateGear id="gear3" RotationSpeed={0.2} />
      <Trailer />
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