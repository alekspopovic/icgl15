import React from "react"
import videoStyles from "../styles/videos.module.css"
import videoSourceOne from "../assets/1.mp4"
import videoSourceTwo from "../assets/2.mp4"
import videoSourceThree from "../assets/3.mp4"
import Video from "./video"

class Videos extends React.Component {
  render() {
    return (
      <div className={videoStyles.videosContainer}>
        <Video
          source={videoSourceOne}
          speakerName="Zoe Gavriilidou"
          title="Teaching Greek as a Heritage language"
        />
        <Video
          source={videoSourceTwo}
          speakerName="Κώστας Κανάκης"
          title="Συγκρουσιακά γλωσσικά τοπία και χρονοτοπικοί ενδείκτες: Αθήνα και Βελιγράδι"
        />
        <Video
          source={videoSourceThree}
          speakerName="Stavroula Tsiplakou"
          title="Dialect levelling, koineization, bidialectal acquisition: notes from Cyprus"
        />
      </div>
    )
  }
}

export default Videos
