//importing required files.
import menu from "../assets/menu.svg";
import bottom from "../assets/bottom.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import sound from "../assets/songs/NoLie.mp3";
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
                  activeItem: "albums",
                });
              } else if (self.state.activeItem === "albums") {
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
                  activeItem: "albums",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "albums") {
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
  //This function changes the active page to the next page.
  //If the current active page is "Music", it will change to "MyMusic",
  //if it's "NowPlaying", it will change to "MyMusic" and
  //otherwise it will stay on the current active page.
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

  //This function changes the active page to the home screen.
  //If the current active page is "MyMusic" or "Artists", it will change to "Music",
  //otherwise it will stay on the current active page.
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

  //It is checking if the current state of the "activePage" property is equal to "MyMusic".\

  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        // check if the audio is currently playing
        this.state.audio.pause(); // if it is, pause the audio
        this.setState({
          play: false, // update the play state to false
        });
      } else {
        this.state.audio.play(); // if it's not playing, play the audio
        this.setState({
          play: true,
        });
      }
    }
  };

  // lifecycle method that runs after the component has rendered
  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    // update the audio state with the audio element
    this.setState({
      audio: audio,
    });
  }

  render() {
    return (
      //creates an HTML5 <audio> element with a class of "audio-element"
      //and a <source> element inside it that points to the sound file imported at the top of the file.
      <div className="ipodContainer">
        <audio className="audio-element">
          <source src={sound}></source>
        </audio>

        {/* This code renders the ActiveScreen component and passes in the activeItem, 
        activePage, and audio props, which are all taken from the ItemDisplay component's state. */}

        <ActiveScreen
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
          audio={this.state.audio}
        />
        {/* This code creates a <div> element with a class of "wheel" and an id of "inner-container", 
  and an onMouseOver event that calls the rotateWheel function when triggered. */}
        <div
          className="wheel"
          id="inner-container"
          onMouseOver={this.rotateWheel}
        >
          <div className="buttonContainer">
            {/* This code creates a <div> element with a class of "menuButton" 
          and an onClick event that calls the changePageToHomeScreen function */}
            <div className="menuButton" onClick={this.changePageToHomeScreen}>
              <img src={menu} alt="menu" draggable="false" />
            </div>
          </div>

          <div className="buttonContainer">
            {/* creating middle buttons of ipod */}
            <div className="middleButtons">
              <div className="ipod-left" onClick={this.toggle}>
                <img src={left} alt="left" draggable="false" />
              </div>
              <div className="ipod-center" onClick={this.changePage}></div>

              <div className="ipod-right">
                <img src={right} alt="right" draggable="false" />
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            {/* Creating play/pause button */}
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
