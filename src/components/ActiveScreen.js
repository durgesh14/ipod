import React from "react";
import ActivePanel from "./ActivePanel";
import Music from "./Music";
import Games from "./Games";
import Albums from "./Albums";
import MyMusic from "./MyMusic";
import Artists from "./Artists";

class ActiveScreen extends React.Component {
  //rendering the correct component based on the value of the "activePage" prop passed to it.
  render() {
    return (
      <div className="screen" id="screen-container">
        {/* The components checks the value of "activePage" prop and renders the corresponding components, 
            such as "ActivePanel", "Music", "Games", "Albums", "MyMusic" and "Artists". */}
        {this.props.activePage === "ActivePanel" ? (
          <ActivePanel activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Music" ? (
          <Music activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Games" ? <Games /> : null}
        {this.props.activePage === "albums" ? <Albums /> : null}
        {this.props.activePage === "MyMusic" ? (
          <MyMusic audio={this.props.audio} />
        ) : null}{" "}
        {/* receives the "audio" prop which is used to control the audio playback. */}
        {this.props.activePage === "Artists" ? <Artists /> : null}
      </div>
    );
  }
}

export default ActiveScreen;
