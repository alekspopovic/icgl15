import React from "react"
import videoStyles from "../styles/videos.module.css"
import videoSource from "../assets/1.mp4"
import Video from "./video"

class Videos extends React.Component {
  render() {
    return (
      <div className={videoStyles.videosContainer}>
        <Video
          source={videoSource}
          speakerName="Zoe Gavriilidou"
          title="Teaching Greek as a Heritage language"
        />
      </div>
    )
  }
}

export default Videos
