import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "../styles/index.module.css"

class SecondCallForPapers extends React.Component {
  render() {
    return (
      <Layout language="en" location={this.props.location}>
        <SEO
          title="Second Call for Papers"
          pagePath={this.props.location.pathname}
        />
        <div className={contentStyles.content}>
          <h2>16-19 September 2021</h2>
          <h3>
            2<sup>nd</sup> Call for papers
          </h3>
          <p>Dear Colleagues,</p>
          <p>
            The Department of Modern Greek Studies, Faculty of Philology,
            University of Belgrade, is pleased to announce the 15<sup>th</sup>
            International Conference on Greek Linguistics, which will be held in
            Belgrade, <strong>16-19 September 2021</strong>.
          </p>
          <p>
            ICGL is a biennial meeting, held since 1993, that focuses on all
            aspects of the linguistic study and analysis of Greek.
          </p>
          <p>
            The conference invites contributions to any field of Greek
            Linguistics (including, but not limited to: applied linguistics,
            computational linguistics, corpus linguistics, dialectology,
            discourse analysis, historical linguistics, language teaching,
            lexicography, lexicology, morphology, neurolinguistics, phonetics,
            phonology, pragmatics, psycholinguistics, semantics,
            sociolinguistics, syntax).
          </p>
          <h3>Invited Speakers</h3>
          <ul>
            <li>Prof. Aleksandar Loma, University of Belgrade</li>
            <li>Prof. Zoe Gavriilidou, Democritus University of Thrace</li>
            <li>Prof. Costas Canakis, University of the Aegean</li>
            <li>Prof. Eleni Karantzola, University of the Aegean</li>
            <li>
              Associate Prof. Stavroula Tsiplakou, Open University of Cyprus
            </li>
          </ul>
          <h3>Abstract submission</h3>
          <p>
            Those who wish to participate in ICGL15 with either an oral
            presentation or a poster are invited to submit their abstract by
            <strong>
              {" "}
              15<sup>th</sup> January 2021
            </strong>{" "}
            through the EasyChair platform at the address provided below.
            Notification of acceptance will be sent by{" "}
            <strong>
              31<sup>st</sup> March 2021
            </strong>
            . The languages of the conference are Greek and English.
            Presentations should be 20 minutes long, followed by a 10-minute
            discussion. The abstract should not exceed 500 words, excluding
            references.
          </p>
          <p>
            Abstract submission page:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://easychair.org/conferences/?conf=icgl15"
            >
              https://easychair.org/conferences/?conf=icgl15
            </a>
          </p>
          <p>
            <strong>
              The deadline for abstract submission is extended until 31
              <sup>st</sup> January 2021.
            </strong>
          </p>
          <h3>Multiple presentations policy</h3>
          <p>
            Each author may submit up to two abstracts: either one
            single-authored and one co-authored or two co-authored.
          </p>
          <h3>Information</h3>
          <p>
            Information about registration, accommodation, traveling etc., is
            being uploaded at the conference’s website:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.fil.bg.ac.rs/icgl15"
            >
              www.fil.bg.ac.rs/icgl15
            </a>
            . For any queries, please, contact us at:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:icgl15@fil.bg.ac.rs"
            >
              icgl15@fil.bg.ac.rs
            </a>
          </p>
          <hr />
        </div>
      </Layout>
    )
  }
}

export default SecondCallForPapers
