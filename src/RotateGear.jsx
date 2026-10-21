import GearIMG from "./assets/gear.svg"
import { useState, useEffect } from "react";

const RotateGear = ({id, RotationSpeed= 0.2}) => {
    const [scrollY, setScrollY] = useState(0)

useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll)
}, []);

console.log(scrollY); /*Debug*/

    return (
    <div id={id} className="gear">
       <img src={GearIMG} alt="Hai" style={{transform: `rotate(${scrollY * RotationSpeed}deg)`}}/>
    </div>
    )

}
export default RotateGear