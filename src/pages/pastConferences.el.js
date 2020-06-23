import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class PastConferences extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="PastConferences" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>page in Greek</h1>
          <h1>ICGL15 / Past Conferences</h1>
          <ul>
            <li>2015 ICGL12 Berlin</li>
            <li>2013 ICGL11 Rhodes</li>
            <li>2011 ICGL10 Komotini</li>
            <li>2009 ICGL9 Chicago</li>
            <li>2007 ICGL8 Ioannina</li>
            <li>2005 ICGL7 York</li>
            <li>2003 ICGL6 Rethimno</li>
            <li>2001 ICGL5 Paris</li>
            <li>1999 ICGL4 Nicosia</li>
            <li>1997 ICGL3 Athens</li>
            <li>1995 ICGL2 Salzburg</li>
            <li>1993 ICGL1 Reading</li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default PastConferences
