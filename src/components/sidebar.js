import React from "react"
import sidebarStyles from "../styles/sidebar.module.css"
import "font-awesome/css/font-awesome.min.css"
import SocialIcons from "./socialIcons"
import uniLogo from "../assets/uniLogo.png"
import facultyLogo from "../assets/ff.gif"
import posterImage from "../assets/posterImage.png"
import posterImageMini from "../assets/posterImageMini.jpg"

const Sidebar = ({ language, extraWide }) => {
  let universityText =
    language === "en"
      ? "University of Belgrade"
      : "Πανεπιστήμιο του Βελιγραδίου"

  let facultyText =
    language === "en" ? "Faculty of Philology" : "Φιλολογική Σχολή"

  return (
    <div
      className={`${sidebarStyles.sidebar} ${
        extraWide ? sidebarStyles.wide : ""
      }`}
    >
      <div className={sidebarStyles.sidebarItem}>
        <div
          className={`${sidebarStyles.imageContainer} ${sidebarStyles.poster}`}
        >
          <a target="_blank" rel="noopener noreferrer" href={posterImage}>
            <img src={posterImageMini} alt="ICGL15 poster" />
          </a>
        </div>
      </div>
      <div className={sidebarStyles.sidebarItem}>
        <h3>{universityText}</h3>
        <div className={sidebarStyles.imageContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://bg.ac.rs/en/index.php"
          >
            <img src={uniLogo} alt="University of Belgrade Logo" />
          </a>
        </div>
      </div>
      <div className={sidebarStyles.sidebarItem}>
        <h3>{facultyText}</h3>
        <div className={sidebarStyles.imageContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.fil.bg.ac.rs/"
          >
            <img src={facultyLogo} alt="Faculty of Philology Logo" />
          </a>
        </div>
      </div>

      <SocialIcons language={language} />
    </div>
  )
}

export default Sidebar
