import React from "react"
import Button from "../components/button"
import pageNotFoundStyles from "../styles/404.module.css"

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={pageNotFoundStyles.container}>
        <h1>404: PAGE NOT FOUND</h1>
        <Button isInternal={true} url="/" text="Return to home page" />
      </div>
    )
  }
}

export default NotFoundPage
