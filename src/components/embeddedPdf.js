import React from "react"
import styles from "../styles/embeddedPdf.module.css"

const EmbeddedPdf = props => {
  const { pdf, previewImage, altText } = props

  return (
    <div className={styles.imageContainer}>
      <a target="_blank" rel="noopener noreferrer" href={pdf}>
        <img src={previewImage} alt={altText} />
      </a>
    </div>
  )
}

export default EmbeddedPdf
