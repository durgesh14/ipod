import menu from "./assests/menu.svg";
import bottom from "./assests/bottom.svg";
import left from "./assests/left.svg";
import right from "./assests/right.svg";
import React from "react";

class IpodBtns extends React.Component {
    
  
  render() {
    return (
      <div className="ipod-container">
        <div className="ipod-navigations" id="parent-toucharea">
          <canvas className="white-circle" id="toucharea"></canvas>
          <div size="220" className="center"></div>
          <div className="ipod-menu">
            <img src={menu} alt="menu" draggable="false" />
          </div>
          <div className="ipod-right">
            <img src={right} alt="right" draggable="false"/>
          </div>
          <div className="ipod-bottom" >
            <img src={bottom} alt="bottom" draggable="false"/>
          </div>
          <div className="ipod-left">
            <img src={left} alt="left" draggable="false" />
          </div>
        </div>
      </div>
    );
  }
}

export default IpodBtns;
