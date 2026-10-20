import { useState, useEffect } from "react";
import slides from "./slides.json";
import "./App.css";
import "./HeroSlideshow.css";

// Imports the images from the assets folder
const images = import.meta.glob("./assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

//Function to get images
const getImage = (name) => images[`./assets/${name}`];

//Function that uses a prop for timer. And uses usestate and useeffect runs the timer.
const HeroSlideshow = ({timer}) => {const [currentSlide, setCurrentSlide] = useState(0);

  //After X amount of miliseconds switch to next slide in the map and than reset the timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, timer); /* milisekunder så 3000=3 sekunder */

    return () => clearInterval(interval)
    }, [timer]);

  return (
    //Render the image with help of slides.map key and its slide image name from the JSON file
    <section className="hero-slideshow">
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`hero-slide ${index === currentSlide ? "active" : ""}`}
                    >
                <img src={getImage(slide.image)} alt={slide.title} />
            </div>
        ))}
    </section>

  );
};

export default HeroSlideshow