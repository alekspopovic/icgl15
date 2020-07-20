import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import rentalStyles from "../styles/rentals.module.css"
import "font-awesome/css/font-awesome.min.css"

const Rentals = () => {
  const data = useStaticQuery(graphql`
    {
      airbnb: file(relativePath: { eq: "airbnb.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bookingdotcom: file(relativePath: { eq: "bookingdotcom.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stannadan: file(relativePath: { eq: "stannadan.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={rentalStyles.rentals}>
      <div className={`${rentalStyles.rentalItem} ${rentalStyles.airbnb}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.airbnb.com/belgrade-serbia/stays"
        >
          <Img fluid={data.airbnb.childImageSharp.fluid} />
        </a>
      </div>
      <div className={`${rentalStyles.rentalItem} ${rentalStyles.booking}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.booking.com/apartments/city/rs/belgrade.sr.html"
        >
          <Img fluid={data.bookingdotcom.childImageSharp.fluid} />
        </a>
      </div>
      <div className={`${rentalStyles.rentalItem} ${rentalStyles.stannadan}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.stannadan.com/en/"
        >
          <Img fluid={data.stannadan.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  )
}

export default Rentals
