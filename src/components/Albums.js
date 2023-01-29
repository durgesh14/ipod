import React from "react";

class albums extends React.Component {
  //renders a view of an album list
  render() {
    return (
      // displays the title bar and an image.
      <div style={styles.albums}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>iPod > albums</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          <img
            style={styles.image}
            alt="img"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1da24c13-faae-4a1d-8c92-25764a0f47b4/dd02qjg-4bd4593e-3351-42ed-a7bf-6cb61260c7c5.jpg/v1/fill/w_1280,h_1280,q_75,strp/dua_lipa___swan_song_by_summertimebadwi_dd02qjg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFkYTI0YzEzLWZhYWUtNGExZC04YzkyLTI1NzY0YTBmNDdiNFwvZGQwMnFqZy00YmQ0NTkzZS0zMzUxLTQyZWQtYTdiZi02Y2I2MTI2MGM3YzUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.R7IYcJgO04J60gLS7dcWFm4uZjJvuEoS64yrdfdOe38"
          />
        </div>
      </div>
    );
  }
}

//Styles for the divs
const styles = {
  albums: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: "85%",
    alignSelf: "center",
    borderRadius: "1px 1px 9px 9px"
  },
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "10px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(124, 134, 140), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 6px 12px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
  },
};

export default albums;
