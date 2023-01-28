import menu from "./assests/menu.svg";
import bottom from "./assests/bottom.svg";
import left from "./assests/left.svg";
import right from "./assests/right.svg";
import sound from './assests/songs/NoLie.mp3';
import React from "react";
import ActiveScreen from "./ActiveScreen";
import ZingTouch from "zingtouch";


class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying",
      activePage: "ActivePanel",
      enter: 0,
      play: true,
    };
  }

  rotateWheel = () => {
    var containerElement = document.getElementById("inner-container");
    var activeRegion = new ZingTouch.Region(containerElement);
    // var childElement = document.getElementById('inner-container');
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;

    if (self.state.enter < 2) {
      activeRegion.bind(containerElement, "rotate", function (event) {
        //Perform Operations

        var newAngle = event.detail.distanceFromLast;
        console.log(newAngle);

        if (newAngle < 0) {
          console.log(change);
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
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
          console.log(change);
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
    } else {
      console.log("Not allowed to enter");
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
      console.log("toggled");
    }
  };

  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    this.setState({
      audio: audio,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="ipodContainer" style={styles.ipodContainer}>
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
          style={styles.wheel}
          onMouseOver={this.rotateWheel}
        >
          <div className="buttonContainer" style={styles.buttonContainer}>
            <div
            className="menuButton"
              style={styles.menuButton}
              onClick={this.changePageToHomeScreen}
            >
              <img src={menu} alt="menu" draggable="false" />
            </div>
          </div>

          <div className="buttonContainer" style={styles.buttonContainer}>
            <div className="middleButtons" style={styles.middleButtons}>
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
          <div className="buttonContainer" style={styles.buttonContainer}>
            <div className="playButton" onClick={this.toggle} style={styles.playButton}>
              
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

const styles = {
  
};

export default Ipod;
