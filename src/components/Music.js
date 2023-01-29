import React from "react";

class Music extends React.Component {
  //renders a div container with the class "musicScreen".
  render() {
    return (
      <div className="musicScreen" id="music-screen">
        {/* renders a div with the class "menuList" */}
        <div className="menuList" id="menu-list">
          {/* renders a title bar and a list of My Music and Artists */}
          <div className="titleBar">
            <p style={{ fontWeight: "bold" }}>iPod > Music</p>
          </div>

          {/* (this.props.activeItem) to determine which of the two options
                    (My Music or Artists) is currently active and
                     displays a ">" symbol next to the active option. */}
          <div className={this.props.activeItem === "MyMusic" ? "active" : ""}>
            My Music{" "}
            {this.props.activeItem === "MyMusic" ? (
              <span style={{ float: "right", fontWeight: "bold", position: "relative", top: "-2px"}}>&gt;</span>
            ) : (
              ""
            )}
          </div>
          <div className={this.props.activeItem === "Artists" ? "active" : ""}>
            Artists{" "}
            {this.props.activeItem === "Artists" ? (
              <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="imageContainermusic" id="image-container"></div>
      </div>
    );
  }
}

export default Music;
