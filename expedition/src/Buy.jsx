import "./buy.css";
import after from './assets/after.jpg';
import noImage from './assets/no.jpg'; 
import { useState } from "react";


function Buy() {
        const [hoverNo, setHoverNo] = useState(false);
    return ( <>
        <div className="background-b"></div>
        <div id="buy"></div>
        <div className="buy-page">
            <h1>Will you buy Clair Obscur Expedition 33?</h1>
            <img src={hoverNo ? noImage : after} alt="buy-it" />
            <div className="purchase">
            <a href="https://store.playstation.com/en-us/concept/10008503" target="_blank">playstation</a> <a href="https://www.xbox.com/en-US/games/store/clair-obscur-expedition-33/9PPT8K6GQHRZ/0010" target="_blank">xbox</a>  <a href="https://store.steampowered.com/agecheck/app/1903340" target="_blank">pc</a> <a href="https://www.youtube.com/watch?v=oq_vzsWs0Do" target="_blank" id="no" onMouseEnter={() => setHoverNo(true)}
                    onMouseLeave={() => setHoverNo(false)}>No I won't</a> 
            </div>
        </div>
    </>);
}

export default Buy;