import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class PastConferences extends React.Component {
  render() {
    return (
      <Layout
        language="sr"
        location={this.props.location}
        headerText="Prethodne konferencije"
      >
        <SEO title="PastConferences" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://icgl14.events.upatras.gr"
              >
                2019 ICGL14 Patras
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://icgl13.westminster.ac.uk/"
              >
                2017 ICGL13 Westminster
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.cemog.fu-berlin.de/icgl12/"
              >
                2015 ICGL12 Berlin
              </a>
            </li>
            <li>2013 ICGL11 Rhodes</li>
            <li>2011 ICGL10 Komotini</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ling.ohio-state.edu/ICGL/"
              >
                2009 ICGL9 Chicago
              </a>
            </li>
            <li>2007 ICGL8 Ioannina</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www-users.york.ac.uk/~lang32/"
              >
                2005 ICGL7 York
              </a>
            </li>
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
