//Import required files
import "../assets/css/App.css";
import "../assets/css/ActiveScreen.css";
import "../assets/css/games.css";
import "../assets/css/activePanel.css";
import "../assets/css/music.css";

import ItemDisplay from "./ItemDisplay";
import React from "react";

class App extends React.Component {
  render() {
    // returns the "ItemDisplay" component wrapped in a div
    return (
      <div className="App">
        <ItemDisplay />
      </div>
    );
  }
}

export default App;
