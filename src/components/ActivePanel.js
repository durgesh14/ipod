import React from "react";

class ActivePanel extends React.Component {
  //renders a menu list with options "Now Playing", "Music", "Games", and "Albums".
  render() {
    return (
      <div className="homeScreen" id="home-screen">
        <div className="menuList" id="menu-list">
          <div className="titleBar">
            <p style={{ fontWeight: "bold" }}>iPod</p>
          </div>
          {/* 
          The component receives a prop called "activeItem" and uses it to style the active menu item 
          by adding the class "active" to the corresponding div. 
           */}
          <div className="item-lists">
            <div
              className={this.props.activeItem === "NowPlaying" ? "active" : ""}
            >
              Now Playing{" "}
              {this.props.activeItem === "NowPlaying" ? <span>&gt;</span> : ""}
            </div>
            <div className={this.props.activeItem === "Music" ? "active" : ""}>
              Music {this.props.activeItem === "Music" ? <span>&gt;</span> : ""}
            </div>
            <div className={this.props.activeItem === "Games" ? "active" : ""}>
              Games {this.props.activeItem === "Games" ? <span>&gt;</span> : ""}
            </div>
            <div className={this.props.activeItem === "albums" ? "active" : ""}>
              Albums{" "}
              {this.props.activeItem === "albums" ? <span>&gt;</span> : ""}
            </div>
          </div>
        </div>
        {/* An empty div with the class "imageContainerPanel" which is to display image. */}
        <div className="imageContainerPanel" id="image-container"></div>
      </div>
    );
  }
}

export default ActivePanel;
