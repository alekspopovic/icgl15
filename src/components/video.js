import React from "react"
import videoStyles from "../styles/videos.module.css"

const Video = ({ source, speakerName, title }) => {
  return (
    <div className={videoStyles.video}>
      <h3>{speakerName}</h3>
      <h4>{title}</h4>
      <video controls>
        <source src={source} type="video/mp4" />
        <track kind="captions" srcLang="en" src="" />
      </video>
    </div>
  )
}

export default Video
