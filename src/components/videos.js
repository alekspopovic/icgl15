import React from "react"
import videoStyles from "../styles/videos.module.css"
import Video from "./video"
import videoData from "../data/videoData"

const Videos = () => {
  return (
    <div className={videoStyles.videosContainer}>
      {videoData.map(video => {
        const videoPath = video.source[Object.keys(video.source)[0]]

        return (
          <Video
            source={videoPath}
            speakerName={video.speaker}
            title={video.title}
            key={video.title}
          />
        )
      })}
    </div>
  )
}

export default Videos
