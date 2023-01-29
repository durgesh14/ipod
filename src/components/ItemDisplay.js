import menu from "../assets/menu.svg";
import bottom from "../assets/bottom.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import sound from '../assets/songs/NoLie.mp3';
import React from "react";
import ActiveScreen from "./ActiveScreen";
import ZingTouch from "zingtouch";

// ItemDisplay component that handles the state and logic for the iPod functionality
class ItemDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying", // current active item on the screen
      activePage: "ActivePanel", // current active page on the screen
      enter: 0, // counter for number of times wheel has been rotated
      play: true, // state of the audio player (playing or paused)
    };
  }

    // function to handle wheel rotation events
  rotateWheel = () => {
    var containerElement = document.getElementById("inner-container");
    // Creating a new active region using ZingTouch
    var activeRegion = new ZingTouch.Region(containerElement);
    var change = 0; // counter for number of wheel rotation changes
    var self = this;
    self.state.enter = self.state.enter + 1;

    // check if wheel has been rotated for the first time 
    if (self.state.enter < 2) {
       // Binding the rotate event to the container element
      activeRegion.bind(containerElement, "rotate", function (event) {

        var newAngle = event.detail.distanceFromLast;
        console.log(newAngle);

        // check if wheel is being rotated clockwise
        if (newAngle < 0) {
          console.log(change);
          change++;
          // check if change threshold has been reached
          if (change === 15) {
            change = 0;
            // check if currently on the ActivePanel page
            if (self.state.activePage === "ActivePanel") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Games",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        } else {
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
            if (self.state.activePage === "ActivePanel") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Games",
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        }
      });
    }
  };

  changePage = () => {
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic",
        activePage: this.state.activeItem,
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying",
        activePage: "MyMusic",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem,
      });
    }
  };

  changePageToHomeScreen = () => {
    if (
      this.state.activeItem === "MyMusic" ||
      this.state.activeItem === "Artists"
    ) {
      this.setState({
        activeItem: "Music",
        activePage: "ActivePanel",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: "ActivePanel",
      });
    }
  };

  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause();
        this.setState({
          play: false,
        });
      } else {
        this.state.audio.play();
        this.setState({
          play: true,
        });
      }
    }
  };

  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    this.setState({
      audio: audio,
    });
  }

  render() {
    return (
      <div className="ipodContainer" >
        <audio className="audio-element">
                        <source src={sound}></source>
                    </audio>

        <ActiveScreen
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
          audio={this.state.audio}
        />

        <div 
        className="wheel"
          id="inner-container"
          onMouseOver={this.rotateWheel}
        >
          <div className="buttonContainer">
            <div
            className="menuButton"
             
              onClick={this.changePageToHomeScreen}
            >
              <img src={menu} alt="menu" draggable="false" />
            </div>
          </div>

          <div className="buttonContainer">
            <div className="middleButtons">
            <div className="ipod-left" onClick={this.toggle}>
                <img src={left} alt="left" draggable="false" />
              </div>
              <div
              className="ipod-center"
                onClick={this.changePage}
              
              ></div>
              
              <div className="ipod-right">
                <img src={right} alt="right" draggable="false" />
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <div className="playButton" onClick={this.toggle}>
              
              <div className="ipod-bottom">
                <img src={bottom} alt="bottom" draggable="false" />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDisplay;
