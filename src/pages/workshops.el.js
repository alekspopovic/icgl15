import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class Workshops extends React.Component {
  render() {
    return (
      <Layout language="el" location={this.props.location}>
        <SEO title="Workshops" pagePath={this.props.location.pathname} />
        <div className={contentStyles.content}>
          <h1>page in Greek</h1>
          <h1>ICGL13 / Workshops</h1>
          <p>
            The organizing committee are pleased to announce that the following
            workshops have been accepted for ICLGL13:
          </p>
          <ul>
            <li>
              Discourses of Aggression and Violence in Greek Digital
              Communication
            </li>
            <li>
              Greek as a minority and as a majority language in heritage
              contexts: Theoretical, experimental, and sociolinguistic
              perspectives{" "}
            </li>
            <li>Evaluative morphology in Greek</li>
            <li>
              Το λόγιο / μη λόγιο στην ελληνική γλώσσα: προτάσεις και προοπτικές
            </li>
            <li>
              Τρισχιλιετής πλην εφθαρμένη: Ιδεολογίες και λόγοι σχετικά με την
              ελληνική γλώσσα στην εποχή της κρίσης
            </li>
          </ul>
          <p>Deadline for submission to workshops: 31st January 2017</p>
        </div>
      </Layout>
    )
  }
}

export default Workshops
