import React from "react";

class Artists extends React.Component {
  //The component is rendered within a parent container
  //and includes a title bar, an image container, and two sections of information.
  render() {
    return (
      <div className="artistsContainer">
        <div className="titleBar">
          <p style={{ fontWeight: "bold" }}>iPod > Dev</p>
        </div>
        {/* displays the name of the project, the developer, and an image.  */}
        <div className="info">
          <div className="imageContainer"></div>

          <div className="subInfo">
            <div className="myimage">
              IPod.js{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/4623/4623628.png"
                alt="img"
              />
            </div>
            <p style={{ marginBottom: "0" }}> React Project</p>
            <p>Dev: Durgesh Singh </p>
          </div>
        </div>
        {/*  includes a link to the Github repository */}
        <div className="info2">
          <h5 style={{ alignSelf: "center" }}>
            {" "}
            <a href="https://github.com/durgesh14?tab=repositories">
              {" "}
              Github Repo{" "}
            </a>
          </h5>
        </div>
      </div>
    );
  }
}

export default Artists;
