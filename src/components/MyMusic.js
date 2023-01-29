import React from "react";

class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: true,
    };
  }
  //omponentDidMount() lifecycle method is being used to
  //play the audio when the component is mounted to the DOM
  componentDidMount() {
    let self = this;
    self.props.audio.play();
  }
  //returning JSX that displays the image and the music information
  render() {
    let audio = this.props.audio;
    return (
      <div className="MainMusicContainer">
        <img
          className="MusicImg"
          alt="img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1da24c13-faae-4a1d-8c92-25764a0f47b4/dd02qjg-4bd4593e-3351-42ed-a7bf-6cb61260c7c5.jpg/v1/fill/w_1280,h_1280,q_75,strp/dua_lipa___swan_song_by_summertimebadwi_dd02qjg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFkYTI0YzEzLWZhYWUtNGExZC04YzkyLTI1NzY0YTBmNDdiNFwvZGQwMnFqZy00YmQ0NTkzZS0zMzUxLTQyZWQtYTdiZi02Y2I2MTI2MGM3YzUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.R7IYcJgO04J60gLS7dcWFm4uZjJvuEoS64yrdfdOe38"
        ></img>

        <div className="MusicInfo">
          <div>
            <h4 style={{ marginBottom: "0.5rem" }}>No Lie</h4>
            <p style={{ marginBottom: "0" }}>Dua Lipa</p>
            <p>Now Playing</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMusic;
