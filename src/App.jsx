import "./App.css";
import RotateGear from "./RotateGear";
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
      <RotateGear id="gear1" />
      <RotateGear id="gear2" RotationSpeed={-0.2} />
      <RotateGear id="gear3" RotationSpeed={0.2} />
    </div>
    </>
  );
};

export default App;