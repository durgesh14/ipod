import React from "react";
var ZingTouch = require("zingtouch");

class ItemDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "songs",
      lastAngle: 0,
      img: "",
      isActiveScreenVisible: true,
    };
  }

  componentDidMount() {
    var touchArea = document.getElementById("toucharea");
    var myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(
      touchArea,
      "rotate",
      function (e) {
        console.log(e.detail);
        const angle = e.detail.angle;
        if (Math.abs(angle - this.state.lastAngle) > 15) {
          //change active menu item
          this.onChangeActiveItem(angle);
          this.setState({ lastAngle: angle });
        }
      }.bind(this)
    );
  }
  onChangeActiveItem = (angle) => {
    let newActiveItem = this.state.activeItem;
    console.log("distance: ", angle);

    if (angle > this.state.lastAngle) {
      // rotate clockwise
      if (newActiveItem === "songs") {
        newActiveItem = "albums";
      } else if (newActiveItem === "albums") {
        newActiveItem = "artists";
      } else if (newActiveItem === "artists") {
        newActiveItem = "playlists";
      } else {
        newActiveItem = "songs";
      }
    } else {
      // rotate counter-clockwise
      if (newActiveItem === "songs") {
        newActiveItem = "playlists";
      } else if (newActiveItem === "albums") {
        newActiveItem = "songs";
      } else if (newActiveItem === "artists") {
        newActiveItem = "albums";
      } else {
        newActiveItem = "artists";
      }
    }
    this.setState({ activeItem: newActiveItem });
  };

  render() {
    return (
      <div
        className="main-screen"
        style={{
          backgroundImage: `url(${this.state.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`active-screen ${
            this.state.isActiveScreenVisible ? "" : "hidden"
          }`}
        >
          <header>Ipod</header>
          <div id="side-menu">
            <ul>
              <li className={this.state.activeItem === "songs" ? "active" : ""}>
                <a href="#songs">Songs</a>
              </li>
              <li
                className={this.state.activeItem === "albums" ? "active" : ""}
              >
                <a
                  href="#albums"
                  onClick={() =>
                    this.setState({
                      img: require('./assests/react.png'),
                      isActiveScreenVisible: false,
                    })
                  }
                >
                  Albums
                </a>
              </li>
              <li
                className={this.state.activeItem === "artists" ? "active" : ""}
              >
                <a href="#artists">Artists</a>
              </li>
              <li
                className={
                  this.state.activeItem === "playlists" ? "active" : ""
                }
              >
                <a href="#playlists">Playlists</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemDisplay;
